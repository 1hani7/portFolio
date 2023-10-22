let isSideOpen = false;
let isSideAnimating = false;

function sideMenuToggle(){
    if( isSideAnimating ) return;

    isSideAnimating = true;

    const sideMenu = document.querySelector(".sideMenu");
    const menu = document.querySelectorAll(".menu");
    if( !isSideOpen ){
        isSideOpen = true;
        sideMenu.classList.toggle("menuOn");
        sideMenu.classList.toggle("menuOff");
        setTimeout(function(){
            menu.forEach((val, idx)=>{
                setTimeout(()=>{
                    val.classList.remove("menuHide");
                    val.classList.add("menuShow");
                }, idx * 100);
            })
            isSideAnimating = false;
        },400);
    }else{
        isSideOpen = false;
        menu.forEach((val, idx)=>{
            setTimeout(()=>{
                val.classList.remove("menuShow");
                val.classList.add("menuHide");
            }, idx * 100);
        })
        setTimeout(()=>{
            sideMenu.classList.toggle("menuOn");
            sideMenu.classList.toggle("menuOff");
            isSideAnimating = false;
        }, 1000)
    }
}