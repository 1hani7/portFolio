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

let lastScrollTop = 0;
function expContentShow(){
    const scrollCase = document.querySelector(".scrollCase");
    const experienceWrap = document.querySelector(".experienceWrap");
    const project = document.querySelector(".project");
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(experienceWrap.offsetTop + 0 <= window.scrollY && 
        window.scrollY <= project.offsetTop - 1000){
        scrollCase.style.opacity = '1';
        if( currentScrollTop > lastScrollTop ){
            scrollCase.scrollLeft += 20;
        }else{
            scrollCase.scrollLeft -= 20;
        }
    }else if(experienceWrap.offsetTop >= window.scrollY){
        scrollCase.style.opacity = '0';
        scrollCase.scrollLeft = 0;
    }else if( project.offsetTop + project.offsetHeight  >= window.scrollY ){
        scrollCase.style.opacity = '1';
        scrollCase.scrollLeft = scrollCase.scrollWidth;
    }
    lastScrollTop = currentScrollTop;
}

let illCount = 0;
function illustFlow(){
    const illustBox = document.querySelector('.illustBox');
    const illustSlider = document.querySelector('.illustSlider');

    illCount += 1;
    if( illCount >= 949 ) illCount = 0;

    illustSlider.style.transform = `translateX(${-illCount}px)`

    setTimeout(function(){
        illustFlow();
    },10);
}