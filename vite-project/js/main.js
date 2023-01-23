import "../styles./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "../counter.js";
const URL = "https://botw-compendium.herokuapp.com/api/v2";
async function Data(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the object into JSON object we can use
    document.getElementById("api-response").textContent = data.description;
    return data;
  } catch (error) {
    console.log(error);
  }
}
api = fetch();
async function fetchData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    getData(URL);
    const DOMSelectors = {
      button: document.getElementById("btn"),
      text: document.getElementById("#text"),
      input: document.getElementById("input"),
    };
    console.log(DOMSelectors.button);
  }
}
const quote = await fetchData(apiEntry);
apiResponseDOM.innerHTML = `Quote: ${quote.content}`;
fetchData();
