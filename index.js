let MenuBtn=document.querySelector("#MenuBtn");
let NavBar=document.querySelector(".navbar");

MenuBtn.onclick=()=>
{
    MenuBtn.classList.toggle("fa-times");
    NavBar.classList.toggle("active");
};

// LoginFormContainer
document.querySelector("#LoginBtn").onclick=()=> {
    document.querySelector(".loginFormContainer").classList.toggle("active");
};
document.querySelector("#CloseLoginForm").onclick =()=> {
    document.querySelector(".loginFormContainer").classList.remove("active");
}; 
 
//HomeParallaxEffect -- me leviz figura kryesore 
document.querySelector(".home").onmousemove = (e) => {
    document.querySelectorAll(".homeParallaxEffect").forEach((el) => {
        let Speed = el.getAttribute("data-speed")
        let X = (window.innerWidth - e.pageX*Speed) / 60;
        let Y  = (window.innerHeight - e.pageY*Speed) / 60;
       

        el.style.transform=`translateX(${Y}px) translateY(${X}px)`;
    });
};
document.querySelector(".home").onmouseleave = (e) => {
    document.querySelectorAll(".homeParallaxEffect").forEach((el) => {
        el.style.transform =`translateX(0px) translateY(0px)`;
    });
}; 