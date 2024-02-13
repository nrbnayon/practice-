console.log("Hello DOM");
console.log(document.body);

// HTMLCollection
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

//Query Selector Nodelists

const queryForId = document.querySelectorAll("#places-title");

const queryForClass = document.querySelectorAll(".place-container li");
for (const li of queryForClass) {
  console.log(li.innerText);
}

const queryForOneClass = document.querySelector(".place-container li");
console.log(queryForOneClass);

// styles, class, id
const footer = document.getElementById("footers");
footer.style.backgroundColor = "yellow";
const classAttribute = footer.getAttribute("class");
const idAttribute = footer.getAttribute("id");
const classList = footer.classList; //DOMTokenList. i can add or remove footer.classList.add("name of class"), footer.classList.remove("name of class")
console.log(classList);

// setAttribute

const fruitsArr = document.getElementsByClassName("place-container")[0];
console.log(fruitsArr);
const fruitsArrInnerHTML =
  document.getElementsByClassName("place-container")[0].innerHTML;
console.log(fruitsArrInnerHTML);

const fruitsArrInnerTEXT =
  document.getElementsByClassName("place-container")[0].innerText;
console.log(fruitsArrInnerTEXT);

// Section style using js

const sections = document.querySelectorAll("section");
console.log(sections);
// NodeList paile for each and for of loop kora jabe, gEclassName korle for each korte partam na
// sections.style.backgroundColor = "red";

for (const section of sections) {
  console.log(section);
  section.style.border = "2px solid steelblue ";
  section.style.marginBottom = " 10px";
  section.style.borderRadius = " 10px";
  section.style.padding = "10px";
}

const footerContainer = document.getElementById("footers");
footerContainer.classList.add("text-center");
// footerContainer.classList.remove("text-center");

//createElement and appendChild
const newElement = document.querySelector("#places-lists");
const addLi = document.createElement("li");
addLi.innerText = "New List us js";
newElement.appendChild(addLi);
// newElement.parentNode.parentNode.childNodes;
console.log(newElement);

// new section add

// 1. where to add
const mainNewSection = document.getElementById("main-content");

// 2. what to be added
const newSection = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "new Section h1 add";

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "list 1";
ul.appendChild(li1);
// 3. append

newSection.appendChild(h1);
newSection.appendChild(ul);
mainNewSection.appendChild(newSection);

// set innerHTML directly

const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1>My new Dress</h1>
<ul>
<li>Lunghi</li>
<li>Pant</li>
<li>T-shirt</li>
</ul>
`;
mainNewSection.appendChild(sectionDress);
