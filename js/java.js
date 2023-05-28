function rotate() {
    let x = document.querySelector(".burger-menu");
    let l1 = document.querySelector(".menu-line-1");
    let l2 = document.querySelector(".menu-line-2");
    let l3 = document.querySelector(".menu-line-3");

    x.style.transform = "rotate(90deg)";

    setTimeout(() => {
        l1.style.transform = "rotate(-45deg)";
        l2.style.transform = "translateX(100px)";
        l3.style.transform = "rotate(45deg)";
    }, 500);

    setTimeout(() => {
        l2.style.width = "300px";
        x.style.transform += "translate(122.5px ,-122.5px)";
    }, 1000);
}

var isOpen = false;
function navmenu() {

    let m1 = document.querySelector("#m1");
    let m2 = document.querySelector("#m2");
    let m3 = document.querySelector("#m3");
    let m4 = document.querySelector("#m4");
    let m5 = document.querySelector("#m5");

    let x = document.querySelector(".burger-menu");
    let l1 = document.querySelector(".menu-line-1");
    let l2 = document.querySelector(".menu-line-2");
    let l3 = document.querySelector(".menu-line-3");
    if (isOpen == false) {
        m1.style.transitionDelay = "2s";
        m5.style.transitionDelay = "2.2s";
        m2.style.transitionDelay = "2.4s";
        m4.style.transitionDelay = "2.6s";
        m3.style.transitionDelay = "2.8s";
        m1.style.transform = "rotate(180deg)";
        m2.style.transform = "rotate(180deg)";
        m3.style.transform = "translateX(-120px)";
        m4.style.transform = "rotate(-180deg)";
        m5.style.transform = "rotate(-180deg)";
        x.style.animation = "burgerRot 2s forwards";
        l1.style.animation = "l1 2s forwards";
        l2.style.animation = "l2 2s forwards";
        l3.style.animation = "l3 2s forwards";
        isOpen = true;
    } else {
        
        m1.style.transitionDelay = "0s";
        m5.style.transitionDelay = "0.2s";
        m2.style.transitionDelay = "0.4s";
        m4.style.transitionDelay = "0.6s";
        m3.style.transitionDelay = "0.8s";
        m1.style.transform += "rotate(180deg)";
        m2.style.transform += "rotate(180deg)";
        m3.style.transform += "translateX(+120px)";
        m4.style.transform += "rotate(-180deg)";
        m5.style.transform += "rotate(-180deg)";
        setTimeout(()=>{
            x.style.animation = "burgerRotb 2s forwards ";
            l1.style.animation = "l1b 2s forwards ";
            l2.style.animation = "l2b 2s forwards ";
            l3.style.animation = "l3b 2s forwards ";
            isOpen = false;
        },1300);
        
    }

}
