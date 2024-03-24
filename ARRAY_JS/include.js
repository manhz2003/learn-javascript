// includes() : dùng để kiểm tra 1 chuỗi và 1 mảng có tồn tại hay không trả về boolean.
var numbers = [1, 2, 3, 4, 5];

// kiểm tra giá trị tồn tại trong mảng.
console.log(numbers.includes(3)); // Kết quả: true
console.log(numbers.includes(6)); // Kết quả: false

var str = "Hello, world!";

console.log(str.includes("Hello")); // Kết quả: true
console.log(str.includes("foo")); // Kết quả: false
