import "../styles/style.css";
import { DOMSelectors } from "../js/DOMSelectors.js";

async function Data(URL, name) {
  try {
    const response = await fetch(URL);
    if (response.status === 404) {
      DOMSelectors.error.insertAdjacentHTML(
        "afterbegin",
        `<p>${name} does not exist in the compendium</p>`
      );
    } else {
      DOMSelectors.error.innerHTML = "";
    }
    if (response.status < 200 || response.status > 299) {
      throw new error(response);
    } else {
      const dataArr = await response.json(); //makes the object into JSON object we can use
      let name = dataArr.data.name;
      let category = dataArr.data.category;
      let description = dataArr.data.description;
      let image = dataArr.data.image;
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<div class="card"><ul><li class="list-name">${name}</li> <li class="list-category">${category}</li> <li class="list-description">${description}</li> <li><img src="${image}" alt="Picture of ${name}" class="image"></img></li> <li><button class="remove">remove</button></li></ul></div>`
      );
    }
  } catch (error) {
    console.log(error);
  }
}

DOMSelectors.form.addEventListener("submit", async function () {
  event.preventDefault();
  let name = DOMSelectors.input.value.toLowerCase();
  name = name.trim();
  const URL = `https://botw-compendium.herokuapp.com/api/v2/entry/${name}`;
  await Data(URL, name);
  DOMSelectors.form.reset();
  for (let btn of DOMSelectors.remove) {
    btn.addEventListener("click", function () {
      this.parentElement.parentElement.remove();
    });
  }
});

async function reset() {
  DOMSelectors.display.innerHTML = "";
}
