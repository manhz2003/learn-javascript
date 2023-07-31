// object contructor

function User(firstName, lastName, id) {
    this.firstName = firstName
    this.lastName = lastName
    this.id = id
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

// kế thừa lại các thuộc tính chung từ object contructor
let person = new User('manh', 'nguyen', 1);
let person2 = new User('tung', 'nguyen', 2);

// nếu thêm thuộc tính và phương thức mà không sử dụng prototype thì nó sẽ là của riêng đối tượng.
// thêm các thuộc tính riêng cho từng đối tượng.
person.title = 'học lập trình'
person.phoneNumber = '0987739823'

console.log(person)
console.log(person2)

// this.getName là phương thức được tạo trong object.
console.log(person.getName())
console.log(person2.getName())


// object prototype (thêm các thuộc tính và phương thức từ bên ngoài hàm contructor).
// khi sử dụng prototype các thuộc tính hoặc phương thức dùng chung cho tất cả đối tượng.

User.prototype.className = 'IT3'
User.prototype.getClassName = function() {
    return this.className
}

console.log(person.className)
console.log(person2.getClassName())