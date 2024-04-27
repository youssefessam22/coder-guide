let vscode = document.querySelector("#vscode");
let cmder = document.querySelector("#cmder");
let github = document.querySelector("#github");
let yehiaTech = document.querySelector("#yehia-tech");
let sublime = document.querySelector("#sublime");
let codepen = document.querySelector("#codepen");

let boxes = document.querySelectorAll(".elzero");

cmder.addEventListener("click", function () {
  window.open("https://cmder.app/");
});


sublime.addEventListener("click", function () {
  window.open("https://www.sublimetext.com/");
});

vscode.addEventListener("click", function () {
  window.open("https://code.visualstudio.com/");
});
