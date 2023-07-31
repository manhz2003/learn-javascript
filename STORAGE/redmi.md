Cookies, Local Storage và Session Storage là các cơ chế lưu trữ dữ liệu trong trình duyệt web, nhưng có mục đích và cách sử dụng khác nhau. Dưới đây là sự khác nhau giữa Cookies, Local Storage và Session Storage:

Cookies:

Cookies là một cách để lưu trữ thông tin trong trình duyệt web.
Cookies được gửi giữa máy khách (trình duyệt) và máy chủ thông qua tiêu đề HTTP.
Cookies thường được sử dụng để lưu trữ thông tin như thông tin đăng nhập, thông tin phiên làm việc, tuỳ chọn ngôn ngữ và các cài đặt cá nhân của người dùng.
Cookies có thể được đặt với thời gian sống xác định hoặc không xác định. Thời gian sống của cookies có thể được thiết lập để tồn tại trong một phiên làm việc (session cookies) hoặc lưu trữ trong một khoảng thời gian cụ thể (persistent cookies).
Cookies được tự động gửi từ trình duyệt đến máy chủ mỗi khi gửi yêu cầu HTTP.
Cookies có dung lượng lưu trữ giới hạn (thường là khoảng vài kilobyte).
Local Storage:

Local Storage cung cấp một cơ chế lưu trữ dữ liệu không hết hạn (persistent) trong trình duyệt.
Dữ liệu trong Local Storage được lưu trữ dưới dạng cặp key-value.
Local Storage được lưu trữ trên máy khách (trình duyệt) và không được gửi đến máy chủ mỗi khi gửi yêu cầu HTTP.
Dữ liệu trong Local Storage sẽ vẫn tồn tại sau khi trình duyệt web đóng và mở lại.
Local Storage có dung lượng lưu trữ lớn hơn so với Cookies (thường là vài megabyte).
Local Storage chỉ có thể được truy cập từ trang web đã lưu trữ dữ liệu đó.
Session Storage:

Session Storage cung cấp một cơ chế lưu trữ dữ liệu trong trình duyệt trong một phiên làm việc.
Dữ liệu trong Session Storage được lưu trữ dưới dạng cặp key-value.
Session Storage cũng được lưu trữ trên máy khách (trình duyệt) và không được gửi đến máy chủ mỗi khi gửi yêu cầu HTTP.
Dữ liệu trong Session Storage chỉ tồn tại trong suốt phiên làm việc của trình duyệt. Khi trình duyệt đóng, dữ liệu trong Session Storage sẽ bị xóa