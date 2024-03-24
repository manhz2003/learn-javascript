var courses = [
  {
    id: 1,
    name: "js",
    coin: 0,
  },
  {
    id: 2,
    name: "html, css",
    coin: 250,
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

// fillter(): tìm kiếm và trả về mảng mới chứa tất cả các phần tử cần tìm.

// callback của every nhận vào 3 tham số (element, index, array)
// element: Giá trị của phần tử hiện tại trong mảng.
// index: Chỉ mục của phần tử hiện tại trong mảng.
// array: trả về toàn bộ mảng.

// tìm kiếm và trả về mảng chứ các phần tử có coin khác 250
const kq = courses.filter((value) => {
    return value.coin != 250;
});

console.log(kq);
