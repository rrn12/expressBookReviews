const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req,res) => {
  //Write your code here
  const username = req.body.username;
  const password = req.body.password;
  if (username && password) {
    if (!isValid(username)) {
      users.push({"username":username,"password":password});
      return res.status(200).json({message: "User successfully registred. Now you can login"});
    } else {
      return res.status(404).json({message: "User already exists!"});
    }
  }
  return res.status(404).json({message: "Unable to register user."});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
    //Write your code here
    res.send(JSON.stringify(books,null,4));
    let myPromise1 = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve(books)
        },6000)})
    myPromise1.then((books) => {
        console.log(books)
      })
  });
  
  // Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
    //Write your code here
      const isbn = req.params.isbn;
      res.send(books[isbn]);
      data = books[isbn];
      let myPromise2 = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve(data)
        },6000)})
    myPromise2.then((data) => {
        console.log(data)
      })
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
    const author = req.params.author
    for(var i = 1; i<20 ; i++){
        if(books[i].author===author){
            res.send(books[i]);
            data = books[i];
            let myPromise3 = new Promise((resolve,reject) => {
              setTimeout(() => {
                resolve(data)
              },6000)})
            myPromise3.then((data) => {
                console.log(data)
      })
        }
    }
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
    const title = req.params.title
    for(var i = 1; i<20 ; i++){
        if(books[i].title===title){
            res.send(books[i]);
            data = books[i];
            let myPromise4 = new Promise((resolve,reject) => {
              setTimeout(() => {
                resolve(data)
              },6000)})
            myPromise4.then((data) => {
                console.log(data)
      })
        }
    }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  res.send(books[isbn].reviews);
});

module.exports.general = public_users;



/*let myPromise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})
console.log("Before calling promise");
myPromise2.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })
console.log("After calling promise");

let myPromise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})
console.log("Before calling promise");
myPromise3.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })
console.log("After calling promise");

let myPromise4 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})
console.log("Before calling promise");
myPromise4.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })
console.log("After calling promise");*/