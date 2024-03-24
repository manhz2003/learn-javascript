var courses = [
    {
        id: 1,
        name: 'js',
        coin: 250
    },
    {
        id: 2,
        name: 'html, css',
        coin: 0
    },
    {
        id: 3,
        name: 'ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'php',
        coin: 0
    }
];


// forEach() : dùng để duyệt qua từng phần tử của mảng.

// callback của every nhận vào 3 tham số (element, index, array)
// element: Giá trị của phần tử hiện tại trong mảng.
// index: Chỉ mục của phần tử hiện tại trong mảng.
// array: trả về toàn bộ mảng.

courses.forEach((value, index, arr) => {
    console.log("value: ", value);
    console.log("index: ", index);
    console.log("arr: ", arr);
})

