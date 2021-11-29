// Create variables for login
let userName = "janne";
let userPassword = "test";
let loggedIn = false;

// Global content, create and append. 
let navBar = document.createElement ("nav");
let siteFooter = document.createElement ("footer");
let navUl = document.createElement ("ul");
document.body.insertAdjacentElement ("afterbegin", navBar);
document.body.insertAdjacentElement ("beforeend", siteFooter);
navBar.append (navUl);

// Create view for users who are not logged in.
// Nav with login option
let myHome = document.createElement ("li");
let myLogin = document.createElement ("li");
myHome.innerHTML = "<span class='navLinks'>Home</span>";
myLogin.innerHTML = "<span class='navLinks'>Login</span>";
navUl.append (myHome);
navUl.append (myLogin);

// Create view for logged in users.
// Nav with logout option




// if statement for if user is logged in to show diff views

