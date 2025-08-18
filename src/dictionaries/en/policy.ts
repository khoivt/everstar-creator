export default {
  recruitment: {
    heading: "RECRUITMENT CONTENT",
    roles: [
      {
        id: 1,
        title: "SINGING",
        description: "Idols with talent in various music genres: Pop, Folk, Ballads, Bolero, Rap, etc.",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person1.png",
      },
      {
        id: 2,
        title: "TALKING",
        description: "Idols have the ability to engage in conversation, tell stories, and create compelling content.",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person2.png",
      },
      {
        id: 3,
        title: "DANCING",
        description: "Idols with dance talent: Dancing, Contemporary Dance, Classical Dance, Sexy Dance, ...",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person3.png",
      },
      {
        id: 4,
        title: "COSPLAY",
        description: "Idols with cosplay talent: able to dress up as characters from cartoons, games, comic books, etc.",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person4.png",
      },
      {
        id: 5,
        title: "PLAYING INSTRUMENTS",
        description: "Idols who are talented at playing musical instruments: Guitar, Drums, Saxophone, Violin, etc.",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person5.png",
      },
      {
        id: 6,
        title: "FUNNY PK",
        description: "Idols have the ability to create fun and exciting live matches that attract viewers.",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person6.png",
      },
    ],
  },
  bonusPolicy: {
    heading: "BONUS POLICY",
    note: {
      boldText: "NOTE:",
      normalText:
        "Idol's diamond revenue will be automatically transferred to their personal account. TikTok does not require a fixed live streaming schedule, but when an Idol meets the required live streaming hours and revenue, they will receive additional rewards from Everstar Media according to the reward tables below:",
    },
    newIdol: {
      heading: "A. NEW IDOL BONUS",
      table: {
        headers: ["LIVESTREAM REQUIREMENT", "DIAMONDS", "ALLOWANCE"],
        rows: [
          {
            requirement: "18 days\n45 hours",
            diamonds: "5,000 Diamonds",
            support: "2,000,000 VND"
          }
        ],
      },
      apply: {
        heading: "Eligibility:",
        list: [
          "New Creators joining Everstar Network system",
          "Creators who have never participated in any TikTok Live agency",
          "Applied to Creators signing contracts for at least 2 years",
        ],
      },
      conditions: {
        heading: "Reward conditions:",
        list: [
          "Applied to new Idols in the first 2 months",
          "Receive bonus in the month achieved and only once",
        ],
      },
    },
    revenue: {
      heading: "B. REVENUE BONUS",
      notes: [
        "Diamond rewards = Valid diamonds received during the month",
        "Revenue from donated gifts (diamonds) that Idols withdraw to their personal accounts",
        "Company bonuses are distributed between the 15th and 20th of the following month",
      ],
      table: {
        headers: ["Bonus Level", "Livestream Requirements", "", "Diamond Target", "Bonus Amount\n(VND)"],
        subHeaders: ["Valid Live Days", "Valid Live Hours"],
        rows: [
          { tier: "G", daysRequired: "20", hoursRequired: "45", diamondTarget: "30,000", reward: "200,000" },
          { tier: "H", daysRequired: "20", hoursRequired: "80", diamondTarget: "50,000", reward: "300,000" },
          { tier: "E", daysRequired: "24", hoursRequired: "140", diamondTarget: "100,000", reward: "400,000" },
          { tier: "D", daysRequired: "24", hoursRequired: "140", diamondTarget: "300,000", reward: "1,000,000" },
          { tier: "C", daysRequired: "24", hoursRequired: "140", diamondTarget: "500,000", reward: "2,000,000" },
          { tier: "B", daysRequired: "24", hoursRequired: "140", diamondTarget: "750,000", reward: "3,000,000" },
          { tier: "A", daysRequired: "24", hoursRequired: "140", diamondTarget: "1,000,000", reward: "4,000,000" },
          { tier: "S", daysRequired: "24", hoursRequired: "140", diamondTarget: "1,500,000", reward: "6,000,000" },
          { tier: "2S", daysRequired: "24", hoursRequired: "140", diamondTarget: "2,000,000", reward: "8,000,000" },
          { tier: "3S", daysRequired: "24", hoursRequired: "140", diamondTarget: "3,000,000", reward: "10,000,000" },
          { tier: "4S", daysRequired: "24", hoursRequired: "140", diamondTarget: "4,000,000", reward: "12,000,000" },
          { tier: "5S", daysRequired: "24", hoursRequired: "140", diamondTarget: "5,000,000", reward: "14,000,000" },
        ],
      },
      growthBonus: {
        text: "** Next growth level above 5,000,000 diamonds:\nEarn an additional 2,000,000 VND for every 1,000,000 diamonds gained.",
      },
      conditions: {
        heading: "Eligibility:",
        list: [
          "Applicable from the first month following joining the agency",
          "Applicable simultaneously with the New Creator Support Policy",
          "Monthly rewards are awarded upon meeting the eligibility criteria for each tier; tiers are not cumulative",
          "Creators who violate TikTok Live policies (18+, multiple accounts, promoting violence, etc.) will have all rewards revoked.",
        ],
      },
    },
    other: {
      heading: "C. OTHER BONUS POLICIES",
      diligence: {
        heading: "DEDICATION BONUS",
        table: {
          headers: ["Bonus Level", "Livestream Requirements", "", "Monthly Diamond Condition", "Bonus Amount\n(VND)"],
          subHeaders: ["Valid Live Days", "Valid Live Hours"],
          rows: [
            { tier: "G", daysRequired: "25", hoursRequired: "150", diamondCondition: "50,000 --> 100,000", reward: "50,000" },
            { tier: "H", daysRequired: "25", hoursRequired: "150", diamondCondition: "100,000 and above", reward: "200,000" },
          ],
        },
        conditions: {
          heading: "Eligibility:",
          list: [
            "Applicable to Idols from the time of joining Everstar Media",
            "No violations of serious rules on TikTok that result in a 7-day or permanent live ban",
          ],
        },
      },
      dailyRanking: {
        heading: "TOP RANKING BONUS",
        table: {
          headers: ["Daily Ranking", "Bonus Amount\n(VND)"],
          rows: [
            { ranking: "Top 1", reward: "500,000" },
            { ranking: "Top 2-5", reward: "300,000" },
          ],
        },
        conditions: {
          heading: "Eligibility:",
          list: [
            "Idols are ranked on TikTok's daily chart, which ends at 12:00 a.m. every day.",
            "Idols need to take a screenshot of the chart at 11:59 p.m. and send it to their direct manager to receive their reward.",
          ],
        },
      },
      pk: {
        heading: "PK BONUS",
        table: {
          headers: ["Diamonds Achieved", "Bonus Amount\n(VND)"],
          rows: [
            { diamondRange: "100,000 --> 500,000", reward: "200,000" },
            { diamondRange: "500,001 and above", reward: "500,000" },
          ],
        },
        note: "Only applicable to PK battles organized and arranged by the Company",
      },
    },
  },
};
