$(document).foundation();

//bullet holes random position
const bulletHoles = document.querySelectorAll(".bullet-hole");
console.log(bulletHoles);

function bulletHolesPosition() {
    // let randomNum = Math.random();
    // console.log(randomNum.toFixed(1)*100);
    for (let i = 0; i < bulletHoles.length; i++) {
        let topPos = (Math.random()).toFixed(1)*90;
        let leftPos = (Math.random()).toFixed(1)*90;
        bulletHoles[i].style.top = `${topPos}%`;
        bulletHoles[i].style.left = `${leftPos}%`;
    }
}
bulletHolesPosition();