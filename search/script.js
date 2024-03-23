let search = document.querySelector(".search-input");
let submit = document.querySelector("#search-button");
let container = document.getElementById("container");
let buttonContainer = document.querySelector(".button");
let forEmpty = document.querySelector(".forempty")

search.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (search.value === "") {
      event.preventDefault();
      handleEmptySearch()
       

    } else {
      window.open(
        `https://www.google.com/search?q=${search.value}+intitle:programming`
      );
    }
  }
});
submit.addEventListener("click", function () {
  if (search.value === "") {
    if (!emptyMsApp) {
    handleEmptySearch();
    }
  } else {
    performSearch();
  }
});

let emptyMsApp = false;
function handleEmptySearch() {
  let empty = submit.classList.add("empty"); 
  submit.innerText = "enter a search term"
  search.value = "";
  setTimeout(reset,2000)


}


function performSearch() {
  window.open(
    `https://www.google.com/search?q=${search.value}+intitle:programming`
  );
  search.value = "";
  errorMessage.innerText = "";
  emptyMsApp = true;
}


function reset() {
  submit.innerText = "search!"


}