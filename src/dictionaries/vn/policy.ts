export default {
  recruitment: {
    heading: "NỘI DUNG TUYỂN DỤNG",
    roles: [
      {
        id: 1,
        title: "CA HÁT",
        description: "Idol có tài năng ở các thể loại nhạc: Nhạc Trẻ, Dân Ca, Trữ Tình, Bolero, Rap, ...",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person1.png",
      },
      {
        id: 2,
        title: "TRÒ CHUYỆN",
        description: "Idol có khả năng trò chuyện cuốn hút, kể chuyện, tạo đc nội dung cuốn hút.",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person2.png",
      },
      {
        id: 3,
        title: "NHẢY MÚA",
        description: "Idol có tài năng vũ đạo: Nhảy, Múa đương đại, Múa Cổ Trang, Sexy Dance, ...",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person3.png",
      },
      {
        id: 4,
        title: "COSPLAY",
        description: "Idol có tài năng cosplay: có thể hoá trang thành nhân vật hoạt hình, game, truyện tranh, ...",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person4.png",
      },
      {
        id: 5,
        title: "NHẠC CỤ",
        description: "Idol có tài năng chơi các loại nhạc cụ: Guitar, Trống, Saxophone, Violin, ...",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person5.png",
      },
      {
        id: 6,
        title: "FUNNY PK",
        description: "Idol có khả năng tạo ra những trận thi đấu vui nhộn, hấp dẫn trên live, thu hút người xem.",
        bgImage: "/images/bg-policy.jpg",
        personImage: "/images/person6.png",
      },
    ],
  },
  bonusPolicy: {
    heading: "CHÍNH SÁCH THƯỞNG",
    note: {
      boldText: "LƯU Ý:",
      normalText:
        "Doanh thu kim cương của Idol sẽ tự rút về tài khoản cá nhân. TikTok không yêu cầu ngày giờ Live cố định, nhưng khi Idol Live đủ ngày giờ và doanh thu yêu cầu sẽ được thưởng thêm từ Everstar Media theo các bảng thưởng dưới đây:",
    },
    newIdol: {
      heading: "A. THƯỞNG IDOL MỚI",
      table: {
        headers: ["YÊU CẦU LIVESTREAM", "KIM CƯƠNG", "HỖ TRỢ"],
        rows: [
          {
            requirement: "18 ngày\n45 giờ",
            diamonds: "5.000 KC",
            support: "2.000.000 VND"
          }
        ],
      },
      apply: {
        heading: "Đối tượng áp dụng:",
        list: [
          "Creator mới gia nhập hệ thống Everstar Network",
          "Creator chưa từng tham gia bất kỳ đại lý TikTok Live nào",
          "Áp dụng với Creator ký hợp đồng tối thiểu 2 năm",
        ],
      },
      conditions: {
        heading: "Điều kiện nhận thưởng:",
        list: [
          "Áp dụng cho Idol mới trong 2 tháng đầu tiên",
          "Đạt ở tháng nào nhận thưởng ở tháng đó và nhận duy nhất 1 lần",
        ],
      },
    },
    revenue: {
      heading: "B. THƯỞNG DOANH THU",
      notes: [
        "Kim cương tính thưởng = Kim cương hợp lệ nhận được trong tháng",
        "Doanh thu từ quà tặng donate (kim cương) Idol tự rút về tài khoản cá nhân",
        "Thưởng công ty được phát vào 15 - 20 của tháng tiếp theo",
      ],
      table: {
        headers: ["Cấp thưởng", "Yêu cầu về livestream", "", "Kim cương chỉ tiêu", "Mức thưởng\n(VND)"],
        subHeaders: ["Số ngày live hợp lệ", "Số giờ live hợp lệ"],
        rows: [
          { tier: "G", daysRequired: "20", hoursRequired: "45", diamondTarget: "30.000", reward: "200.000" },
          { tier: "H", daysRequired: "20", hoursRequired: "80", diamondTarget: "50.000", reward: "300.000" },
          { tier: "E", daysRequired: "24", hoursRequired: "140", diamondTarget: "100.000", reward: "400.000" },
          { tier: "D", daysRequired: "24", hoursRequired: "140", diamondTarget: "300.000", reward: "1.000.000" },
          { tier: "C", daysRequired: "24", hoursRequired: "140", diamondTarget: "500.000", reward: "2.000.000" },
          { tier: "B", daysRequired: "24", hoursRequired: "140", diamondTarget: "750.000", reward: "3.000.000" },
          { tier: "A", daysRequired: "24", hoursRequired: "140", diamondTarget: "1.000.000", reward: "4.000.000" },
          { tier: "S", daysRequired: "24", hoursRequired: "140", diamondTarget: "1.500.000", reward: "6.000.000" },
          { tier: "2S", daysRequired: "24", hoursRequired: "140", diamondTarget: "2.000.000", reward: "8.000.000" },
          { tier: "3S", daysRequired: "24", hoursRequired: "140", diamondTarget: "3.000.000", reward: "10.000.000" },
          { tier: "4S", daysRequired: "24", hoursRequired: "140", diamondTarget: "4.000.000", reward: "12.000.000" },
          { tier: "5S", daysRequired: "24", hoursRequired: "140", diamondTarget: "5.000.000", reward: "14.000.000" },
        ],
      },
      growthBonus: {
        text: "** Mức tăng trưởng tiếp theo trên 5,000,000 kim cương:\nThưởng thêm 2,000,000 VND với mỗi 1,000,000 kim cương tăng trưởng",
      },
      conditions: {
        heading: "Điều kiện nhận thưởng:",
        list: [
          "Áp dụng từ tháng đầu tiên kể từ thời điểm gia nhập đại lý",
          "Áp dụng đồng thời cùng chính sách Hỗ trợ Creator mới",
          "Hàng tháng khi đạt đủ điều kiện mốc nào sẽ nhận mức thưởng mốc đó, không cộng dồn các mốc",
          "Creator bị vi phạm nghiêm trọng các chính sách của TikTok Live (18+ , đa tài khoản, cổ súy bạo lực...) sẽ bị hủy mọi loại thưởng",
        ],
      },
    },
    other: {
      heading: "C. CHÍNH SÁCH THƯỞNG KHÁC",
      diligence: {
        heading: "THƯỞNG CHUYÊN CẦN",
        table: {
          headers: ["Cấp thưởng", "Yêu cầu về livestream", "", "Điều kiện kim cương trong tháng", "Mức thưởng\n(VND)"],
          subHeaders: ["Số ngày live hợp lệ", "Số giờ live hợp lệ"],
          rows: [
            { tier: "G", daysRequired: "25", hoursRequired: "150", diamondCondition: "50.000 --> 100.000", reward: "50.000" },
            { tier: "H", daysRequired: "25", hoursRequired: "150", diamondCondition: "100.000 trở lên", reward: "200.000" },
          ],
        },
        conditions: {
          heading: "Điều kiện nhận thưởng:",
          list: [
            "Áp dụng cho Idol từ thời điểm gia nhập Everstar Media",
            "Không vi phạm các lỗi nghiêm trọng trên TikTok dẫn đến khoá live 7 ngày hoặc vĩnh viễn",
          ],
        },
      },
      dailyRanking: {
        heading: "THƯỞNG BXH NGÀY",
        table: {
          headers: ["BXH Ngày", "Mức thưởng\n(VND)"],
          rows: [
            { ranking: "Top 1", reward: "500.000" },
            { ranking: "Top 2-5", reward: "300.000" },
          ],
        },
        conditions: {
          heading: "Điều kiện nhận thưởng:",
          list: [
            "Idol nằm trong BXH ngày của TikTok, kết thúc vào 00:00h mỗi ngày",
            "Idol cần chụp lại bảng xếp hạng vào lúc 23:59 và gửi cho quản lý trực tiếp để nhận thưởng",
          ],
        },
      },
      pk: {
        heading: "THƯỞNG PK",
        table: {
          headers: ["Kim cương đạt", "Mức thưởng\n(VND)"],
          rows: [
            { diamondRange: "100.000 --> 500.000", reward: "200.000" },
            { diamondRange: "500.001 trở lên", reward: "500.000" },
          ],
        },
        note: "Chỉ áp dụng trên các trận PK do Công ty sắp xếp, tổ chức",
      },
    },
  },
};
