// Open-close menu
const burger = document.querySelector("#burger")
const menu = document.querySelector("#menu")
// const columnWrapper = document.querySelector("#columnWrapper")
const link = document.querySelectorAll('#menu a')
burger.addEventListener("click", () => {
    menu.classList.toggle("activeMenu")
    columnWrapper.classList.toggle("columnWrapper")
    burger.classList.toggle("activeBurger")
})
// columnWrapper.addEventListener("click", () => {
//     menu.classList.toggle("activeMenu")
//     columnWrapper.classList.toggle("columnWrapper")
//     burger.classList.toggle("activeBurger")
// })
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", () => {
        menu.classList.toggle("activeMenu")
        columnWrapper.classList.toggle("columnWrapper")
        burger.classList.toggle("activeBurger")
    })
}

// Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 56,
    centeredSlides: true,
    breakpoints: {
        1281: {
            spaceBetween: 56,
            slidesPerView: 2.36,
        },
        768: {
            spaceBetween: 28,
            slidesPerView: 2.13,
        },
    },
    // loop: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
});