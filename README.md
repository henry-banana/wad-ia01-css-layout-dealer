23120262 - Tống Dương Thái Hòa - IA01 - Web Application Development

Dealers - CSS Layout với TailwindCSS
====================================

Dự án nhỏ dùng TailwindCSS để dựng layout trang Dealers. Repo đã cấu hình sẵn script build/watch, bạn chỉ cần cài dependency và chạy.

Yêu cầu môi trường
------------------
- Node.js LTS (>= 18 khuyến nghị)
- Trình duyệt bất kỳ để mở file `public/index.html`

Cài đặt
-------
Trong PowerShell (Windows):

```powershell
# Cài dependency
npm install
```

Build CSS một lần
------------------
```powershell
npm run build
```
Lệnh này sẽ biên dịch `src/css/style.css` với Tailwind và xuất ra `dist/output.css`. File này đã được nhúng trong `public/index.html`.

Chế độ theo dõi (Watch)
------------------------
Trong quá trình phát triển, bật watch để tự build khi bạn chỉnh sửa CSS/HTML:

```powershell
npm run watch
```

Xem kết quả
-----------
- Mở trực tiếp file `public/index.html` bằng trình duyệt, hoặc bật một HTTP server tĩnh nếu muốn (tùy chọn).
- Đảm bảo sau khi build, thư mục `dist/` có file `output.css` để trang hiển thị đúng style.

Cấu trúc thư mục
----------------
```
.
├─ public/
│  └─ index.html          # Trang chính, link tới ../dist/output.css
├─ src/
│  ├─ css/
│  │  └─ style.css        # Nguồn Tailwind + class tuỳ chỉnh (@layer components)
│  └─ assets/             # Chứa hình ảnh (envelop-border.png, stamp.png, ...)
├─ dist/                  # CSS đã build ra
├─ tailwind.config.js     # Mở rộng màu sắc, font, scan content
├─ package.json           # Scripts build/watch
└─ .gitignore             # Bỏ qua node_modules, dist, logs, ...
```

Tuỳ biến nhanh
--------------
- Màu sắc/Font: chỉnh trong `tailwind.config.js` (mục `theme.extend`).
- Class tuỳ chỉnh: xem/điều chỉnh trong `src/css/style.css` (khối `@layer components`).
- Ảnh và asset: đặt file vào `src/assets/` và sửa đường dẫn trong CSS/HTML nếu cần.

Lưu ý đường dẫn ảnh trong CSS
-----------------------------
Trong `style.css`, các ảnh được tham chiếu như `url('../assets/...')`. Khi dùng Tailwind CLI mặc định, các URL này vẫn trỏ tới thư mục `src/assets` so với file CSS nguồn. Vì `dist/output.css` được link từ `public/index.html`, đảm bảo cấu trúc thư mục giữ nguyên như hiện tại hoặc cập nhật lại đường dẫn nếu bạn di chuyển file.

Khắc phục sự cố thường gặp
--------------------------
- Không thấy style áp dụng:
	- Chạy `npm run build` để tạo `dist/output.css`.
	- Kiểm tra trong `public/index.html` đường dẫn tới `../dist/output.css` có đúng không.
	- Kiểm tra `tailwind.config.js` phần `content` đã quét đúng file HTML/JS: hiện tại là `./public/*{.html, .js}`.
- Ảnh nền (envelop-border, stamp) không hiển thị:
	- Đảm bảo file ảnh tồn tại trong `src/assets/` và đường dẫn trong CSS đúng.
- Lỗi khi chạy lệnh Tailwind:
	- Cài Node.js LTS, sau đó chạy lại `npm install`.

Triển khai tĩnh (tùy chọn)
---------------------------
Vì đây là site tĩnh, bạn có thể deploy thư mục `public/` cùng với `dist/` lên bất kỳ dịch vụ static hosting nào (GitHub Pages, Netlify, Vercel...). Trước khi deploy nhớ chạy `npm run build` để có `dist/output.css`.

Giấy phép
---------
Chỉ dùng cho mục đích học tập/bài tập. Hình ảnh/asset tùy thuộc nguồn của bạn.
