// Create variables for login
let userName = "janne";
localStorage.setItem("myUsername", userName);
let userPassword = "test";
localStorage.setItem("myPassword", userPassword);

// Global content, create and append. 
let navBar = document.createElement ("nav");
const myDiv = document.getElementById ("root");
const mainDiv = document.createElement ("div");
let siteFooter = document.createElement ("footer");
let navUl = document.createElement ("ul");
const myH = document.createElement ("h1");
myH.innerText = "Zyrhon (Aka Oskar Lundberg)'s Login website."
document.body.append (myDiv);
myDiv.insertAdjacentElement ("beforebegin", myH);
myDiv.insertAdjacentElement ("afterbegin", navBar);
myDiv.insertAdjacentElement ("beforeend", siteFooter);
myDiv.append (mainDiv);
mainDiv.id = "mainDiv";
navBar.append (navUl);

// Welcome msg
let welcomeMsg = document.createElement ("p");
welcomeMsg.innerText = "Welcome to the site, please login to access all the juicy content brought to us here by Zyrhon."
welcomeMsg.id = "whaleCum";
mainDiv.append (welcomeMsg);
// Login form
const loginForm = document.createElement ("form");
const accountInput = document.createElement ("input");
accountInput.placeholder = "Account name"
const passwordInput = document.createElement ("input");
passwordInput.placeholder = "Password";
passwordInput.type = "password";
const loginBtn = document.createElement ("button");
loginBtn.innerText = "Login";
mainDiv.append (loginForm);
loginForm.append (accountInput, passwordInput, loginBtn);

const logOut = document.createElement ("li");
// Create functionality to login
loginBtn.addEventListener ("click", function() {
    let getUsername = localStorage.getItem("myUsername");
    let getPassword = localStorage.getItem("myPassword");
    let getLoggedIn = localStorage.getItem("authenticatedUser");

    if (accountInput.value == getUsername && passwordInput.value == getPassword) {
        localStorage.setItem("authenticatedUser", true);
        console.log("Login successful");
        logOut.innerHTML = "<span class='navLinks'>Logout</span>";
        logOut.id = "logOut";
        navUl.append (logOut);
        mainDiv.innerHTML = "";
        
        location.reload(); 
    } else {
        welcomeMsg.innerHTML = "Wrong account and/or password."
        welcomeMsg.style = "color: red";
    }
})
// Create view for users who are not logged in.
// Nav with login option
let myHome = document.createElement ("li");
let myLogin = document.createElement ("li");
myHome.innerHTML = "<span class='navLinks'><a href='#'>Home</a></span>";
navUl.append (myHome);

// Create view for logged in users.
// Nav with logout option
function loggedIn() {
    let getLoggedIn = localStorage.getItem("authenticatedUser");
    console.log(getLoggedIn);
    if (getLoggedIn == "true") {
        mainDiv.innerHTML = "";
        logOut.innerHTML = "<span class='navLinks'>Logout</span>";
        logOut.id = "logOut";
        navUl.append (logOut);
        mainDiv.append (welcomeMsg);
        welcomeMsg.innerHTML = "You've successfully logged in, welcome to this super exlusive website!!"
    }
}

// Click to logout
logOut.addEventListener ("click", function() {
    getLoggedIn = localStorage.getItem("authenticatedUser");
    localStorage.setItem("authenticatedUser", false);
    location.reload(); 
})
loggedIn();

