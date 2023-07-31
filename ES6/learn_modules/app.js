// MODULES
// Lý thuyết
// - Các mô-đun JavaScript chia nhỏ mã của mình thành các tệp riêng biệt.
// - Điều này làm cho việc duy trì cơ sở mã dễ dàng hơn.
// - tổ chức mã thành các phần nhỏ hơn, tách biệt và tái sử dụng.

// + export: dữ liệu được xuất đi.
// + import: dữ liệu được nhập vào.

// 1 file liên kết với html qua thẻ script phải có type là module: <script type="module" src="./app.js"></script>

// import
// + có thể import các mô-đun vào một tệp theo hai cách, dựa trên việc chúng được đặt là export hay export default.
// + export đặt tên được tạo bằng cách sử dụng ngoặc nhọn. export default thì không.


// để import được 1 thành phần thì phải export thành phần đó ở file khác.
import myFunction from './module1.js'
myFunction(123)

// import các biến của module test.js
import {age, name, address} from './module1.js'
myFunction(age)

// có thể sử dụng từ khoá as để đặt biệt danh dễ phân biệt và tránh trùng tên.
import {age as tuoi, name as ten, address as diaChi} from './module1.js'
console.log(tuoi);

// đây là 1 class.
import { Car } from './module1.js'
var toyota = new Car('red', 'x');
console.log(toyota);

// đây là 1 mảng.
import {y} from './module1.js'
console.log(y);

// import * as alias là import tất cả tử 1 file js.

