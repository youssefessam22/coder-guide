

let youtubeChannels = document.querySelector("#youtube-channels");
let sites = document.querySelector("#sites")
let softwares = document.querySelector('#softwares')
let ai = document.querySelector('#ai')

youtubeChannels.addEventListener('click', function () {
    window.open("refs/youtube-channels/index.html","_self");

});

sites.addEventListener('click', function () {
    window.open("refs/sites/index.html",'_self');

});

softwares.addEventListener('click', function () {
    window.open("refs/softwares/index.html", '_self');

});

ai.addEventListener('click',function () {
    window.open('refs/ai/index.html','_self')
})