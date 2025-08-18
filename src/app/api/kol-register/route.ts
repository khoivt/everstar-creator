import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed", status: 400 });
  }

  const body = { data, secret: process.env.GOOGLE_SCRIPT_SECRET };
  console.log("###############", body);
  const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!googleScriptUrl) {
    return NextResponse.json({ error: "Google Script URL is not configured", status: 500 });
  }
  const r = await fetch(googleScriptUrl, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const result = await r.json();
  console.log("###############", result);
  return NextResponse.json(result, { status: r.status });
}
