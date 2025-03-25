function Carousel () {

    const carousel = document.getElementById("carousel");
    const images = carousel.querySelectorAll("img");
    const navigators = document.createElement("div");
    const left_chevron_div = document.createElement("div");
    const right_chevron_div = document.createElement("div");

    //Setup
    images[0].classList.add('active');

    navigators.classList.add("navigators");

    carousel.append(left_chevron_div, right_chevron_div, navigators);

    left_chevron_div.classList.add("chevron", "left-chevron");
    right_chevron_div.classList.add("chevron", "right-chevron");

    const left_chevron = document.querySelector(".left-chevron");
    const right_chevron = document.querySelector(".right-chevron");

    for (let i=0; i < images.length; i++) {
        const navigator = document.createElement("div");
        navigator.classList.add("img-dot");
        navigators.appendChild(navigator);
    }

    const navigatorNodes = document.querySelectorAll(".img-dot");
    navigatorNodes[0].classList.add('active-navigator');
    const navigatorArray = Array.from(navigatorNodes);

    //Autoscroll

    setInterval(() => {
        nextImage();
    }, 5000);

    //Helpers

    function getCurrentIndex() {
        const imageArray = Array.from(images); 
        return imageArray.findIndex(image => image.classList.contains('active'));
    }

    function prevImage() {
        const index = getCurrentIndex();
        images[index].classList.remove('active');
        navigatorNodes[index].classList.remove('active-navigator');

        const prevIndex = index === 0 ? images.length - 1 : index - 1;
        images[prevIndex].classList.add('active');
        navigatorNodes[prevIndex].classList.add('active-navigator');
    }

    function nextImage() {
        const index = getCurrentIndex();
        images[index].classList.remove('active');
        navigatorNodes[index].classList.remove('active-navigator');

        const nextIndex = (index + 1) % images.length;
        images[nextIndex].classList.add('active');
        navigatorNodes[nextIndex].classList.add('active-navigator');
    }
    //Listeners

    left_chevron.addEventListener("click", () => {
        prevImage();
    });

    right_chevron.addEventListener("click", () => {
        nextImage();
    });

    navigatorArray.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const clickedDot = event.currentTarget;
            const index = getCurrentIndex();
            const nextIndex = navigatorArray.indexOf(clickedDot);

            images[index].classList.remove('active');
            navigatorNodes[index].classList.remove('active-navigator');
            
            images[nextIndex].classList.add('active');
            navigatorNodes[nextIndex].classList.add('active-navigator');
            
        });
    });

}

export { Carousel as default };
//# sourceMappingURL=index.js.map
