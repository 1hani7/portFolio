function cubeRotateButton(event){
    const contentCube = document.querySelector(".contentCube");
    const t = event.target.textContent;
    if(t==="HTML/CSS/JS"){
        contentCube.style.animation = 'HCJBt 1.5s ease forwards';
    }
}