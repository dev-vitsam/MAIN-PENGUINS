const carInfoBtns = document.querySelectorAll('.car-info-btn');
const carInfoTexts = document.querySelectorAll('.car-info-text');


carInfoBtns[0].addEventListener('click', ()=> {
    showCarInfo(0);
});
carInfoBtns[1].addEventListener('click', ()=> {
    showCarInfo(1);
});
carInfoBtns[2].addEventListener('click', ()=> {
    showCarInfo(2);
});

function showCarInfo(i) {
    carInfoTexts[i].classList.toggle('h-auto');
    carInfoTexts[i].classList.toggle('opacity-100');
    console.log('toggle');
}