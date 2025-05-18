import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

const requiredUserName = "admin";
const requiredPassword = "admin";
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");
const logOutBtn = document.getElementById("logOutBtn");
const loginDiv = document.getElementById("loginDiv");
const tankForm = document.getElementById("tankFormOpener");
const listOfTanks = document.getElementById("listOfTanks");
const isLoggedIn = localStorage.getItem("loggedIn") === "true";
const backToMain = document.getElementById("backToMain");

loginBtn.addEventListener("click", async () => {
  if (usernameInput.value === requiredUserName
      && passwordInput.value === requiredPassword) {
    document.body.classList.add("logged-in");
    localStorage.setItem("loggedIn", "true");
  } else {
    alert("Hibás felhasználónév vagy jelszó!");
    usernameInput.value = "";
    passwordInput.value = "";
  }
});

logOutBtn.addEventListener("click", async () => {
  localStorage.setItem("loggedIn", "false");
  document.body.classList.remove("logged-in");
});

tankForm.addEventListener("click", async () => {
  loginDiv.style.display = "none";
  listOfTanks.style.display = "none";
});

backToMain.addEventListener("click", async () => {  
  
});

if (isLoggedIn) {
  document.body.classList.add("logged-in");
} else{
  tankForm.style.display = "none";
}

document.body.style.display = "block";