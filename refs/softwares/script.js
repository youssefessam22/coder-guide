let vscode = document.querySelector("#vscode");
let cmder = document.querySelector("#cmder");
let github = document.querySelector("#github");
let yehiaTech = document.querySelector("#yehia-tech");
let codepen = document.querySelector("#codepen");
let vscodeDownload = document.querySelector("#vscodeDownload");
let cmderDownlaod = document.querySelector("#cmderDownload");
let buttons = document.querySelectorAll(".elzero button");
let boxes = document.querySelectorAll('.elzero')

buttons.forEach(function (button, index) {
    button.textContent = `or download ${boxes[index].id} from here`;
});

vscodeDownload.addEventListener("click", function () {
  window.open(
    "https://vscode.download.prss.microsoft.com/dbazure/download/stable/863d2581ecda6849923a2118d93a088b0745d9d6/VSCodeUserSetup-x64-1.87.2.exe"
  );
});

cmderDownlaod.addEventListener("click", function () {
  window.open(
    "https://github.com/cmderdev/cmder/releases/download/v1.3.24/cmder.zip"
  );
});

vscode.addEventListener("click", function () {
  window.open("https://code.visualstudio.com/Download");
});

cmder.addEventListener("click", function () {
  window.open("https://cmder.app/");
});

github.addEventListener("click", function () {
  window.open("https://cmder.app/");
});

codepen.addEventListener("click", function () {
  window.open("https://codepen.io/");
});
