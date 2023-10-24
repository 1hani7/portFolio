function openingAnimation(){
    const openingWrap = document.querySelector(".openingWrap");
    const loadingWrap = document.querySelector(".loadingWrap");
    const openingLogoWrap = document.querySelector(".openingLogoWrap");
    const openingP = document.querySelectorAll(".openingP");
    setTimeout(function(){
        loadingWrap.style.animation = 'disappear 1s ease forwards';
        openingLogoWrap.style.animation = 'logoShow 1s ease forwards';
        openingP.forEach(function(item,idx){
            setTimeout(function(){
                item.style.animation = 'openingPonds 1s ease forwards';
            }, 200 * idx);
        });
    },4000);
    setTimeout(function(){
        openingWrap.style.animation = 'curtainOut 4s ease forwards';
    },5500);
    setTimeout(function(){
        introEntranceAnimation();
    },6500);
}