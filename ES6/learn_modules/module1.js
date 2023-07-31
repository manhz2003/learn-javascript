// trong 1 file js chỉ export được 1 giá trị là default.
// nhưng có thể export nhiều giá trị bằng cách để vào dấu {}
// có thể export được, biến, hàm, class, array, object..

function myFunction(mesagess){
    console.log(mesagess);
}

// chỉ đc 1 giá trị đặt là default.
export default myFunction

var age = 20;
var name = 'manh';
var address = 'Hà Nội';

// có thể export được nhiều giá trị khác.
export {age, name, address}

class Car {
    constructor(color, size){
        this.color = color;
        this.size = size;
    }

}

export {Car}

// 1 module có thể vừa export vừa import.
import {x} from './module2.js'
var y = x;

export {y}
