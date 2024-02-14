console.log("Connected");
// option 1
//  <button onclick="document.getElementById('event').style.backgroundColor='yellow'"class="btn btn-active btn-ghost">BG Yellow</button>
// <button onclick="console.log(100)" id="btn" class="btn btn-primary">Click Me</button>
function bgRed() {
  document.body.style.backgroundColor = "red";
}
// option 2 impt
// <button onclick="makeRed()" id="btn" class="btn btn-primary">Click Me</button>
const sectionBGBlue = document.getElementById("bg-blue");
sectionBGBlue.onclick = function bgBlue() {
  document.getElementById("event").style.backgroundColor = "blue";
};
// option 3
// adEventListener
const bodyBGPink = document.getElementById("bg-pink");
bodyBGPink.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}
// option 4
const bodyBGGreen = document.getElementById("bg-green");
bodyBGGreen.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

//Final  option  that we use

document.getElementById("bg-goldenrod").addEventListener("click", function () {
  document.body.style.backgroundColor = "goldenrod";
});
