import { registerUser } from "./js/entry/register.js";

const logIn = document.getElementById("log-in");
const register = document.getElementById("register");

register.addEventListener("submit", (event) => {
  event.preventDefault();
  const [userName, email, password] = event.target.elements;
  registerUser(userName, email, password);
});

const container = document.querySelectorAll("main");
console.log(container);

const createModalMsg = () => {
  const element = document.createElement("div");
};