const rightBtn = document.querySelector('.bx-chevron-right')
const leftBtn = document.querySelector('.bx-chevron-left')
var index = 0;
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
max = imgNumber.length;

//silder
rightBtn.addEventListener('click', function () {
    document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
    index = index + 1
    if (index > max - 1) {
        index = 0;
    }
})

leftBtn.addEventListener('click', function () {
    document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
    index = index - 1
    if (index < 0) {
        index = max-1;
    }
})

//slider trượt khi click

