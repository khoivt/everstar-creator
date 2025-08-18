# Everstar Media Website

## 📋 Mục lục
- [Setup Environment](#setup-environment)
- [Google Sheets Integration](#google-sheets-integration)
- [Development](#development)
- [Deployment](#deployment)

## 🚀 Setup Environment

### 1. Clone repository
```bash
git clone https://github.com/khoivt/everstar-creator
cd everstar-media
npm install
```

### 2. Tạo file environment
```bash
cp .env.example .env.local
```

### 3. Cấu hình environment variables
Cập nhật file `.env.local` với thông tin của bạn theo hướng dẫn bên dưới.

## 📊 Google Sheets Integration

Website sử dụng Google Sheets để lưu trữ dữ liệu form đăng ký.

### Bước 1: Tạo Google Sheet
1. Truy cập [Google Sheets](https://sheets.google.com)
2. Tạo sheet mới với tên bất kỳ
3. Thiết lập header row (dòng đầu tiên):
   ```
   A1: Thời gian
   B1: Họ tên
   C1: Số điện thoại
   D1: TikTok ID
   E1: Tin nhắn
   ```
4. Copy **Sheet ID** từ URL:
   ```
   https://docs.google.com/spreadsheets/d/[COPY_THIS_PART]/edit
   ```

### Bước 2: Tạo Google Cloud Project
1. Truy cập [Google Cloud Console](https://console.cloud.google.com)
2. Tạo project mới
3. Enable APIs:
   - **Google Sheets API**
   - **Google Drive API** (optional)

### Bước 3: Tạo Service Account
1. Vào **"APIs & Services" > "Credentials"**
2. Click **"Create Credentials" > "Service Account"**
3. Điền thông tin service account
4. Tạo và download **JSON key file**

### Bước 4: Share Google Sheet
1. Mở file JSON key, copy `client_email`
2. Quay lại Google Sheet, click **"Share"**
3. Paste client_email, chọn quyền **"Editor"**
4. Uncheck **"Notify people"**, click **"Share"**

### Bước 5: Cập nhật Environment Variables
Từ file JSON key, copy thông tin vào `.env.local`:

```bash
GOOGLE_CLIENT_EMAIL=[copy from JSON key file]
GOOGLE_PRIVATE_KEY="[copy entire private_key from JSON, keep \n as is]"
GOOGLE_SHEET_ID=[copy from Google Sheet URL]
```

## 🛠️ Development

### Chạy development server
```bash
npm run dev
```

### Test Google Sheets integration
```bash
# Test API endpoint
node test-api.js
```

### Build for production
```bash
npm run build
npm start
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_CLIENT_EMAIL` | Service account email từ JSON key | ✅ |
| `GOOGLE_PRIVATE_KEY` | Service account private key từ JSON key | ✅ |
| `GOOGLE_SHEET_ID` | ID của Google Sheet từ URL | ✅ |

## 🔐 Security Notes

- **KHÔNG** commit file `.env.local` vào Git
- File `.env.example` chỉ chứa template, không có secret thật
- Sử dụng different credentials cho production
- Enable 2FA cho Google Cloud account
- Giữ JSON key file an toàn, không share public

## 🚨 Troubleshooting

### "Google Sheets API has not been used" error
1. Vào Google Cloud Console
2. Chọn đúng project
3. Enable Google Sheets API tại **APIs & Services > Library**

### "Unable to parse range" error
- Kiểm tra Sheet ID đúng chưa
- Đảm bảo Service account có quyền access Sheet

### Số điện thoại mất số 0
- API tự động format phone number as text để giữ số 0

### "Authentication failed" error
- Kiểm tra `GOOGLE_CLIENT_EMAIL` và `GOOGLE_PRIVATE_KEY` đúng format
- Đảm bảo private key giữ nguyên `\n` characters

## 📞 Support

Nếu gặp vấn đề, kiểm tra:
1. ✅ Google Sheets API đã enable
2. ✅ Service account có quyền Editor trên Sheet  
3. ✅ Environment variables đúng format
4. ✅ Sheet ID copy chính xác từ URL
5. ✅ JSON key file không bị hỏng

## 🎯 Features

- ✅ Multi-language support (VN/EN/KO)
- ✅ Google Sheets integration
- ✅ Form validation
- ✅ Toast notifications
- ✅ Responsive design
- ✅ GSAP animations
- ✅ Phone number preservation (keeps leading zero)
- ✅ Real-time data saving

## 🏗️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Animation**: GSAP
- **Database**: Google Sheets
- **Form Handling**: React Hook Form
- **Notifications**: React Toastify
- **i18n**: Custom dictionary system
