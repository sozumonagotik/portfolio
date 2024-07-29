const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);
    let clickCounter = 0;
    const imageCount = movieList[i].querySelectorAll("img").length;
    const translateStep = 300 * widthRatio;

    arrow.addEventListener("click", function() {
        if (imageCount - (4 + clickCounter * widthRatio) >= 0) {
            clickCounter++;
            const currentTransform = movieList[i].computedStyleMap().get("transform")[0];
            movieList[i].style.transform = `translateX(${currentTransform.x.value - translateStep}px)`;
        } else {
            movieList[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
    console.log(window.innerWidth);
});



// dark mode 

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title")

ball.addEventListener("click", function(){
    items.forEach((item) => item.classList.toggle("active"))
    
})

