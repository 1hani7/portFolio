function coverScrollOut(){
    const leftCover = document.querySelector(".leftCover");
    const rightCover = document.querySelector(".rightCover");
    let scroll = window.scrollY;
    // console.log(scroll)
    leftCover.style.transform = `translateX(${-(scroll*0.4)}px)`;
    rightCover.style.transform = `translateX(${scroll*0.4}px)`;
}