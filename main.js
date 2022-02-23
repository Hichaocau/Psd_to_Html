const slider = document.querySelectorAll('.slider__list')
const dots = document.querySelectorAll('.slider__icon--direction')
const btnNext = document.querySelector('.next')
const btnPrev = document.querySelector('.prev')

let i = 0; //current slide
let j = 3; //total slide

function next(){
    document.querySelector('.content' + (i+1)).classList.remove("active"); 
    i = ( j + i + 1) % j; //lấy số dư
    document.querySelector('.content' + (i+1)).classList.add("active"); 
    dotsActive(i + 1)
}
setInterval(next, 5000)


function prev(){
    document.querySelector('.content' + (i+1)).classList.remove("active"); 
    i = ( j + i - 1) % j; //lấy số dư
    document.querySelector('.content' + (i+1)).classList.add("active"); 
    dotsActive(i + 1)
}


// change bgc dots
function dotsActive(num){
    dots.forEach(function(dot){
        dot.style.background = 'transparent'
    });
    document.querySelector('.slider__icon .slider__icon--direction:nth-child('+ num +')').style.background = '#00bcd4'
}

btnNext.addEventListener('click', function(){
    clearInterval(next)
    next();
})
btnPrev.addEventListener('click', prev)

// dot click
function dot(index){
    slider.forEach(function(slider){
        slider.classList.remove('active')
    })
    document.querySelector('.content' + index).classList.add("active"); 
    i = index -1 
    dotsActive(index)
}

const dotFooter = document.querySelectorAll('.footer__color-btn--item')
const footerColors = document.querySelectorAll('.footer__color-list')

dotFooter.forEach(function(dot, index){
    dot.addEventListener('click', function(){
        document.querySelector('.footer__color-btn--item.color').classList.remove('color')
        dot.classList.add('color')

        document.querySelector('.footer__color-list.hide').classList.remove('hide')
        footerColors[index].classList.add('hide')
    })
})
