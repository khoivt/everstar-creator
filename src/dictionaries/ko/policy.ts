export default {
  recruitment: {
    heading: "채용 내용",
    roles: [
      {
        id: 1,
        title: "노래하기",
        description: "아이돌 모집 분야: 발라드, 민요, 트로트, 볼레로, 랩 등 다양한 음악 장르",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person1.png",
      },
      {
        id: 2,
        title: "토크",
        description: "매력적인 대화와 스토리텔링으로 흥미로운 콘텐츠를 만들어낼 수 있는 아이돌",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person2.png",
      },
      {
        id: 3,
        title: "댄스",
        description: "애니메이션, 게임, 만화 속 캐릭터로 변신할 수 있는 코스프레 재능을 가진 아이돌",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person3.png",
      },
      {
        id: 4,
        title: "코스프레",
        description: "애니메이션, 게임, 만화 속 캐릭터로 변신할 수 있는 코스프레 재능을 가진 아이돌",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person4.png",
      },
      {
        id: 5,
        title: "악기 연주",
        description: "기타, 드럼, 색소폰, 바이올린 등 다양한 악기 연주 실력을 가진 아이돌",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person5.png",
      },
      {
        id: 6,
        title: "재미있는 PK",
        description: "라이브에서 유쾌하고 매력적인 대결을 만들어 시청자를 사로잡을 수 있는 아이돌",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person6.png",
      },
    ],
  },
  bonusPolicy: {
    heading: "보너스 정책",
    note: {
      boldText: "주의사항:",
      normalText:
        "아이돌의 다이아몬드 수익은 본인 계좌로 자동 출금됩니다. TikTok은 고정된 라이브 날짜와 시간을 요구하지 않지만, 아이돌이 라이브 일수와 시간을 충족하고 목표 수익을 달성하면\n아래 보너스 표에 따라 에버스타 미디어에서 추가 보너스를 지급합니다:",
    },
    newIdol: {
      heading: "A. 초보자용 지원정책",
      table: {
        headers: ["라이브스트림 요구사항", "다이아몬드", "지원"],
        rows: [
          {
            requirement: "18일\n45시간",
            diamonds: "5,000 다이아몬드",
            support: "2,000,000 VND"
          }
        ],
      },
      apply: {
        heading: "적용 대상:",
        list: [
          "Everstar Network에 처음 가입한 Creator",
          "TikTok Live 에이전트에 가입한 적이 없는 자",
          "계약기간 최소한 2년",
        ],
      },
      conditions: {
        heading: "지원 조건:",
        list: [
          "에이전트에 가입한 일기준 첫 2개월만 적용함",
          "이 지원금은 조건/표준에 만족한 해당달에 1번만 수령할 것입니다. ",
        ],
      },
    },
    revenue: {
      heading: "B. 매출 보너스",
      notes: [
        "보너스 산정 다이아몬드 = 해당 월에 받은 유효 다이아몬드 수량",
        "기프트(다이아몬드)로 발생한 수익은 아이돌이 본인 계좌로 직접 출금",
        "회사 보너스는 다음 달 15~20일에 지급됩니다.",
      ],
      table: {
        headers: ["보너스 등급", "라이브스트림 요구사항", "", "다이아몬드 목표", "보너스 금액\n(VND)"],
        subHeaders: ["유효 라이브 일수", "유효 라이브 시간"],
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
        text: "**  500만개의 다이먼트 이상 달성 시, 100만개의 다이먼트를 달성할 때마다 보너스 200만동을 지급합니다",
      },
      conditions: {
        heading: "보너스 취득 조건:",
        list: [
          "에이전트에 가입하는 첫 달부터  적용합니다",
          "초보자 지원정책과 동시에 적용합니다",
          "매월 어느 급에 달성하면 해당한 보상을 수령할 것임. 보상 적립해서 한 번에 수령하면 안됩니다",
          "TikTok Live정책 위반자 (18+ , 멀티계정, 폭행격려...)보상 수령 취소됩니다",
        ],
      },
    },
    other: {
      heading: "C. 기타 보상 정책",
      diligence: {
        heading: "출석 보너스",
        table: {
          headers: ["보너스 등급", "라이브스트림 요구사항", "", "월별 다이아몬드 조건", "보너스 금액\n(VND)"],
          subHeaders: ["유효 라이브 일수", "유효 라이브 시간"],
          rows: [
            { tier: "G", daysRequired: "25", hoursRequired: "150", diamondCondition: "50,000 --> 100,000", reward: "50,000" },
            { tier: "H", daysRequired: "25", hoursRequired: "150", diamondCondition: "100,000 이상", reward: "200,000" },
          ],
        },
        conditions: {
          heading: "보너스 지급 조건:",
          list: [
            "에버스타 미디어에 가입한 시점부터 적용합니다",
            "TikTok에서 7일 또는 영구 라이브 정지와 같은 중대한 위반 사항이 없습니다",
          ],
        },
      },
      dailyRanking: {
        heading: "일일 랭킹 보너스",
        table: {
          headers: ["일일 랭킹", "보너스 금액\n(VND)"],
          rows: [
            { ranking: "1위", reward: "500,000" },
            { ranking: "2-5위", reward: "300,000" },
          ],
        },
        conditions: {
          heading: "보너스 지급 조건:",
          list: [
            "아이돌이 TikTok의 일일 랭킹에  명시되며 매일 00:00시에 집계가 종료됩니다.",
            "보너스를 받기 위해서는 23:59에 랭킹 화면을 캡처하여",
            "담당 매니저에게 제출해야 합니다"
          ],
        },
      },
      pk: {
        heading: "PK 보너스",
        table: {
          headers: ["달성한 다이아몬드", "보너스 금액\n(VND)"],
          rows: [
            { diamondRange: "100,000 --> 500,000", reward: "200,000" },
            { diamondRange: "500,001 이상", reward: "500,000" },
          ],
        },
        note: "회사에서 주최하고 조직한 PK 배틀에만 적용",
      },
    },
  },
};
