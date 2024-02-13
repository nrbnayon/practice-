console.log("Hello DOM");
console.log(document.body);

const collectionLI = document.getElementsByTagName("li");
// console.log(collectionLI);
for (const li of collectionLI) {
  console.log(li.innerText);
}

const allHeading = document.getElementsByTagName("h1");

for (const header of allHeading) {
  console.log(header.innerText); // not 100% array it is array like object
}

const favFruits = document.getElementById("fruits");
console.log(favFruits);

const myPlaces = (document.getElementById("places-title").innerText =
  "My Tour Places list");
console.log(myPlaces);

const imptPlaces = document.getElementsByClassName("important-places");
console.log(imptPlaces);
for (const myPlace of imptPlaces) {
  console.log(myPlace.innerText);
}

//Query Selector

const queryForId = document.querySelectorAll("#places-title");

const queryForClass = document.querySelectorAll(".place-container li");
for (const li of queryForClass) {
  console.log(li.innerText);
}

const queryForOneClass = document.querySelector(".place-container li");
console.log(queryForOneClass);
