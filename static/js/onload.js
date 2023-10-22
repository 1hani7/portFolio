

window.onload=function(){
    introEntranceAnimation();
    window.addEventListener('scroll', coverScrollOut);
    window.addEventListener('mousemove', customCursor);
    window.addEventListener('mousedown', clickAnimation);
}


// 마우스 커서
function customCursor(e){
    const cursor = document.querySelector(".cursor");
    const semiCursor = document.querySelectorAll(".semiCursor");
    cursor.style.left = e.pageX - 20 + 'px';
    cursor.style.top = e.pageY - 20 + 'px';
    // semiCursor.forEach(function(item, idx){
    //     setTimeout(function(){
    //         item.style.left = e.pageX - 10 + 'px';
    //         item.style.top = e.pageY - 10 + 'px';
    //     }, idx * 100);
    // });
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