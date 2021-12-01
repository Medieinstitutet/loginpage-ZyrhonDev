// Create variables for login
localStorage.setItem("myUsername", "janne");
localStorage.setItem("myPassword", "test");
localStorage.setItem ("secondUsername", "oskar");
localStorage.setItem ("secondPassword", "123");
// For attempts at using arrays for login.
// let user = {
//     account: "janne",
//     password: "test"
// };
// let usersList = [user];
// localStorage.setItem("userList", JSON.stringify(usersList));

// Global content, create and append. 
let navBar = document.createElement ("nav");
const myDiv = document.getElementById ("root");
const mainDiv = document.createElement ("div");
let siteFooter = document.createElement ("footer");
let footerText = document.createElement ("p");
let navUl = document.createElement ("ul");
const myH = document.createElement ("h1");
myH.innerText = "Zyrhon (Aka Oskar Lundberg)'s Login website."
document.body.append (myDiv);
myDiv.insertAdjacentElement ("beforebegin", myH);
myDiv.insertAdjacentElement ("afterbegin", navBar);
myDiv.insertAdjacentElement ("beforeend", siteFooter);
siteFooter.append (footerText);
siteFooter.id = "siteFooter";
footerText.innerText = "Brought to you by Oskar Lundberg";
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
accountInput.placeholder = "Account name";
const passwordInput = document.createElement ("input");
passwordInput.placeholder = "Password";
passwordInput.type = "password";
const loginBtn = document.createElement ("button");
loginBtn.innerText = "Login";
mainDiv.append (loginForm);
loginForm.append (accountInput, passwordInput, loginBtn);

// Sign up form incase I figure out how to handle the logic for using an array to login
// const signupH = document.createElement ("h2");
// signupH.innerText = "Choose an accountname and password!";
// const signupForm = document.createElement ("form");
// const signupAcc = document.createElement ("input");
// signupAcc.placeholder = "Account name";
// const signupPsw = document.createElement ("input");
// signupPsw.placeholder = "Password";
// signupPsw.type = "password";
// const signupBtn = document.createElement ("button");
// signupBtn.innerText = "Signup";

// function to save signup accounts
// function addUser() {
//     let addUser = {
//         addAccount: signupAcc.value,
//         addPassword: signupPsw.value
//     };
//     let getMyUsers = JSON.parse(localStorage.getItem("userList"));
//     getMyUsers.push (addUser);

//     localStorage.setItem("userList", JSON.stringify(getMyUsers));
// }

// signupBtn.addEventListener ("click", function () {
//     addUser();
// })
const logOut = document.createElement ("li");

// Create functionality to login
loginBtn.addEventListener ("click", function() {
    let getUsername = localStorage.getItem("myUsername");
    let getPassword = localStorage.getItem("myPassword");
    let getLoggedIn = localStorage.getItem("authenticatedUser");
    let getsecondPass = localStorage.getItem("secondPassword");
    let getsecondAcc = localStorage.getItem("secondUsername");

    if (accountInput.value == getUsername && passwordInput.value == getPassword) {
        localStorage.setItem("authenticatedUser", true);
        console.log("Login successful");
        logOut.innerHTML = "<span class='navLinks'>Logout</span>";
        logOut.id = "logOut";
        navUl.append (logOut);
        mainDiv.innerHTML = "";
        // Saves who logged in, so we can greet them by name.
        localStorage.setItem("loggedInUser", getUsername);
        
        location.reload(); 
    } else if (accountInput.value == getsecondAcc && passwordInput.value == getsecondPass) {
        localStorage.setItem("authenticatedUser", true);
        console.log("Login successful");
        logOut.innerHTML = "<span class='navLinks'>Logout</span>";
        logOut.id = "logOut";
        navUl.append (logOut);
        mainDiv.innerHTML = "";
        // Saves who logged in, so we can greet them by name.
        localStorage.setItem("loggedInUser", getsecondAcc);
        location.reload(); 
    } else {
        welcomeMsg.innerHTML = "Wrong account and/or password."
        welcomeMsg.style = "color: red";
        accountInput.value = "";
        passwordInput.value = "";
    }
})
// loginBtn.addEventListener ("click", function() {
//     let getMyUsers = JSON.parse(localStorage.getItem("userList"));
//     let getAcc = getMyUsers.addAccount;
//     let getPw = getMyUsers.addPassword;
//     let getLoggedIn = localStorage.getItem("authenticatedUser");
//     for (i = 0; i < getMyUsers.length; i++) {
//         if (accountInput.value == getMyUsers[i].addAccount && passwordInput.value == getMyUsers[i].addPassword) {
//             console.log("success" + getMyUsers[i].addAccount);
//             localStorage.setItem("authenticatedUser", true);
//             console.log("Login successful");
//             logOut.innerHTML = "<span class='navLinks'>Logout</span>";
//             logOut.id = "logOut";
//             navUl.append (logOut);
//             mainDiv.innerHTML = "";
            
//             location.reload(); 
//         } else {
//             console.log(getMyUsers[i].addAccount);
//             welcomeMsg.innerHTML = "Wrong account and/or password."
//             welcomeMsg.style = "color: red";
//         }
//     }
// })
// Create view for users who are not logged in.
// Nav with login option
let myHome = document.createElement ("li");
let myLogin = document.createElement ("li");
// let mySignup = document.createElement ("li");
// mySignup.innerHTML = "<span class='navLinks'><a href='#'>Signup</a></span>";
myHome.innerHTML = "<span class='navLinks'><a href='#'>Home</a></span>";
navUl.append (myHome);

// Create view for logged in users.
// Nav with logout option
function loggedIn() {
    let getLoggedIn = localStorage.getItem("authenticatedUser");
    let getUser = localStorage.getItem("loggedInUser");
    if (getLoggedIn == "true") {
        mainDiv.innerHTML = "";
        logOut.innerHTML = "<span class='navLinks'>Logout</span>";
        logOut.id = "logOut";
        // mySignup.remove();
        navUl.innerHTML = "";
        navUl.append (logOut);
        mainDiv.append (welcomeMsg);
        welcomeMsg.innerHTML = "You've successfully logged in" + " " + getUser + ", welcome to this super exlusive website!!"
    }
}
// Click to signup
// mySignup.addEventListener ("click", function() {
//     mainDiv.innerHTML = "";
//     mainDiv.append (signupForm);
//     signupForm.append (signupH,signupAcc, signupPsw, signupBtn);
// })
// Click to logout
logOut.addEventListener ("click", function() {
    getLoggedIn = localStorage.getItem("authenticatedUser");
    localStorage.setItem("authenticatedUser", false);
    location.reload(); 
})
// Click on home to "go back" to startpage
myHome.addEventListener ("click", function () {
    mainDiv.innerHTML = "";
    mainDiv.append (welcomeMsg);
    mainDiv.append (loginForm);
    loginForm.append (accountInput, passwordInput, loginBtn);
})
loggedIn();

