var courses = [
  {
    id: 1,
    name: "js",
    coin: 250,
  },
  {
    id: 2,
    name: "html, css",
    coin: 0,
  },
  {
    id: 3,
    name: "ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "php",
    coin: 0,
  },
];

// reduce() : dùng để thực hiện các phép tính, tích luỹ, tổng hợp, hoặc biến đổi mảng thành một giá trị duy nhất.
// hàm reduce sẽ truyền vào 2 tham số là 1 callback function, và 1 Giá trị khởi tạo cho accumulator của callback.

// hàm callback này gồm 4 tham số.
// tham số 1 accumulator (tích luỹ)          : có giá trị khởi tạo là: giá trị đầu tiên của mảng .
// tham số 2 currentValue (giá trị hiện tại) : là giá trị đầu tiên của mảng (bắt buộc).
// tham số 3 currentIndex (chỉ số hiện tại)  : là chỉ mục hiện tại (tham số không bắt buộc)
// tham số 4 array (mảng đang được xử lý)    : là mảng gốc (tham số không bắt buộc)

var total = courses.reduce(function (accumulator, currentValue, i, arr) {
  return accumulator + currentValue.coin;
}, 0);

console.log(total);
