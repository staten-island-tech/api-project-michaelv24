import "../styles/style.css";
import { DOMSelectors } from "../js/DOMSelectors.js";

async function Data(URL) {
  try {
    const response = await fetch(URL);
    if (response.status < 200 || response.status > 299) {
      throw new error(response);
    } else {
      const data = await response.json(); //makes the object into JSON object we can use
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<ul class="foods"></ul>
        <ul class="non_food"></ul>
        <ul class="equipmentNames"></ul>
        <ul class="material"></ul>
        <ul class="monsters"></ul>
        <ul class="treasure"></ul>`
      );
      data.data.creatures.food.forEach((foodName) =>
        document
          .querySelector(".foods")
          .insertAdjacentHTML(
            "afterbegin",
            `<li class="list-item">${foodName.name}</li> <li class="list-item">${foodName.description}</li> <img src="${foodName.image}" alt="Picture of ${foodName.name}" class="image"></img>`
          )
      );
      data.data.creatures.non_food.forEach((nonfoodName) =>
        document
          .querySelector(".non_food")
          .insertAdjacentHTML(
            "afterbegin",
            `<li class="list-item">${nonfoodName.name}</li> <li class="list-item">${nonfoodName.description}</li> <img src="${nonfoodName.image}" alt="Picture of ${nonfoodName.name}" class="image"></img>`
          )
      );
      data.data.equipment.forEach((equipmentName) =>
        document
          .querySelector(".equipmentNames")
          .insertAdjacentHTML(
            "afterbegin",
            `<li class="list-item">${equipmentName.name}</li> <li class="list-item">${equipmentName.description}</li> <img src="${equipmentName.image}" alt="Picture of ${equipmentName.name}" class="image"></img>`
          )
      );
      data.data.materials.forEach((materialsName) =>
        document
          .querySelector(".material")
          .insertAdjacentHTML(
            "afterbegin",
            `<li class="list-item">${materialsName.name}</li> <li class="list-item">${materialsName.description}</li> <img src="${materialsName.image}" alt="Picture of ${materialsName.name}" class="image"></img>`
          )
      );
      data.data.monsters.forEach((monstersName) =>
        document
          .querySelector(".monster")
          .insertAdjacentHTML(
            "afterbegin",
            `<li class="list-item">${monstersName.name}</li> <li class="list-item">${monstersName.description}</li> <img src="${monstersName.image}" alt="Picture of ${monstersName.name}" class="image"></img>`
          )
      );
      data.data.treasure.forEach((treasureName) =>
        document
          .querySelector(".treasure")
          .insertAdjacentHTML(
            "afterbegin",
            `<li class="list-item">${treasureName.name}</li> <li class="list-item">${treasureName.description}</li> <img src="${treasureName.image}" alt="Picture of ${treasureName.name}" class="image"></img>`
          )
      );
    }
  } catch (error) {
    console.log(error);
  }
}

// async function Data(URL) {
//   try {
//     const response = await fetch(URL);
//     if (response.status < 200 || response.status > 299) {
//       throw new error(response);
//     } else {
//       const data = await response.json(); //makes the object into JSON object we can use
//       DOMSelectors.display.insertAdjacentHTML(
//         "afterbegin",
//         `<ul class="foods"></ul>
//         <ul class="non_food"></ul>
//         <ul class="equipmentNames"></ul>
//         <ul class="material"></ul>
//         <ul class="monsters"></ul>
//         <ul class="treasure"></ul>`
//       );
//       data.data.creatures.food.forEach((foodName) =>
//         document
//           .querySelector(".foods")
//           .insertAdjacentHTML(
//             "afterbegin",
//             `<p class="list-item">${foodName.name}</p> <p class="list-item">${foodName.description}</p> <img src="${foodName.image}" alt="Picture of ${foodName.name}" class="image"></img>`
//           )
//       );
//       data.data.creatures.non_food.forEach((nonfoodName) =>
//         document
//           .querySelector(".non_food")
//           .insertAdjacentHTML(
//             "afterbegin",
//             `<p class="list-item">${nonfoodName.name}</p> <p class="list-item">${nonfoodName.description}</p> <img src="${nonfoodName.image}" alt="Picture of ${nonfoodName.name}" class="image"></img>`
//           )
//       );
//       data.data.equipment.forEach((equipmentName) =>
//         document
//           .querySelector(".equipmentNames")
//           .insertAdjacentHTML(
//             "afterbegin",
//             `<p class="list-item">${equipmentName.name}</p> <p class="list-item">${equipmentName.description}</p> <img src="${equipmentName.image}" alt="Picture of ${equipmentName.name}" class="image"></img>`
//           )
//       );
//       data.data.materials.forEach((materialsName) =>
//         document
//           .querySelector(".material")
//           .insertAdjacentHTML(
//             "afterbegin",
//             `<p class="list-item">${materialsName.name}</p> <p class="list-item">${materialsName.description}</p> <img src="${materialsName.image}" alt="Picture of ${materialsName.name}" class="image"></img>`
//           )
//       );
//       data.data.monsters.forEach((monstersName) =>
//         document
//           .querySelector(".monster")
//           .insertAdjacentHTML(
//             "afterbegin",
//             `<p class="list-item">${monstersName.name}</p> <p class="list-item">${monstersName.description}</p> <img src="${monstersName.image}" alt="Picture of ${monstersName.name}" class="image"></img>`
//           )
//       );
//       data.data.treasure.forEach((treasureName) =>
//         document
//           .querySelector(".treasure")
//           .insertAdjacentHTML(
//             "afterbegin",
//             `<p class="list-item">${treasureName.name}</p> <p class="list-item">${treasureName.description}</p> <img src="${treasureName.image}" alt="Picture of ${treasureName.name}" class="image"></img>`
//           )
//       );
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// console.log(await Data(apiURL));

DOMSelectors.form.addEventListener("submit", function () {
  event.preventDefault();
  let name = DOMSelectors.input.value.toLowerCase();
  const URL = `https://botw-compendium.herokuapp.com/api/v2/entry/${name}`;
  Data(URL);
  reset();
});

function reset() {
  DOMSelectors.input.value = "";
  DOMSelectors.display.innerHTML = "";
}
