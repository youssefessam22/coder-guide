

let youtubeChannels = document.querySelector("#youtube-channels");
let sites = document.querySelector("#sites")
let softwares = document.querySelector('#softwares')
youtubeChannels.addEventListener('click', function () {
    window.open("refs/youtube-channels/index.html","_self");

});

sites.addEventListener('click', function () {
    window.open("refs/sites/index.html",'_self');

});

softwares.addEventListener('click', function () {
    window.open("refs/softwares/index.html");

});

boxzero.addEventListener('click', function () {
    window.open("https://www.youtube.com/@ElzeroWebSchool");

});

