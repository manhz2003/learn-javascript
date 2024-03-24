// Các phương thức phổ biến của array.
// Array length     : trả về độ dài (kích thước) của một mảng.
// Array toString() : chuyển đổi một mảng thành một chuỗi, được phân tách bằng dấu phẩy.
// Array join()     : nối tất cả các phần tử mảng thành một chuỗi bằng các kí tự tuỳ thích.
// Array pop()      : xoá phần tử cuối mảng và trả về phần tử đó có kiểu dữ liệu tương ứng với giá trị đó.
// Array push()     : thêm phần tử mới vào cuối mảng và trả về độ dài mới của mảng đó, có thể thêm nhiều phần tử.
// Array shift()    : xoá phần tử  đầu tiên trả về phần tử đó và lùi tất cả các phần tử khác sang index thấp hơn.
// Array unshift()  : thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng sau khi thêm.
// Array delete()   : xóa một phần tử trong mảng, nhưng không làm thay đổi độ dài của mảng. giá trị phần tử bị xoá thành undefined.
// Array concat()   : tạo một mảng mới bằng cách hợp nhất (nối) các mảng hiện có.
// Array slice()    : cắt 1 hoặc nhiều phần tử từ mảng cũ ra mảng mới nhưng không làm thay đổi mảng cũ.
// Array splice()   : xóa phần tử trong mảng và trả về mảng chứa các phần tử đã bị xoá, có thể thêm hoặc thay thế phần tử mới vào.

var person = ["Manh", "Lan Anh", "Tung", "Dung"];

// Array length
console.log(person.length);

// Array toString()
console.log(person.toString());

// Array join()
console.log(person.join(" - "));
console.log(person.join(", "));

// Array pop()
var x = person.pop();
console.log(x);

// Array push()
console.log(person.push("Nam", "Minh"));
console.log(person);

// Array shift()
console.log(person.shift());

// Array unshift()
console.log(person.unshift("hi", "ha"));

// Array delete()
// delete person[0]
// console.log(person);

// Array concat()
var person2 = ["Lan", "nhung", "Linh"];

var arrConcat = person.concat(person2);
console.log(arrConcat);

// Array slice()
// 1 là vị trí bắt đầu cắt, 3 là vị trí kết thúc.
console.log(person.slice(1, 3));

// khi sử dụng slice không truyền gì vào nó sẽ trả về 1 bản sao của mảng gốc. reverse đảo ngược mảng
console.log(person.slice().reverse());

// 0 là cắt từ đầu đến hết mảng.
console.log(person.slice(0));

// cắt ngược từ cuối mảng.
console.log(person.slice(0, -1));

// Array splice()
// tham số thứ 1 là vị trí bắt đầu, tham số thứ 2 là số lương phần tử muốn xoá từ vị trí bắt đầu
// tham số thứ 3 là phần tử chèn vào hoặc thay thế phần tử bị xoá.

// trường hợp này là chèn vào vì xoá 0 phần tử
console.log(person.splice(3, 0, "x", "s"));
console.log(person);

// trường hợp này là xoá 1 phần tử  sau vị trí 2 và thay bằng chữ a.
console.log(person.splice(2, 1, "a"));
