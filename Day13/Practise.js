//save data
localStorage.setItem('Name', 'Gopal');
// get data
let userName = localStorage.getItem('Name');
//remove data
localStorage.removeItem('Name');
//clear all data
localStorage.clear();
//store object
let user = { name: 'Abhishek Kunwar', age: 21 };
localStorage.setItem('name', JSON.stringify(user));
//retrieve object
let data = JSON.parse(localStorage.getItem('user'));
console.log(date.name);
