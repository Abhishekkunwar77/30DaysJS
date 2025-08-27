//first example
let detailsOfStudent = {
  name: "Abhishek Kunwar",
  age: 23,
  isStudent: true,
};
console.log(detailsOfStudent.name);

//updating , deleting and adding
(detailsOfStudent.address = "Coimbatore"), delete detailsOfStudent.name;
console.log(detailsOfStudent.name);
detailsOfStudent.age = 30;
console.log(detailsOfStudent.age);
console.log(detailsOfStudent.address);

let student = {
  name: "Abhishek Kunwar",
  marks: 95,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
  updateMarks: function (newMarks) {
    this.marks = newMarks;
  },
};
for (let key in student) {
  console.log(key, ":", student[key]);
}

student.greet();
student.updateMarks(100);
console.log(student.marks);

let addressBook = [];
function addContact(name, phone, email) {
  let contact = {
    name: name,
    phone: phone,
    email: email,
    display:function(){
        console.log(`${this.name} - ${this.phone} - ${this.email}`)
    }
  };
  addressBook.push(contact)
}
addContact("Abhishek Kunwar",98654345,'abhishek@gmail.com')
addressBook.forEach(contact=>contact.display())
