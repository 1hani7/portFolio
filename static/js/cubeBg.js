let cubeRotatePoint = 0;
let lastScroll = 0;

function scrollCube() {
    const experienceWrap = document.querySelector('.experienceWrap');
    const contactWrap = document.querySelector('.contactWrap');

    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;


    const cubeOne = document.querySelector('.cubeOne');
    const cubeTwo = document.querySelector('.cubeTwo');
    const cubeThree = document.querySelector('.cubeThree');
    const cubeFour = document.querySelector('.cubeFour');
    const cubeFive = document.querySelector('.cubeFive');

    if (cubeRotatePoint == 360) cubeRotatePoint = 0;


    if (experienceWrap.offsetTop - 300 <= window.scrollY &&
        contactWrap.offsetTop - 500 > window.scrollY) {
        if (currentScrollTop > lastScroll) {
            cubeRotatePoint += 0.5;
            cubeOne.style.transform = `rotateZ(${cubeRotatePoint}deg) rotateY(${cubeRotatePoint*2}deg)`;
            cubeTwo.style.transform = `rotateZ(${cubeRotatePoint*2}deg) rotateX(${cubeRotatePoint}deg)`;
            cubeThree.style.transform = `rotateZ(${cubeRotatePoint}deg) rotateY(${cubeRotatePoint}deg)`;
            cubeFour.style.transform = `rotateZ(${cubeRotatePoint*3}deg) rotateX(${cubeRotatePoint}deg)`;
            cubeFive.style.transform = `rotateZ(${cubeRotatePoint*1}deg) rotateY(${cubeRotatePoint*3}deg)`;
        } else {
            cubeRotatePoint -= 0.5;
            cubeOne.style.transform = `rotateZ(${cubeRotatePoint*3}deg) rotateX(${cubeRotatePoint}deg)`;
            cubeTwo.style.transform = `rotateZ(${cubeRotatePoint}deg) rotateY(${cubeRotatePoint*3}deg)`;
            cubeThree.style.transform = `rotateZ(${cubeRotatePoint*2}deg) rotateX(${cubeRotatePoint*2}deg)`;
            cubeFour.style.transform = `rotateZ(${cubeRotatePoint}deg) rotateY(${cubeRotatePoint}deg)`;
            cubeFive.style.transform = `rotateZ(${cubeRotatePoint}deg) rotateX(${cubeRotatePoint}deg)`;
        }
    }

    lastScroll = currentScrollTop;
}