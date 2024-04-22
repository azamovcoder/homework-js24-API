import { usersImg } from "./data.js";

const API = "https://jsonplaceholder.typicode.com/users";
const usersCards = document.querySelector(".users__cards");
async function getAPI(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => mapData(res))
    .catch((err) => console.log(err));
}
getAPI(API);

function mapData(data) {
  let cards = "";
  data.forEach((e) => {
    cards += `
   <div class="users__card">
                    <img src="${usersImg[e.id - 1]}" alt="">
                <div class = "users__card-info">
                  <h3>Name:${e.name}</h3>
                  <h4>Username: ${e.username}</h4>
                  <div class = "user__socials">
                  <span> Socials: </span>
                    <a target="_blank" href="${e.email}">Email</a>
                    <a type="tel" href="tel:${e.phone}">Phone-number</a>
                    <a href="${e.website}">Website</a>
                  </div>
                  <p><span>Address:</span>${
                    e.address.suite +
                    " " +
                    e.address.street +
                    " " +
                    e.address.city
                  }</p>
                 
                  <p><span>Company</span>: ${e.company.name}</p>
                </div>
            </div>
  `;
  });
  usersCards.innerHTML = cards;
}
