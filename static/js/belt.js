
const flowText1 = "SSS's PortFolio WORK CREATE PASSION&nbsp;SSS's PortFolio WORK CREATE PASSION&nbsp;"
function beltToRight(){
    const beltOne = document.querySelector('.beltOne');
    for(var i =0; i<=1; i++){
        beltOne.innerHTML += flowText1;
    }
}

const flowText2 = "SSS's PortFolio WORK CREATE PASSION&nbsp;"
function beltToLeft(){
    const beltTwo = document.querySelector('.beltTwo');
    for(var i =0; i<=2; i++){
        beltTwo.innerHTML += flowText2;
    }
}


let beltOneCount = 0;
function beltOneMove(){
    setTimeout(function(){
        const beltOne = document.querySelector('.beltOne');
        beltOneCount -= 1;
        beltOne.style.transform = `translateX(${beltOneCount}px)`;
        if( beltOneCount <= -beltOne.scrollWidth/2 ) beltOneCount = 0;
        beltOneMove();
    },10)

}

let beltTwoCount = -909;
function beltTwoMove(){
    const beltTwo = document.querySelector('.beltTwo');
    setTimeout(function(){
        beltTwoCount += 1;
        beltTwo.style.transform = `translateX(${beltTwoCount}px)`;
        if( beltTwoCount >= 0 ) beltTwoCount = -909;
        beltTwoMove();
    },10)
}