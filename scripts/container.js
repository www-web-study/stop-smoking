let noSmokeCount = Number(localStorage.getItem("timesNoSmoke")); // Number('5') преобразование строки в число.
let smokeCount = Number(localStorage.getItem("timesSmoke"));
function updateNoSmokeCount(isInitUpdate) {
  if (isInitUpdate === false) {
    noSmokeCount++;
    localStorage.setItem("timesNoSmoke", noSmokeCount)
  }
  document.querySelector(".inc").innerHTML = noSmokeCount;
}
function updateSmokeCount(isInitUpdate) {
  if (isInitUpdate === false) {
    smokeCount++;
    localStorage.setItem("timesSmoke", smokeCount)
  }
  document.querySelector(".dec").innerHTML = smokeCount;
}

let imgCheerful;
imgCheerful = ("images/cheerful.jpg");
let imgSad;
imgSad = ("images/sad.jpg");
function updatePicture() {
  if (noSmokeCount >= smokeCount) {
    document.querySelector(".picture").src = imgCheerful;
  }
  else {
    document.querySelector(".picture").src = imgSad;
  }
}

let noSmokeButton = document.querySelector(".up");
noSmokeButton.addEventListener("click", noSmokeCountInsert);
let smokeCountButton = document.querySelector(".down");
smokeCountButton.addEventListener("click", smokeCountInsert);
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

let btn_menu = document.querySelector(".btn_menu");
btn_menu.addEventListener("click", showMenu);
let menu = document.querySelector(".list");
function showMenu() {
  menu.classList.toggle("hidden")
}

let clear = document.querySelector(".button_clear");
clear.addEventListener("click", clearValue);
function clearValue() {
  if (smokeCount >= 0) {
    noSmokeCount = 0;
    smokeCount = 0;
    localStorage.setItem("timesNoSmoke", noSmokeCount);
    localStorage.setItem("timesSmoke", smokeCount);
  }
  document.querySelector(".inc").innerHTML = noSmokeCount;
  document.querySelector(".dec").innerHTML = smokeCount;
  updatePicture();
  showMenu();
}
