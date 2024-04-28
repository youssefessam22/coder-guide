let vscode = document.querySelector("#vscode");
let cmder = document.querySelector("#cmder");
let sublime = document.querySelector("#sublime");
let discord = document.querySelector("#discord");

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

discord.addEventListener('click',function () {
  window.open("https://discord.com")
})