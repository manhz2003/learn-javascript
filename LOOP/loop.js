// VÒNG LẶP JS
// vòng lặp for in     : lấy ra key của object và index của array.
// vòng lặp for of     : lấy ra value của object và value của array.
// vòng lặp while
// vòng lặp do while
// vòng lặp while

// for in /of dùng để duyệt array hoặc object.

let arr = [
    'manh',
    'dung',
    'nam',
    'tuan'
]

// for in, lấy ra chỉ mục của các phần tử trong array.
for (let ketQua in arr) {
    console.log(ketQua)

    // lấy ra giá trị bằng cách:
    console.log([ketQua]);
}

// for of, lấy ra giá trị phần tử của array.
for (let ketQua of arr) {
    console.log(ketQua)

    
}

let person = {
    name: 'Mạnh',
    age: '19',
    adress: 'Hà Nội',
}

// for in, lấy ra các key hoặc value của object.
// lấy ra key
for(let ketQua in person){
    console.log(ketQua);

    // lấy ra giá trị bằng cách:
    console.log([ketQua]);
}

// lấy ra value
for(let ketQua in person){
    console.log(person[ketQua]);
}

// for of không thực hiện trực tiếp được với object.

// hoặc sử dụng cách sau:
for(let ketQua of Object.values(person)){
    console.log(ketQua);
}

// vòng lặp while
// lặp lại theo điều kiện, nếu thỏa mãn điều kiện thì dừng lại
let x = 0
while(x<=10){
    x++
    console.log('hello');
}

// vòng lặp do while
// vòng lặp sẽ được thực hiện ít nhất 1 lần trong do
// sau đó xét đến điều kiện lặp trong while, thỏa mãn điều kiện thì dừng lại (số lần chạy)

var z = 0
do{
   z++
   console.log('chạy ít nhất 1 lần, dù điều kiện đúng hay sai');
   console.log(z);
}while(z < 5)

