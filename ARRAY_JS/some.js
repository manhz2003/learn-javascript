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
// some() : ngược lại với every, chỉ cần 1 phần tử thoả mãn điều kiện. trả về bolean.
// callback của every nhận vào 3 tham số (element, index, array)
// element: Giá trị của phần tử hiện tại trong mảng.
// index: Chỉ mục của phần tử hiện tại trong mảng.
// array: trả về toàn bộ mảng.

const kq = courses.some((value) => {
    return value.coin === 0
})

// output: true, vì chỉ cần 1 coin = 0 thì sẽ thỏa mãn điều kiện
console.log(kq);
