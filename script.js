const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

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

const randomTitles = [
    "Strawberry fields are too dangerous!",
    "iOS 18 is here! What's new?",
    "AI is going to take over the world!",
    "Why Fortnite is so popular?",
    "The best way to make money online",
    "Did Ryan Gosling die in the end of Drive?",
    "Chrome, Edge, Arc or Firefox: what is the best browser on Windows?",
    "Who is Alexander L. and why he hates fishes?",
];
