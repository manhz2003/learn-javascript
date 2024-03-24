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

// every: kiểm tra "tất cả" element trong array nếu thỏa mãn điều kiện thì trả về true, ngược lại là false.
// callback của every nhận vào 3 tham số (element, index, array)
// element: Giá trị của phần tử hiện tại trong mảng.
// index: Chỉ mục của phần tử hiện tại trong mảng.
// array: trả về toàn bộ mảng.

const kq = courses.every((value) => {
  return value.coin === "0";
});

// output là false vì tất cả coin của các object trong mảng trên k bằng 0
console.log(kq);
