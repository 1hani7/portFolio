let isSideOpen = false;

function sideMenuToggle(){
    const sideMenu = document.querySelector(".sideMenu");
    

    const menu = document.querySelectorAll(".menu");
    if( !isSideOpen ){
        sideMenu.classList.toggle("menuOn");
        sideMenu.classList.toggle("menuOff");
        setTimeout(function(){
            menu.forEach((val, idx)=>{
                setTimeout(()=>{
                    val.classList.remove("menuHide");
                    val.classList.add("menuShow");
                }, idx * 100);
            })
        },400);
        isSideOpen = true;
    }else{
        menu.forEach((val, idx)=>{
            setTimeout(()=>{
                val.classList.remove("menuShow");
                val.classList.add("menuHide");
            }, idx * 100);
        })
        setTimeout(()=>{
            sideMenu.classList.toggle("menuOn");
            sideMenu.classList.toggle("menuOff");
        }, 1000)
        isSideOpen = false;
    }
}