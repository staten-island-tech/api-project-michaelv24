import "../styles/style.css";
import { DOMSelectors } from "../js/DOMSelectors.js";

const apiURL = "https://botw-compendium.herokuapp.com/api/v2/entry/";

async function Data(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new error(response);
    } else {
      const data = await response.json(); //makes the object into JSON object we can use
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<h2 class="foods"></h2>`
      );
      data.creatures.food.forEach((foodName) =>
        document
          .querySelector(".foods")
          .insertAdjacentHTML(
            "afterbegin",
            `<p>${foodName.name}</p>` <ul>
              `<p>${foodName.image}</p>``<p>${foodName.description}</p>`</ul>
          )
      );
      data.creatures.non_food.forEach((nonfoodName) =>
        document
          .querySelector(".non_food")
          .insertAdjacentHTML(
            "afterbegin",
            `<p>${nonfoodName.name}</p>`<ul>`<p>${nonfoodName.image}</p>``<p>${nonfoodName.description}</p>`</ul>
          )
      );
      data.creatures.equipment.forEach((equipmentName) =>
        document
          .querySelector(".equipmentNames")
          .insertAdjacentHTML(
            "afterbegin",
            `<p>${equipmentName.name}</p>`</ul>`<p>${equipmentName.image}</p>``<p>${equipmentName.description}</p>`</ul>
          )
      );
      data.creatures.materials.forEach((materialsName) =>
        document
          .querySelector(".material")
          .insertAdjacentHTML(
            "afterbegin",
            `<p>${materialsName.name}</p>`</ul>`<p>${materialsName.image}</p>``<p>${materialsName.description}</p>`</ul>
          )
      );
    }
  } catch (error) {
    console.log(error);
  }
}
Data(URL);
// console.log(await Data(apiURL));
DOMSelectors.form.addEventListener("submit", function () {
  addPoster(
    DOMSelectors.nameInput.value,
    DOMSelectors.ratingInput.value,
    DOMSelectors.imageInput.value
  );
  DOMSelectors.form.reset();
  for (let btn of DOMSelectors.remove) {
    btn.addEventListener("click", function () {
      this.parentElement.remove();
    });
  }
});

DOM.form.addEventListener("submit", function () {
  event.preventDefault();
  let name = DOM.name.value.toLowerCase();
  const URL = `https://botw-compendium.herokuapp.com/api/v2/entry/${name}`;
  Data(URL);
  clear();
});
