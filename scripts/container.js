var noSmokeCount = 0;
var smokeCount = 0;

var imgCheerful;
imgCheerful = ("images/cheerful-child.jpg");
var imgSad;
imgSad = ("images/sad-child.jpg");

function updateNoSmokeCount(isInitUpdate) {
  if (isInitUpdate === false) {
    noSmokeCount++;
  }
  document.querySelector(".inc").innerHTML = noSmokeCount;
}

function updateSmokeCount(isInitUpdate) {
  if (isInitUpdate === false) {
    smokeCount++;
  }
  document.querySelector(".dec").innerHTML = smokeCount;
}

function updatePicture() {
  if (noSmokeCount >= smokeCount) {
    document.querySelector(".picture").src = imgCheerful;
  }
  else {
    document.querySelector(".picture").src = imgSad;
  }
}

function noSmokeCountInsert() {
  updateNoSmokeCount(false);
  updatePicture();
}
function smokeCountInsert() {
  updateSmokeCount(false);
  updatePicture();
}

updateNoSmokeCount(true)
updateSmokeCount(true)
updatePicture()

var noSmokeButton = document.querySelector(".up");
noSmokeButton.addEventListener("click", noSmokeCountInsert);

var smokeCountButton = document.querySelector(".down");
smokeCountButton.addEventListener("click", smokeCountInsert);



// function noSmokeCountInsert() {
//   noSmokeCount++;
//   document.getElementById("inc").innerHTML = noSmokeCount;
//   if (noSmokeCount >= smokeCount) {
//     document.getElementsByClassName("picture")[0].src = imgCheerful;
//   }
//   else {
//     document.getElementsByClassName("picture")[0].src = imgSad;
//   }
// }

// function smokeCountInsert() {
//   smokeCount++;
//   document.getElementById("dec").innerHTML = smokeCount;
//   if (noSmokeCount >= smokeCount) {
//     document.getElementsByClassName("picture")[0].src = imgCheerful;
//   }
//   else {
//     document.getElementsByClassName("picture")[0].src = imgSad;
//   }
// }

// document.getElementById("inc").innerHTML = noSmokeCount;
// document.getElementById("dec").innerHTML = smokeCount;
// if (noSmokeCount >= smokeCount) {
//   document.getElementsByClassName("picture")[0].src = imgCheerful;
// }
// else {
//   document.getElementsByClassName("picture")[0].src = imgSad;
// }
