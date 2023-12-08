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
        index = max - 1;
    }
})

//slider trượt khi click
const listClick = document.querySelectorAll('.slider-content-left-bottom li')


listClick.forEach(function (image, index) {
    image.addEventListener('click', function () {
        document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
        removeActive()
        image.classList.add('active')
    })
})
function removeActive() {
    let imagActive = document.querySelector('.active')
    imagActive.classList.remove('active')
}
//slide tự trượt
function imgAuto() {
    index = index + 1;
    
    if (index > max - 1) {
        index = 0;
    }
    removeActive()
    document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
    // console.log(index)
    listClick[index].classList.add('active')
}

setInterval(imgAuto, 3000);
