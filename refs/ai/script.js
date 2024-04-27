let chatGpt = document.querySelector("#chatgpt");
let gemini = document.querySelector("#gemini");
let perplexity = document.querySelector("#perplexity");
let blackbox = document.querySelector("#blackbox");

chatGpt.addEventListener("click", function () {
  window.open("https://chat.openai.com/");
});

gemini.addEventListener("click", function () {
  window.open("https://gemini.google.com/");
});

perplexity.addEventListener("click", function () {
  window.open("https://www.perplexity.ai/");
});

blackbox.addEventListener("click", function () {
  window.open("https://www.blackbox.ai/");
});
