let MenuBtn=document.querySelector("#MenuBtn");
let NavBar=document.querySelector(".navbar");

MenuBtn.onclick=()=>
{
    MenuBtn.classList.toggle("fa-times");
    NavBar.classList.toggle("active");
};

// LoginFormContaine
document.querySelector("#LoginBtn").onclick=()=> {
    document.querySelector(".loginFormContainer").classList.toggle("active");
};
document.querySelector("#CloseLoginForm").onclick =()=> {
    document.querySelector(".loginFormContainer").classList.remove("active");
}