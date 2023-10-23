function bgChange(){
    const html = document.querySelector('html');
    const experienceWrap = document.querySelector('.experienceWrap');
    const contactWrap = document.querySelector('.contactWrap');
    const particleBg = document.querySelector('.particleBg');
    if(experienceWrap.offsetTop-400 <= window.scrollY &&
         contactWrap.offsetTop-500 > window.scrollY){
        particleBg.style.opacity = '0';
    }
    else{
        particleBg.style.transition = '1s';
        particleBg.style.opacity = '1';
    }
}