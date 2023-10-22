function coverScrollOut(){
    const leftCover = document.querySelector(".leftCover");
    const rightCover = document.querySelector(".rightCover");
    let scroll = window.scrollY;

    leftCover.style.transform = `translateX(${-(scroll*0.2)}px)`;
    rightCover.style.transform = `translateX(${scroll*0.2}px)`;
}

function introEntranceAnimation(){
    const introLogoWrap = document.querySelector(".introLogoWrap");
    const introLine = document.querySelector(".introLine");
    const introSlogun = document.querySelector(".introSlogun");

    introLogoWrap.classList.add("introEntrance");
    setTimeout(function(item, idx){
        introLine.classList.add("introEntrance");
    }, 1000);  
    
    setTimeout(function(item, idx){
        introSlogun.classList.add("introEntrance");
    }, 2000);

    setTimeout(typingAnimation, 3500);
}


let charIndex = 0;
function typingAnimation(){
    const titleWord = document.querySelector(".titleWord");
    const introTitleText = `"개발이라는 우주로"`;
    const typingSpeed = 100;
    if( charIndex < introTitleText.length ){
        titleWord.innerHTML += introTitleText.charAt(charIndex);
        charIndex++;
        setTimeout( typingAnimation, typingSpeed );
        // if( charIndex >= introTitleText.length ){
        //     setTimeout( function(){
        //         titleWord.innerHTML = '';
        //         charIndex = 0;
        //         typingAnimation();
        //     }, 3000);
        // }
    }
}