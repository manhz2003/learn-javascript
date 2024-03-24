// var arr = [1, "abc", 2, [1, 2, 3]];

// var ob = {
//     name: 'lan anh',
//     age: 20,
//     address: 'tuyen quang',
//     getName: function (){
//         return this.name
//     }
// };

// console.log(ob.getName());

// // tạo 1 object car có key là color, size, có 1 hàm diChuyen in ra chữ 100km

// var car = {
//     color: 'pink',
//     size: 100,
//     [diChuyen]: function (tocDo){
//        return tocDo
//     }

// }

// function Person (name, age){
//     this.name = name,
//     this.age = age
// }

// Person.prototype.address = 'tuyen quang';

// var p1 = new Person('lan anh', 20);
// var p2 = new Person('manh', 20);

// p1.title = 'lười'
// p2.game = 'lq'

// console.log(p1, p2);

// console.log(p1.title);

// tạo 1 function contructor dongVat có thuộc tính color, weight
// thêm 1 prototype là address
// tạo 2 đối tượng chó, mèo, sử thuộc tính prototype in ra giá trị của nó.
// tạo thuộc tính riêng của chó là sủa: gâu gâu
// tạo thuộc riêng của mèo là đi ỉa: giấu cứt

// function dongVat (color,weight){
//     this.color=color,
//     this.weight=weight
// }
// dongVat.prototype.address = 'đụ ít thôi';
// var d1 = new dongVat('pink', 20);
// var d2 = new dongVat('mạnh', 60);

// console.log(d1.address);
// console.log(d1,d2);

// d1.title='gâu gâu'
// d2.diia='mạnh giấu cứt'
// console.log(d1.title);
// console.log(d2.diia);

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// var i = 0;

// while (i != 5){
//     console.log(i);
//     i++
// }

// var i = 0;
// do {
//     console.log('1. ăn cơm');
//     console.log('2. hello');
// }while (i!=0)

// var arr = [1, 2, 3, 4];

// for (var i = 0; i < arr.length; i++){
//     console.log(i);
// }

// var ob = {
//     name: 'manh',
//     age: 20,
//     address: 'ha noi'
// }

// var arr = [2, 3, 5, 6]

// lấy ra index (i) hoặc value (arr[i]) của mảng
// for (let i in arr){
//     console.log(arr[i]);
// }

// lấy ra key (i) hoặc value (ob[i]) của object
// for (let i in ob){
//     console.log(ob[i]);
// }

// lấy value
// for (let i of arr){
//     console.log(i);
// }

// for (let i of Object.values(ob) ){
//     console.log(i);
// }

//  tạo 1 mảng có 4 tên, dùng vòng lặp chuyên để lấy ra tên.
// tạo 1 object car có color và size dùng vòng lặp lấy ra key.
// var arr =['manh','anh', 'duc', 'dung'];
// for(let i in arr){
//     console.log(arr[i]);
// }

// var car = {
//     color: 'vang',
//     size: '12'
// }
// for(let i in car){
//     console.log(i);
// }

// function f1() {
//   console.log("hello");
// }

// function f2(a, b) {
//   console.log(a + b);
// }

// function f3(lastName, firstName) {
//   var fullName = lastName + firstName;
//   return fullName;
// }

// f1();

// f2(1, 2);

// console.log(f3("họ tên: " + "nguyen", " manh"));

// function a(x, y) {
//   return x + y;
// }

// function b() {
//   let z = 5;
//   console.log(z + a(2, 3));
// }

// function vô danh
// var inTen = function () {
//   console.log("manh");
// };

// inTen();

// var sum = function () {
//   return 5;
// };

// console.log(sum());

// arrow function
// var test = () => console.log("hello");
// test();

// var test2 = (x, y) => {
//   console.log(x);
//   console.log(y);
// };

// test2(1, 2);

// tạo function in ra tên , function vô danh có dạng arrow function
// tạo 1 biến global x = 5; tạo hàm y, truyền x làm tham số của hàm y trả về x
// tạo hàm k truyền tham số h vào hàm k, in ra hàm y- h. viết 1 function có tên và 1 function k tên.

// var ten = () => console.log("chó mạnh ăn đầu buồi");
// ten();

// var x = 5;
// function y(x) {
//   return x;
// }

// function k(h) {
//   console.log(y(x) - h);
// }

// k(3);

// var kKoTen = (h) => {
//   console.log(y(x) - h);
// };

// kKoTen(3);

// function a(x) {
//   x();
// }

// a(function (y) {
//   y = 5;
//   console.log(y);
// });

// các phương thức của mảng
// foreach

// var arr = [1, "manh", 2, 4, "lan anh"];

// // foreach có 3 tham số, ts1 giá trị phần trong mảng, ts2 là index của mảng, ts3 là mảng đó
// arr.forEach(function (value, index, x) {
//   console.log(x);
// });

function test(a, b) {
  console.log(a + b);
}

test(1, 2);
