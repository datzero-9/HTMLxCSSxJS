var imgFeature = document.querySelector('.img_feature')
var listImg = document.querySelectorAll('.list_image img')
var preBtn = document.querySelector('.pre')
var nextBtn = document.querySelector('.next')

var currentIndex = 0
function updateIamgeByIndex(index) {
    //remove active 

    document.querySelectorAll('.list_image div').forEach(item=>{
        item.classList.remove('active')
    })
    currentIndex = index;
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}

listImg.forEach((imgElement, index)=>{

    imgElement.addEventListener('click', e => {
        updateIamgeByIndex(index)

    })
})