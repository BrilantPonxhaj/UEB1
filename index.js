let MenuBtn = document.querySelector("#MenuBtn");
let NavBar = document.querySelector(".navbar");

MenuBtn.onclick=()=>{
    MenuBtn.classList.toggle("fa-times");
    NavBar.classList.toggle("active");
};

window.onscroll = () => {
    MenuBtn.classList.remove("fa-times");
    NavBar.classList.remove("active");
    ThemeToggle.classList.remove("active");
}

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


//Swiper JS per Vehicle Slider-- slide me maus edhe me t dal tjetra
var swiper = new Swiper(".VehiclesSlider", {
    grabCursor:true,
    spaceBetween:20,
    centeredSlides:true,
    loop: true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    pagintion: { /*per do blue circles posht kerreve -- po sdi pse spo boooonnnnn*/
        el: ".swiper-pagination",
        clickable: true,
    },
    //Qikjo per Responsive -- mi bo 3 boxes te Popular Vehicles qe me mujt me bo slide edhe me t dal tjetra
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
    }
});
/* 
PROVE:
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".VehiclesSwiper", {
      grabCursor: true,
      loop: true,
    });
);
*/


/*SLIDESHOW I FOTOVE 1,2,3*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Swiper JS per slider t featured 
var swiper = new Swiper(".FeatureSlider", {
    grabCursor:true,
    spaceBetween:30,
    centeredSlides:true,
    loop: true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    pagintion: { 
        el: ".swiper-pagination",
        clickable: true,
    },
    //Qikjo per Responsive -- mi bo boxes te Featured Cars qe kur ti bojsh slide me t dal tjetra
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
    }
});


//Swiper JS per Review Slider
var swiper = new Swiper(".ReviewSlider", {
    grabCursor:true,
    spaceBetween:20,
    centeredSlides:true,
    loop: true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    pagintion: { 
        el: ".swiper-pagination",
        clickable: true,
    },
    //Qikjo per Responsive -- mi bo boxes te fotot e njerzve qe kur te bon slide t del tjetra
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
    }
});

//THEME TOGGLE
let ThemeToggle = document.querySelector(".themeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");

ToggleBtn.onclick = () => {
    ThemeToggle.classList.toggle("active");
    Mwnu.classList.remove("fa-times");
    NavBar.classList.remove("active");
};
document.querySelectorAll(".themeToggle .themeBtn").forEach((btn)=> {
    btn.onclick =()=> {
        let color= btn.style.background;
        document.querySelector(":root").style.setProperty("--main",color);
    };
});