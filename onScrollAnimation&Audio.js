// OnScroll Animations //
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var background_filter = document.querySelector(".top-presentation");
    var background_image = document.querySelector(".world-section");
    var wrapper = document.querySelector(".wrapper");

    var windowHeight = window.innerHeight;
    var elementVisibleFromBottom = 150;
    var elementVisibleFromTop = 650;
    var elementTopForBg_filter = background_filter.getBoundingClientRect().top;
    var elementTopForBg_image = background_image.getBoundingClientRect().top;


    if (elementTopForBg_filter < windowHeight - elementVisibleFromBottom) {
        wrapper.classList.add("content-displayed");
    }
    else {
        wrapper.classList.remove("content-displayed");
    }

    if (elementTopForBg_image < windowHeight - elementVisibleFromBottom) {
        wrapper.classList.add("world-content");
    }
    else {
        wrapper.classList.remove("world-content");
    }

    
    for(var i = 0; i < reveals.length; i++) {
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom;
        if (elementTop < windowHeight - elementVisibleFromBottom && elementBottom > windowHeight - elementVisibleFromTop) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);



// Audio //
var isPlaying = false;
var currentMusic;

function stop() {
    var sample = document.getElementById("sample");
        if (!isPlaying) {
            sample.pause();
            isPlaying = false;
        }
}

function areaSample(areaMusic) {
    var sample = document.getElementById("sample");
    sample.volume = 0.25;
    
    if (areaMusic != currentMusic) {
        sample.setAttribute('src', areaMusic);
        sample.play();
        currentMusic = areaMusic;
        return;
    }

    if (!isPlaying) {
        sample.play();
    }
    else {
        sample.pause();
    }
    isPlaying = !isPlaying;
}
