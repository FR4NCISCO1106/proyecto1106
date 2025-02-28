const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-Sign-in");
const btnSignUp = document.getElementById("btn-Sign-up");

btnSignIn.addEventListener("click",()=>{
  container.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=>{
  container.classList.add("toggle");
});