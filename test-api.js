// Test Google Sheets API
// Chạy lệnh: node test-api.js

const testData = {
  name: "Nguyễn Văn A",
  phone: "0123456789", 
  tiktokId: "@test123",
  message: "Tôi muốn đăng ký làm idol livestream"
};

async function testAPI() {
  try {
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    console.log('Response:', result);
    
    if (result.success) {
      console.log('✅ Test thành công! Dữ liệu đã được lưu vào Google Sheets');
    } else {
      console.log('❌ Test thất bại:', result.error);
    }
  } catch (error) {
    console.error('❌ Lỗi kết nối:', error);
  }
}

// Uncomment để test khi server đang chạy
testAPI();

console.log('📝 File test đã được tạo. Để test API:');
console.log('1. Chạy: npm run dev');
console.log('2. Uncomment dòng testAPI() ở cuối file này');
console.log('3. Chạy: node test-api.js');
