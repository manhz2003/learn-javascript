// file index.js là 1 file trung gian để export module của file test.js ra bên ngoài.
// file app.js sẽ import thông qua file index.js này mà không trực tiếp import từ file test.js

// cách viết thông thường.
// import myFunction from './test.js';
// export default myFunction 

// cách viết tắt.
export {default} from './test.js';


