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

// định nghĩa
// map() : tạo một mảng mới bằng cách thực hiện một phép biến đổi trên từng phần tử của mảng ban đầu.

// trả về một mảng mới với các phần tử đã được biến đổi.
// callback của every nhận vào 3 tham số (element, index, array)
// element: Giá trị của phần tử hiện tại trong mảng.
// index: Chỉ mục của phần tử hiện tại trong mảng.
// array: trả về toàn bộ mảng.

const kq = courses.map((value) => {
    return {
        id: value.id,
        name: value.name + " pro",
        coin: value.coin + 100
    }
})

console.log(kq);