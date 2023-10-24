
let rotateState = 0;
const rotateAmount = 90;
function projectRotationClock(event){
    const spinBox = document.querySelector('.spinBox');
    const t = event.target;
    rotateState += rotateAmount;
    setTimeout(function(){
        spinBox.style.transform = `rotate(${rotateState}deg)`;
    }, 200)
}
function projectRotationUnClock(event){
    const spinBox = document.querySelector('.spinBox');
    const t = event.target;
    rotateState -= rotateAmount;
    setTimeout(function(){
        spinBox.style.transform = `rotate(${rotateState}deg)`;
    }, 200)
}