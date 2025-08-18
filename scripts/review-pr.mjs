import fs from "fs";
import { execSync } from "child_process";
import { GoogleGenAI } from "@google/genai";
import { Octokit } from "@octokit/rest";

// Load env variables
const { GITHUB_TOKEN, GEMINI_API_KEY, GITHUB_REPOSITORY, GITHUB_EVENT_PATH } = process.env;

if (!GITHUB_TOKEN || !GEMINI_API_KEY || !GITHUB_REPOSITORY || !GITHUB_EVENT_PATH) {
  console.error("❌ Missing environment variables.");
  process.exit(1);
}

// Read PR context
const payload = JSON.parse(fs.readFileSync(GITHUB_EVENT_PATH, "utf8"));
const prNumber = payload.pull_request?.number;
const baseBranch = payload.pull_request?.base?.ref;
const headBranch = payload.pull_request?.head?.ref;

if (!prNumber || !baseBranch || !headBranch) {
  console.error("❌ Cannot extract PR details from event payload.");
  process.exit(1);
}

console.log(`📌 PR #${prNumber} | base: ${baseBranch} → head: ${headBranch}`);

// Fetch base branch and get diff
try {
  execSync(`git fetch origin ${baseBranch}`, { stdio: "inherit" });
} catch (err) {
  console.error(`❌ Failed to fetch base branch ${baseBranch}, error: ${err}`);
  process.exit(1);
}

let diff = "";
try {
  diff = execSync(`git diff origin/${baseBranch} HEAD`, { encoding: "utf-8" });
  if (!diff.trim()) {
    console.log("✅ No changes detected in this PR.");
    process.exit(0);
  }
} catch (err) {
  console.error("❌ Error getting git diff:", err.message);
  process.exit(1);
}

// Send code diff to Gemini
console.log("🤖 Sending code to Gemini for review...");

console.log(diff);

const prompt = `
You are a senior frontend engineer specialized in TypeScript, React, and Next.js (App Router).

Please review the following code diff from a pull request in a Next.js project. Focus on:

- React & Next.js App Router best practices
- Correct use of Client vs Server Components
- Code readability and maintainability
- React hooks (useEffect, useCallback, useMemo)
- Performance (dynamic imports, lazy loading, RSC)
- TypeScript typing (avoid 'any', use clear types/interfaces/enums)
- Tailwind CSS consistency (spacing, color, class usage)

\`\`\`diff
${diff}
\`\`\`

Provide concise, specific, and actionable feedback like a real code review. Avoid generic comments.
`;

let geminiResponse;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

try {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  console.log(JSON.stringify(response, null, 2));
  geminiResponse = response.candidates?.[0]?.content?.parts?.map(p => p.text).join("\n");

  if (!geminiResponse) {
    throw new Error("No response from Gemini.");
  }
} catch (err) {
  console.error("❌ Error from Gemini API:", err.response?.data || err.message);
  process.exit(1);
}

// Output AI review
console.log("✅ Gemini review:\n");
console.log(geminiResponse);

// Optional: Post comment to PR
// Uncomment below if you want to actually post to GitHub
const [owner, repo] = GITHUB_REPOSITORY.split("/");
const octokit = new Octokit({ auth: GITHUB_TOKEN });

await octokit.issues.createComment({
  owner,
  repo,
  issue_number: prNumber,
  body: `🤖 **AI Code Review by Gemini:**\n\n${geminiResponse}`,
});
console.log("💬 Comment posted to PR");
