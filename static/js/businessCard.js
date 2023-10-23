let hasEnteredViewport = false;
function businessCardIn() {
    const bCardWrap = document.querySelector('.bCardWrap');
    const businessCard = document.querySelector('.businessCard');
    const cardFondEffect = document.querySelectorAll('.cardFondEffect');
    if (bCardWrap.offsetTop-100 <= window.scrollY) {
        hasEnteredViewport = true;
        businessCard.classList.add("flipEntrance");
        setTimeout(function(){
            cardFondEffect.forEach(function(item, idx){
                setTimeout(function(){
                    item.style.animation = "pondAction 2s ease";
                },200*idx);
            })
        },500)
    }else{
        hasEnteredViewport = false;
        businessCard.classList.remove("flipEntrance");
        businessCard.classList.remove("cardFlip");
        cardFondEffect.forEach(function(item){
            item.style.animation = "";
        })
    }
}

function clickFlip(){
    const businessCard = document.querySelector('.businessCard');
    businessCard.classList.toggle("cardFlip");
}