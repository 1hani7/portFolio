function bgChange(){
    const experienceWrap = document.querySelector('.experienceWrap');
    const contactWrap = document.querySelector('.contactWrap');
    const particleBg = document.querySelector('.particleBg');
    if(experienceWrap.offsetTop-300 <= window.scrollY &&
         contactWrap.offsetTop-500 > window.scrollY){
        particleBg.style.opacity = '0';
    }
    else{
        particleBg.style.transition = '2s';
        particleBg.style.opacity = '1';
    }
}

function expContentShow(){
    const scrollCase = document.querySelector(".scrollCase");
    const experienceWrap = document.querySelector(".experienceWrap");
    const project = document.querySelector(".project");

    const start = experienceWrap.offsetTop;
    const scroll = scrollY - start;

    if(experienceWrap.offsetTop + 0 <= window.scrollY && 
        window.scrollY <= project.offsetTop - project.offsetHeight){
        scrollCase.style.opacity = '1';
        scrollCase.style.transform = 'translateY(-50%)';
        scrollCase.scrollLeft = scroll;
    }else if(experienceWrap.offsetTop >= window.scrollY){
        scrollCase.style.opacity = '0';
        scrollCase.style.transform = 'translateY(0%)';
    }
}

let illCount = 0;
function illustFlow(){
    const illustSlider = document.querySelector('.illustSlider');

    illCount += 1;
    if( illCount >= 949 ) illCount = 0;

    illustSlider.style.transform = `translateX(${-illCount}px)`

    setTimeout(function(){
        illustFlow();
    },10);
}