// const cien = document.querySelector('#cien')
// const counter = document.querySelector('.counter')

// window.addEventListener('load', () => {
//     let counter = 0
//     setInterval(() => {
//         if(counter <= 100) {
//             cien.innerHTML = `${counter++}+`
//         }
//     }, 10)
// })

// window.addEventListener('load', () => {

// })

// window.onload = function() {
//     let viewportHeight = window.scrollY;

//     console.log(viewportHeight)
// }
// const cien = document.querySelector('#cien')
// const setencaycinco = document.querySelector('#setentaycinco')
// const treinta = document.querySelector('#treinta')
// const setenta = document.querySelector('#setenta')
// const noventayocho = document.querySelector('#noventayocho')
// $(window).scroll(function() {
//     var hT = $('.counter').offset().top,
//         hH = $('.counter').outerHeight(),
//         wH = $(window).height(),
//         wS = $(this).scrollTop();
//     if (wS > (hT+hH-wH)){
//         let counter = 0
//     setInterval(() => {
//         if(counter <= 100) {
//             cien.innerHTML = `${counter++}+`
//         }
//     }, 10)
//     }
//  });
const closeMobile = document.getElementById('close-menu-mobile')
const openMobile = document.getElementById('open-menu-mobile')
const menuMobile = document.getElementById('menu-mobile')

openMobile.addEventListener('click', () => {
  menuMobile.style.display = 'block'
})
closeMobile.addEventListener('click', () => {
  menuMobile.style.display = 'none'
})

var docWidth = document.documentElement.offsetWidth

;[].forEach.call(document.querySelectorAll('*'), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(el)
  }
})
