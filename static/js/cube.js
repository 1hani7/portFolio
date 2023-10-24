let isHTML = false;
let isChart = false;
let isVue = false;
let isData = false;
let isPPT = false;
let isGr = false;

function cubeRotateButton(event){
    const contentCube = document.querySelector(".contentCube");
    const cubeFace = document.querySelectorAll(".cubeFace");
    const t = event.target.textContent;
    
    if(t==="HTML/CSS/JS"){
        facesInit()
        contentCube.style.animation = 'HCJBt 1.5s ease forwards';
        if( isHTML == false ) {
            setTimeout(function(){
                cubeFace[0].style.transform = 'translateZ(125px) rotateY(180deg)';
            }, 1500)
        }else{
            cubeToggle(isHTML);
            return;
        }
        isHTML = true;
    }else if(t==='chart.js'){
        facesInit()
        contentCube.style.animation = 'chartJS 1.5s ease forwards';
        if( isChart == false ){
            setTimeout(function(){
                cubeFace[1].style.transform = 'translateZ(-125px) rotateY(0deg)';
            }, 1500)
        }else{
            cubeToggle(isChart);
            return;
        }
        isChart = true;
    }else if(t==='Vue'){
        facesInit()
        contentCube.style.animation = 'Vue 1.5s ease forwards';
        if( isVue == false ){
            setTimeout(function(){
                cubeFace[2].style.transform = 'translateX(125px) rotateY(270deg)';
            }, 1500)
        }else{
            cubeToggle(isVue);
            return;
        }
        isVue = true;
    }else if(t==='FIREBASE/JSON'){
        facesInit()
        contentCube.style.animation = 'data 1.5s ease forwards';
        if( isData == false ){
            setTimeout(function(){
                cubeFace[3].style.transform = 'translateX(-125px) rotateY(-270deg)';
            }, 1500)
        }else{
            cubeToggle(isData);
            return;
        }
        isData = true;
    }else if(t==='PPT/Canva'){
        facesInit()
        contentCube.style.animation = 'PPTCanva 1.5s ease forwards';
        if( isPPT == false ){
            setTimeout(function(){
                cubeFace[4].style.transform = 'translateY(-125px) rotateY(180deg) rotateX(270deg)';
            }, 1500)
        }else{
            cubeToggle(isPPT);
            return;
        }
        isPPT = true;
    }else if(t==='GRAPHIC'){
        facesInit()
        contentCube.style.animation = 'graphic 1.5s ease forwards';
        if( isGr == false ){
            setTimeout(function(){
                cubeFace[5].style.transform = 'translateY(125px) rotateY(180deg) rotateX(-270deg)';
            }, 1500)
        }else{
            cubeToggle(isGr);
            return;
        }
        isGr = true;
    }
}

function cubeToggle( i ){
    const contentCube = document.querySelector(".contentCube");
    const cubeFace = document.querySelectorAll(".cubeFace");

    isHTML = false;
    isChart = false;
    isVue = false;
    isData = false;
    isPPT = false;
    isGr = false;
    
    cubeFace[0].style.transform = 'translateZ(125px)';
    cubeFace[1].style.transform = 'rotateY(180deg) translateZ(125px)';
    cubeFace[2].style.transform = 'rotateY(90deg) translateZ(125px)';
    cubeFace[3].style.transform = 'rotateY(-90deg) translateZ(125px)';
    cubeFace[4].style.transform = 'rotateX(90deg) translateZ(125px)';
    cubeFace[5].style.transform = 'rotateX(-90deg) translateZ(125px)';
    
    setTimeout(function(){
        contentCube.style.animation = '';
        contentCube.style.animation = 'rotate 10s linear infinite';
    }, 1500)
}

function facesInit(){
    const cubeFace = document.querySelectorAll(".cubeFace");
    cubeFace[0].style.transform = 'translateZ(125px)';
    cubeFace[1].style.transform = 'rotateY(180deg) translateZ(125px)';
    cubeFace[2].style.transform = 'rotateY(90deg) translateZ(125px)';
    cubeFace[3].style.transform = 'rotateY(-90deg) translateZ(125px)';
    cubeFace[4].style.transform = 'rotateX(90deg) translateZ(125px)';
    cubeFace[5].style.transform = 'rotateX(-90deg) translateZ(125px)';
}