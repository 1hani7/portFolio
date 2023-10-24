
const flowText1 = "SSS's PortFolio WORK CREATE PASSION&nbsp;"
function beltToRight(){
    const beltOne = document.querySelector('.beltOne');
    for(var i =0; i<=2; i++){
        beltOne.innerHTML += flowText1;
    }
}

const flowText2 = "SSS's PortFolio WORK CREATE PASSION&nbsp;"
function beltToLeft(){
    const beltTwo = document.querySelector('.beltTwo');
    for(var i =0; i<=2; i++){
        beltTwo.innerHTML += flowText2;
    }
    console.log(beltTwo.scrollWidth/3*2);
}


let beltOneCount = 0;
function beltOneMove(){
    setTimeout(function(){
        const beltOne = document.querySelector('.beltOne');
        beltOneCount += 1;
        beltOne.style.transform = `translateX(${beltOneCount}px)`;
        if( beltOneCount >= 1818 ) beltOneCount = 0;
        beltOneMove();
    },10)
}

let beltTwoCount = 0;