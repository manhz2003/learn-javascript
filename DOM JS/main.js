// DOM - document object modal. (gồm 3 thành phần chính)
// 1. element
// 2. attribute
// 3. text
// 3 thành phần được gọi là node.
// HTML DOM không phải của javascript mà là tiêu chuẩn của tổ chức w3c.

// DOM METHOD
// các phương thức trong dom (document object model)
// 1. document.getElementById (lấy ra element theo id)
// 2. document.getElementsByClassName (lấy ra element theo class)
// 3. document.getElementsByTagName (lấy ra element theo tên thẻ)
// 4. document.querySelector (lấy ra element bằng cả id hoặc class hoặc tagname hoặc viết giống css selector)
// 5. document.querySelectorAll (tương tự như querySelector nhưng lấy ra tất cả phần tử)

let idText = document.getElementById('heading');
console.log(idText);

let classText = document.getElementsByClassName('className');
console.log(classText);

let tagName = document.getElementsByTagName('span');
console.log(tagName);

let querySelector = document.querySelector('.nav .nav-item');
console.log(querySelector);

let querySelectorAll = document.querySelectorAll('.nav-content');
console.log(querySelectorAll);

// lấy ra phần tử thứ 3 trong danh sách phần tử, giống như mảng
console.log(querySelectorAll[2]);

// DOM ATTRIBUTE
// thêm vào hoặc gọi ra các thuộc tính attribute cho thẻ html
// set là thêm vào, get là lấy ra.

let headingElement = document.querySelector('h2'); // gọi đến element h2

headingElement.className = 'classHeading' // thêm 1 class cho thẻ h2
headingElement.id = 'idHeading' // thêm 1 attribute id cho thẻ h2
headingElement.setAttribute('data-1', 'du lieu') // cách thêm attribute khác
headingElement.setAttribute('title', 'test-title') // thêm 1 tiêu đề
console.log(headingElement.getAttribute('title')) // lấy ra thuộc tính title, 
console.log(headingElement.getAttribute('data-1')) // lấy ra thuộc tính data-1

// DOM TEXT NODE
//  có 2 cách để lấy ra text của element là sử dụng innerText và textContent
let headingText = document.querySelector('.heading-text')

// lấy ra text: toàn bộ text kể cả những text của thẻ bị display: none; hoặc hidden....
console.log(headingText.textContent)

// lấy ra text: nhưng không lấy được nội dung text của những thẻ bị xét thuộc tính ẩn.
console.log(headingText.innerHTML)

// thay đổi text của element
headingText.innerHTML = 'đoạn văn bản mới'

// DOM THÊM 1 ELEMENT VÀO TRONG ELEMENT
// innerHTML, outerHTML : thêm vào các thẻ html, attribute, text.

// innerHTMl lấy ra toàn bộ thẻ bên trong của thẻ hiện tại, và thêm vào thẻ html, attribute, text vào bên trong thẻ hiện tại.
var boxElement = document.querySelector('.box')
boxElement.innerHTML = '<h1 title="heading">heading</h1>' // thêm 1 element h1 vào trong element box
console.log(boxElement.innerHTML)
var box2 = document.querySelector('.box2')

// outerHTML lấy ra thẻ hiện tại hoặc thay thế thẻ hiện tại bằng 1 thẻ khác, attribute, text.
box2.outerHTML = '<span>TEST</span>' // ghi đè element hiện tại

// DOM STYLE
// cách 1
var boxStyle = document.querySelector('.box-style')
boxStyle.style.width = '100px'
boxStyle.style.height = '100px'
boxStyle.style.backgroundColor = 'red'

// cách 2
// phương thức assign dùng để gán các thuộc tính css with, height... vào đối tượng boxStyle.style.
Object.assign(boxStyle.style, {
    with: '200px',
    height: '300px',
    backgroundColor: 'green',
})

// DOM classList (dùng để quản lý các class element)
// add      : (thêm class vào element)
// contains : (kiểm tra xem class có nằm trong element không)
// remove   : (xóa 1 class khỏi element)
// toggle   : (có class thì sẽ xóa đi, không có thì thêm vào)

let classList = document.querySelector('.class-list')
console.log(classList.classList)
console.log(classList.classList.length) // kiểm tra độ dài của class
console.log(classList.classList[1]) // lấy ra vị trí chỉ mục của class
classList.classList.add('red') // thêm 1 class có tên red
classList.classList.add('red', 'blue', 'test') // cách thêm nhiều class
console.log(classList.classList.contains('red')) // kiểm tra xem class red có tồn tại không
classList.classList.remove('red') // xóa bớt class

setInterval(() => {
    classList.classList.toggle('red')
}, 1000) // sử dụng hàm setInterval để làm hành động nhấp nháy màu, toggle có thì xóa đi, không có thì thêm vào

// DOM EVENT
// Sử dụng DOM events khi bạn chỉ cần xử lý một hành động cụ thể cho một sự kiện trên một phần tử.
// DOM events thích hợp khi bạn không cần quản lý nhiều hàm xử lý cho cùng một sự kiện trên phần tử đó.

// 1. attribute events (thêm 1 sự kiện vào element bên html)
// 2. Assign event (get ra element bên js sau đó gán và sử dụng), cách này thường được sử dụng hơn

// ví dụ thực hiện click vào phần tử của các class có tên là event.
let events = document.querySelectorAll('.event')

for (let i = 0; i < events.length; i++) {
    events[i].onclick = function (element) {
        // target để trả về event của chính nó.
        console.log(element.target)
    }
}

// EVENT LISTERNER
// Sử dụng event listeners khi bạn cần xử lý nhiều hành động khác nhau cho cùng một sự kiện trên một phần tử.
// Event listeners hữu ích khi bạn muốn thêm, xóa hoặc thay đổi hàm xử lý sự kiện dễ dàng.
// Event listeners cũng phù hợp khi bạn đang làm việc với các kịch bản phức tạp có nhiều xử lý sự kiện.

// nên xử dụng khi có nhiều hành động diễn ra.
var button = document.querySelector('#eventListerner');

button.addEventListener("click", function () {
    alert("Nút đã được nhấp chuột");
    console.log("Thêm hành động khác");
});


// PHƯƠNG THỨC PreventDefault and StopPropagation.
// stopPropagation: ngăn chặn sự kiện nổi bọt.
// preventDefault : để ngăn chặn hành vi mặc định.

// sự kiện nổi bọt là khi ấn vào element con nó xuất hiện event của của element con và cả
// các thẻ cha phía ngoài chứa nó, nên ta sử dụng stopPropagation để ngăn chặn nổi bọt

// stopPropagation
// ví dụ bên dưới, khi bấm vào clickHere nằm bên trong skNoibot sẽ xuất 
// hiện cả event của của clickHere và skNoibot, ngăn chặn điều này bằng
// cách sử dụng stopPropagatiom

let skNoibot = document.querySelector('.sk-noibot')
skNoibot.onclick = function () {
    console.log('sự kiện nổi bọt')
}

let clickHere = document.querySelector('.click')
clickHere.onclick = function (e) {
    e.stopPropagation() // stopPropagation để ngăn chặn nổi bọt
    console.log('click here !')
}

// stopPropagation
// ví dụ thẻ a có hành vi mặc định là chuyển liên kết trang, sử dụng stopPropagation
// có thể làm 1 kiểm tra nhỏ, nếu link là đúng thì cho chuyển trang còn sai thì không cho chuyển.

var link = document.querySelector("#myLink");

link.addEventListener("click", function (event) {
    var href = this.getAttribute("href");
    if (href === "https://www.google.com") {
        // Cho phép chuyển hướng đến đúng link
        console.log("Chuyển hướng đến địa chỉ URL: " + href);
    } else {
        // Ngăn chặn chuyển hướng nếu sai link
        event.preventDefault();
        console.log("Liên kết không hợp lệ, chuyển hướng bị ngăn chặn.");
    }
});