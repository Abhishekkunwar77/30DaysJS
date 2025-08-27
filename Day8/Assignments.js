// Student Object (Basic)
// Create a student object with properties: name, age, marks.
// Add a method getDetails() that returns:
// "Name: John, Age: 20, Marks: 85".

let Student = {
  name: "Abhishek Kunwar",
  age: 23,
  marks: 96,
  getDetails: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Marks: ${this.marks}`);
  },
};
Student.getDetails();

// Bank Account (Intermediate)
// Build an object bankAccount with:
// accountHolder, balance
// Method deposit(amount) (increase balance)
// Method withdraw(amount) (check balance before deducting)
// Method getBalance()
let accountDetail = [];
function addBankAccount(accountHolder, balance) {
  let account = {
    accountHolder: accountHolder,
    balance: balance,
    displayAccountDetail: function () {
      console.log(
        `Account Holder: ${this.accountHolder}, Balance: ${this.balance}`
      );
    },
    desposit: function (amount) {
      if (isNaN(amount) || amount <= 0) {
        console.log("Please enter a valid amount!");
      } else {
        this.balance += amount;
      }
    },
    withdraw: function (amount) {
      if (isNaN(amount) || amount <= 0) {
        console.log("Please enter a valid amount!");
      } else if (this.balance < amount) {
        console.log("Insufficient balance!");
      } else {
        this.balance -= amount;
        console.log(`Withdrew: ${amount}, Current Balance:${this.balance}`);
      }
    },
    getBalance: function () {
      console.log(`Current Balance: ${this.balance}`);
    },
  };
  accountDetail.push(account);
  return account;
}
let account1 = addBankAccount("Abhishek Kunwar", 1000000000000);
account1.displayAccountDetail();
account1.desposit(100000000);
account1.withdraw(456892);
account1.getBalance();

//mini address book log system

let addressBook = {
  contacts: [],
  addContact: function (name, phone, email) {
    let contact = {
      name: name,
      phone: phone,
      email: email,
    };
    this.contacts.push(contact);
    console.log(`Contact added: ${name}`);
  },
  deleteContact: function (name) {
    let index = this.contacts.findIndex((c) => c.name === name);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      console.log(`Contact Deleted with name: ${name}`);
    } else {
      console.log("Contact Not Found!");
    }
  },
  findContact: function (name) {
    let contact = this.contacts.find((c) => c.name === name);
    if (contact) {
      console.log(
        `Found!, Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
      );
    } else {
      console.log("Contact not found");
    }
  },
  displayAll: function () {
    console.log("-----All Contact List-----");
    this.contacts.forEach((c) => {
      console.log(`${c.name} | ${c.phone} | ${c.email}`);
    });
  },
};
addressBook.addContact("Gopal", "9876543210", "gopal@mail.com");
addressBook.addContact("Rahul", "9123456789", "rahul@mail.com");
addressBook.addContact("Aditi", "9871112233", "aditi@mail.com");
addressBook.addContact("Karan", "9812345678", "karan.k@mail.com");
addressBook.addContact("Meera", "9988776655", "meera.r@mail.com");
addressBook.addContact("Siddh", "9123459876", "sid.das@mail.com");
addressBook.addContact("Nehaa", "9090909090", "neha123@mail.com");
addressBook.addContact("Arjun", "9000012345", "arjun.verma@mail.com");
addressBook.addContact("Priya", "9876501234", "priya.m@mail.com");
addressBook.addContact("Vikra", "9321654789", "vikram.p@mail.com");

addressBook.findContact("Gopal");
addressBook.deleteContact("Rahul");
addressBook.displayAll();

//shopping log
let shopping = {
  cartItems: [],
  addItem: function (name, price, quantity) {
    let cart = {
      name: name,
      price: price,
      quantity: quantity,
    };
    this.cartItems.push(cart);
    console.log(`Cart item added : ${name} (x${quantity})`);
  },
  removeItem: function (name) {
    let index = this.cartItems.findIndex((c) => c.name === name);
    if (index !== -1) {
      console.log(`Cart Item delete with name: ${name}`);
    } else {
      console.log("Cart item:found!");
    }
  },
  getTotalPrice: function () {
    let total = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    console.log(`Total Price: ${total}`);
  },
  displayCart: function () {
    console.log("-----Your Cart-----");
    this.cartItems.forEach((item) => {
      console.log(`${item.name} | ${item.price} x ${item.quantity}`);
    });
  },
};
shopping.addItem("Apples", 50, 2);
shopping.addItem("Milk", 30, 1);
shopping.addItem("Bread", 40, 3);
shopping.getTotalPrice();
shopping.displayCart();
