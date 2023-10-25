

window.onload=function(){
    openingAnimation();
    // introEntranceAnimation();
    window.addEventListener('scroll', coverScrollOut);
    window.addEventListener('mousemove', customCursor);
    window.addEventListener('scroll', customCursor);
    window.addEventListener('mousedown', clickAnimation);
    window.addEventListener('scroll', businessCardIn);
    window.addEventListener('scroll', bgChange);
    window.addEventListener('scroll', coverDisplayNone);
    window.addEventListener('scroll', expContentShow);
    beltToRight(); beltToLeft();
    beltOneMove(); beltTwoMove();
    window.addEventListener('scroll', scrollCube);
    illustFlow();
}


// 마우스 커서
function customCursor(e){
    const cursor = document.querySelector(".cursor");
    const semiCursor = document.querySelectorAll(".semiCursor");
    cursor.style.left = e.pageX - 20 + 'px';
    cursor.style.top = e.pageY - 20 + 'px';
}

// 마우스 클릭
function clickAnimation(){
    const cursor = document.querySelector(".cursor");
    const cursorParticle = document.querySelectorAll(".cursorParticle");
    cursor.style.animation = "clickBeat 0.5s ease"
    cursorParticle.forEach(function(item, idx){
        setTimeout(function(){
            item.style.animation = "clickAnimation 1s ease ";
        }, idx*150);
        item.style.animation = '';
    })
    setTimeout(function(){
        cursor.style.animation = "";
    },500)
}

// 사이드메뉴 버튼 스크롤
function btScroll(event){
    const bCardWrap = document.querySelector('.bCardWrap');
    const cubeWrap = document.querySelector('.cubeWrap');
    const experienceWrap = document.querySelector('.experienceWrap');
    const project = document.querySelector('.project');
    const contactWrap = document.querySelector('.contactWrap');
    const t = event.target.parentNode.textContent;
    if( t == 'START' ){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }else if( t == 'INTRODUCE' ){
        window.scrollTo({
            top:bCardWrap.offsetTop+500,
            behavior: 'smooth'
        })
    }else if( t == 'TECHNIQUE' ){
        window.scrollTo({
            top:cubeWrap.offsetTop,
            behavior: 'smooth'
        })
    }else if( t == 'EXPERIENCE' ){
        window.scrollTo({
            top:experienceWrap.offsetTop,
            behavior: 'smooth'
        })
    }else if( t == 'PROJECT' ){
        window.scrollTo({
            top:project.offsetTop,
            behavior: 'smooth'
        })
    }else if( t == 'CONTACT' ){
        window.scrollTo({
            top:contactWrap.offsetTop,
            behavior: 'smooth'
        })
    }
}