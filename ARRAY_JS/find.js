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
    },
    {
        id: 4,
        name: 'php',
        coin: 0
    }
];

// find(): tìm kiếm và trả về phần tử đầu tiên tìm thấy trong mảng.

// callback của every nhận vào 3 tham số (element, index, array)
// element: Giá trị của phần tử hiện tại trong mảng.
// index: Chỉ mục của phần tử hiện tại trong mảng.
// array: trả về toàn bộ mảng.

const kq = courses.find((value) => {
    return value.coin === 0;
})

// output: {id: 2, name: 'html, css', coin: 0} đây là phần tử đầu tiên tìm thấy thỏa mãn điều kiện
console.log(kq);