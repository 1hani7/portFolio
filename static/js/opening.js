function openingAnimation(){
    const loadingWrap = document.querySelector(".loadingWrap");
    const openingLogoWrap = document.querySelector(".openingLogoWrap");
    setTimeout(function(){
        loadingWrap.style.animation = 'disappear 1s ease forwards';
        openingLogoWrap.style.animation = 'logoShow 1s ease forwards';
    },4000);
}