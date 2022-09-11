const slider = document.getElementById("slider");
let txt = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");
const val = document.querySelectorAll("[data-val]");
const equal = document.getElementById("equal");
const del = document.getElementById("del");
const reset = document.getElementById("reset");
let root = document.documentElement;
// event to chage theme
slider.addEventListener("change", changeTheme);
// event to show value on screen
val.forEach((button) => {
  button.addEventListener("click", showOnScreen);
});
// function to change theme
function changeTheme() {
  let val = this.value;
  switch (val) {
    case "1":
      root.style.setProperty("--body-bg", "hsl(222, 26%, 31%)");
      root.style.setProperty("--keypad-bg", "hsl(223, 31%, 20%)");
      root.style.setProperty("--screen-bg", "hsl(224, 36%, 15%)");
      root.style.setProperty("--top-txt", "rgb(255, 255, 255)");
      root.style.setProperty("--keyboard-bg", "hsl(6, 63%, 50%)");
      root.style.setProperty("--key-txt", "rgb(68, 75, 90)");
      root.style.setProperty("--key-bg", "hsl(30, 25%, 89%)");
      root.style.setProperty("--key-shadow", "hsl(28, 16%, 65%)");
      root.style.setProperty("--key1-bg", "hsl(225, 21%, 49%)");
      root.style.setProperty("--key1-shadow", "hsl(224, 28%, 35%)");
      root.style.setProperty("--key2-bg", "hsl(6, 63%, 50%)");
      root.style.setProperty("--key2-shadow", "hsl(6, 70%, 34%)");
      root.style.setProperty("--btn-txt", "hsl(224, 36%, 15%)");

      break;
    case "2":
      root.style.setProperty("--body-bg", "hsl(0, 0%, 90%)");
      root.style.setProperty("--keypad-bg", "hsl(0, 5%, 81%)");
      root.style.setProperty("--screen-bg", "hsl(0, 0%, 93%)");
      root.style.setProperty("--top-txt", " hsl(0, 0, 100%)");
      root.style.setProperty("--keyboard-bg", "hsl(25, 98%, 40%)");
      root.style.setProperty("--key-txt", "hsl(60, 10%, 19%)");
      root.style.setProperty("--key-bg", "hsl(45, 7%, 89%)");
      root.style.setProperty("--key-shadow", "hsl(35, 11%, 61%)");
      root.style.setProperty("--key1-bg", "hsl(185, 42%, 37%)");
      root.style.setProperty("--key1-shadow", "hsl(185, 58%, 25%)");
      root.style.setProperty("--key2-bg", "hsl(25, 98%, 40%)");
      root.style.setProperty("--key2-shadow", "hsl(25, 99%, 27%)");
      root.style.setProperty("--btn-txt", "hsl(224, 36%, 15%)");

      break;
    case "3":
      root.style.setProperty("--body-bg", "hsl(268, 75%, 9%)");
      root.style.setProperty("--keypad-bg", "hsl(268, 71%, 12%)");
      root.style.setProperty("--screen-bg", "hsl(268, 71%, 12%)");
      root.style.setProperty("--top-txt", "hsl(52, 100%, 62%)");
      root.style.setProperty("--keyboard-bg", "hsl(176, 100%, 44%)");
      root.style.setProperty("--key-txt", "hsl(52, 100%, 62%)");
      root.style.setProperty("--key-bg", "hsl(268, 47%, 21%)");
      root.style.setProperty("--key-shadow", "hsl(290, 70%, 36%)");
      root.style.setProperty("--key1-bg", "hsl(285, 91%, 52%)");
      root.style.setProperty("--key1-shadow", "hsl(290, 70%, 36%)");
      root.style.setProperty("--key2-bg", "hsl(176, 100%, 44%)");
      root.style.setProperty("--key2-shadow", "hsl(177, 92%, 70%)");
      root.style.setProperty("--btn-txt", "hsl(52, 100%, 62%)");
      break;
  }
}
// function to show values on screen
function showOnScreen() {
  txt.innerHTML += this.dataset.val;
}

// function to equate expression
const equateExpression = () => (txt.innerHTML = eval(txt.innerHTML));
// event to click equal button
equal.addEventListener("click", equateExpression);
// function to delete
del.addEventListener("click", () => {
  txt.innerHTML = txt.innerHTML.slice(0, -1);
});
// function to reset screen
reset.addEventListener("click", () => {
  txt.innerHTML = "";
});
