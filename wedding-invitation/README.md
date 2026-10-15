# Thiệp cưới Văn Quyền ♥ Ngọc Liên

Trang HTML tĩnh được điều chỉnh trực tiếp từ file HTML bạn cung cấp, giữ lại bố cục và hiệu ứng Ladipage.

## Thay đổi
- Tiệc thân mật nhà trai: 08:00, Chủ Nhật 25/10/2026 (16/09 âm lịch).
- Mọi nội dung khác giữ theo HTML gốc.

## Chạy
Mở `index.html` trong Chrome, hoặc dùng `python -m http.server 8000` trong thư mục này rồi truy cập http://localhost:8000.
Để đăng GitHub Pages hoặc Netlify, upload toàn bộ nội dung thư mục này (index.html ở thư mục gốc).

## Thay thông tin
Sửa `config.js` rồi refresh trang. HTML gốc cũng đã chứa giá trị mới làm fallback.

## Giới hạn cần biết
Bạn chỉ gửi file HTML, **không có thư mục `_files`** đi kèm. Vì vậy site vẫn dựa vào font, hình ảnh, GIF, nhạc và thư viện LadiPage từ bên thứ ba. Các đường dẫn `_files` đến runtime và stylesheet được đổi sang CDN gốc, còn icon đã thay bằng SVG đơn giản. Bản này **không thể đảm bảo giống 100% hay hoạt động offline**; khi tài nguyên gốc bị xoá hoặc CDN hạn chế hotlink, tính năng sẽ hỏng. Phần bản đồ đã chuyển sang Google Maps embed theo địa chỉ vì file embed.html không được tải về. Nếu trang có form gửi lời chúc/xác nhận, form đó còn phụ thuộc dịch vụ Ladipage gốc; không có backend độc lập.

Chỉ triển khai public nếu bạn có quyền sử dụng hình ảnh, âm nhạc và nội dung của trang gốc.
