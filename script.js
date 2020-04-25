
var h = document.getElementsByClassName("accordion__title");
var content = document.getElementsByClassName("accordion__content");

for (let i = 0; i < h.length; i++) {
    h[i].addEventListener("click", accordion, false);
}

function accordion() {
    removeShow();
    this.parentNode.nextElementSibling.classList.add("show");
}

function removeShow() {
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove("show");
    }
}