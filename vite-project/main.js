import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";
const URL = "https://botw-compendium.herokuapp.com/api/v2${endpoint}?foo=foo";
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the object into JSON object we can use
    document.getElementById("api-response").textContent = data.textContent;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  input: document.getElementById("input"),
};
console.log(DOMSelectors.button);
