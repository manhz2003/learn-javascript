// OBJECT JS
// Lưu trữ thông tin của 1 đối tượng cụ thể
// gồm key và value: ví dụ key name có value là 'Mạnh Nguyễn'
// có thể đặt function làm value trong object
// từ khóa this thay cho myInfo

// Khai báo 1 object
let myInfo = {
        name: 'Mạnh',
        age: 19,
        address: 'Hà Nội',
        getName: function() {
            return this.name
        },
        firstName: 'nguyen',
        [className]: 'it3' // thêm 1 key là 1 biến khai báo bên ngoài object
    };


var className = 'className';

delete myInfo.firstName // xóa phần tử trong object
myInfo.email = 'manhthenguyen113@gmail.com' // thêm 1 key và value vào myInfo
myInfo['my-email'] = 'manhthenguyen2003@gmail.com' // thêm key đặt tên có ký tự -

console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo.getName());

// đối tượng date
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
let hours = date.getHours()
let min = date.getMinutes()
let second = date.getSeconds()
console.log(date)
console.log(`ngày ${day} tháng ${month} năm ${year}`)
console.log(`giờ ${hours} phút ${min} giây ${second}`)

// đối tượng math

/*  1 số hàm math
    - Math.PI       (trả về số pi)
    - Math.round()  (làm tròn số thập phân)
    - Math.abs      (giá trị tuyệt đối)
    - Math.ceil()   (chỉ làm tròn trên)
    - Math.floor()  (chỉ làm tròn dưới)
    - Math.random() (tạo 1 dãy số thập phân ngẫu nhiên nhỏ hơn 1)
    - Math.min()    (lấy ra số nhỏ nhất)
    - Math.max()    (lấy ra số lớn nhất)
    .....
*/

console.log(Math.PI)
console.log(Math.round(1.5))
console.log(Math.min(32, 5, 100, 10, 40))
console.log(Math.max(1.5, 5.6, 30, 70, 55))