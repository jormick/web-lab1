const scrollers = document.querySelectorAll(".scroller");
const inputFields = document.querySelectorAll(".input-field");
const loginBtn = document.querySelector(".login-btn");

addAnimation();

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

function loginSuccess() {
    if (inputFields[0].value !== "" && inputFields[1].value !== "") {
        alert(`Welcome, @${inputFields[0].value}!`);
        window.location.href = "./home.html";
    }
}
