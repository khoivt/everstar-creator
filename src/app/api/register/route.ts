import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

interface FormData {
  name: string;
  phone: string;
  tiktokId: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json();

    // Validation
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { success: false, error: 'Tên và số điện thoại là bắt buộc' },
        { status: 400 }
      );
    }

    // Log để debug
    console.log('Attempting to save to Google Sheets:', {
      name: body.name,
      phone: `'${body.phone}`,
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY
    });

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Thêm dữ liệu vào Google Sheet
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A:E',
      valueInputOption: 'RAW',
      requestBody: {
        values: [
          [
            new Date().toLocaleString('vi-VN', {
              timeZone: 'Asia/Ho_Chi_Minh',
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            }),
            body.name,
            body.phone,
            body.tiktokId || '',
            body.message || '',
          ],
        ],
      },
    });

    console.log('Google Sheets API success:', result.status);

    return NextResponse.json({ 
      success: true, 
      message: 'Đăng ký thành công!' 
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error('Error saving to Google Sheets:', {
      message: errorMessage,
      stack: errorStack
    });

    return NextResponse.json(
      { 
        success: false, 
        error: 'Có lỗi xảy ra khi lưu dữ liệu. Vui lòng thử lại!',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}
