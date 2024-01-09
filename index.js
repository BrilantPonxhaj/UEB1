let MenuBtn = document.querySelector("#MenuBtn");
let NavBar = document.querySelector(".navbar");

MenuBtn.onclick= () =>{
    MenuBtn.classList.toggle("fa-times");
    NavBar.classList.toggle("active");
};

window.onscroll = () => {
    MenuBtn.classList.remove("fa-times");
    NavBar.classList.remove("active");
    ThemeToggle.classList.remove("active");
}

//LoginForma bashk  me close form

document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.querySelector('#LoginBtn');
    var closeButton = document.querySelector('.loginFormContainer .close');
    var loginForm = document.getElementById('id01');

    // Event listener to toggle the login form
    loginButton.addEventListener('click', function() {
        loginForm.classList.toggle('active');
    });

    // Event listener to close the login form
    closeButton.addEventListener('click', function() {
        loginForm.classList.remove('active');
    });
});



 

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
    pagination: { 
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
    pagination: { 
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


// drag n drop
function allowDrop(ev) {
	ev.preventDefault();
	return false;	
}


function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
	return false;
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	var draggedElement = document.getElementById(data);
	ev.target.appendChild(draggedElement);
}




//THEME TOGGLE
let ThemeToggle = document.querySelector(".themeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");

ToggleBtn.onclick = () => {
    ThemeToggle.classList.toggle("active");
    Menu.classList.remove("fa-times");
    NavBar.classList.remove("active");
};
document.querySelectorAll(".themeToggle .themeBtn").forEach((btn)=> {
    btn.onclick =()=> {
        let color= btn.style.background;
        document.querySelector(":root").style.setProperty("--main",color);
    };
});






// KodiJS per PRICERANGE
const rangevalue = 
	document.querySelector(".slider-container .price-slider"); 
const rangeInputvalue = 
	document.querySelectorAll(".range-input input"); 


// Price gap
let priceGap = 5000; 


// eventlisteners per price input elements 
const priceInputvalue = document.querySelectorAll(".price-input input"); 
for (let i = 0; i < priceInputvalue.length; i++) { 
	priceInputvalue[i].addEventListener("input", e => { 


		// analizo max dhe min
		let minp = parseInt(priceInputvalue[0].value); 
		let maxp = parseInt(priceInputvalue[1].value); 
		let diff = maxp - minp 

		if (minp < 0) { 
			alert("minimum price cannot be less than 0"); 
			priceInputvalue[0].value = 0; 
			minp = 0; 
		} 


		// validimi i vlerave inpute
		if (maxp > 400000) { 
			alert("maximum price cannot be greater than 400000"); 
			priceInputvalue[1].value = 400000; 
			maxp = 400000; 
		} 

		if (minp > maxp - priceGap) { 
			priceInputvalue[0].value = maxp - priceGap; 
			minp = maxp - priceGap; 

			if (minp < 0) { 
				priceInputvalue[0].value = 0; 
				minp = 0; 
			} 
		} 


		// kqyre niher nese po pershtatet pricegap 
		// edhe max price a osht within range


		if (diff >= priceGap && maxp <= rangeInputvalue[1].max) { 
			if (e.target.className === "min-input") { 
				rangeInputvalue[0].value = minp; 
				let value1 = rangeInputvalue[0].max; 
				rangevalue.style.left = `${(minp / value1) * 100}%`; 
			} 
			else { 
				rangeInputvalue[1].value = maxp; 
				let value2 = rangeInputvalue[1].max; 
				rangevalue.style.right = 
					`${100 - (maxp / value2) * 100}%`; 
			} 
		} 
	}); 


	// prap eventlisteners per range input
	for (let i = 0; i < rangeInputvalue.length; i++) { 
		rangeInputvalue[i].addEventListener("input", e => { 
			let minVal = 
				parseInt(rangeInputvalue[0].value); 
			let maxVal = 
				parseInt(rangeInputvalue[1].value); 

			let diff = maxVal - minVal;

            console.log("minp:", minp);
            console.log("maxp:", maxp);
            console.log("diff:", diff);

            // Filter() funksioni - i filtron invalid price values
            const validPrices = Array.from(priceInputvalue).filter(input => {
                const price = parseInt(input.value);
                return !isNaN(price) && price >= 0 && price <= 400000;
            });
            console.log("Valid Prices:", validPrices);


            // Map() funksioni - prej ni array kthen ni array tjeter qe e ka length t njejt po vlerat sjon t njejta - osht perdor per mi nxjerr vlerat numerike
            const priceValues = Array.from(priceInputvalue).map(input => {
                const price = parseInt(input.value);
                return isNaN(price) ? 0 : price; // convert NaN n 0
            });
            console.log("Price Values:", priceValues);


            // Reduce() funksioni - i akumulon vlerat prej ni array n single value
            const priceDifference = priceValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            console.log("Price Difference:", priceDifference);

            const priceValue = 1234567.89; // Qekjo zevendsohet me ni vler qfare dojm na
            const formattedPrice = priceValue.toExponential(2); // Formatojm qmimin duke perdor scientific notation me dy shifra pas presjes
            console.log("Formatted Price:", formattedPrice);

            // Shfaqe qmimin e formatuar ne faqe
           const priceElement = document.querySelector(".price-element"); //Zevenndso elementin aktual ne html ku don me e shfaq qmimin 
             priceElement.textContent = formattedPrice.toString(); // E konvertojm qmimin e formatuar ne string dhe e shfaqim ne faqe


             function handleErrors() {
                try {
                    // Këtu mund të vendosni kodin që mund të shkaktojë gabime
                    // Për shembull, kontrollo validimin e vlerave
                    const minRangeInput = document.querySelector(".min-range");
                    const maxRangeInput = document.querySelector(".max-range");
                    
                    const minPrice = parseInt(minRangeInput.value);
                    const maxPrice = parseInt(maxRangeInput.value);
            
                    if (isNaN(minPrice) || isNaN(maxPrice)) {
                        throw new Error("Invalid price values. Please enter valid numbers.");
                    }
            
                    if (minPrice < 0 || maxPrice > 400000) {
                        throw new Error("Price values are out of range.");
                    }
            
                    // Të tjera veprime që mund të shkaktojnë gabime
            
                    // Nëse nuk ka gabime, ekzekuto kodin këtu
                    updatePriceLabels();
                } catch (error)  {
                    // Kap gabimet dhe trajtoj ato këtu
                    // Shfaq ose regjistro gabimin për përdoruesin
                    console.error("Error:", error.message);
            
                    // Mund të bëni diçka tjetër për të trajtuar gabimin, për shembull:

                    // - Shfaq një mesazh gabimi për përdoruesin

                    // - Zhbllokoni veprimet e tjera derisa gabimi të korrigjohet
                    
                    // - Kthejeni vlerat në një gjendje të sigurtë
                    
                    // - Regjistroni gabimin në një log
                }
            }


            setTimeout(() => {
                rangevalue.style.transition = "1s"; // qitu osht apliku ni 1second transition
            }, 100); // Animacionet fillojne prej 100 milisekonda delay
            
            const warningsElement = document.getElementById("warnings");

           
            if (minp < 0) { 
                // shfaqe ni warning per qmimin minimal qe smunet me u bo ma i vogel se 0
                warningsElement.innerHTML = "Minimum price cannot be less than 0";
                // fshije warning after a certain time
                setTimeout(() => {
                    warningsElement.innerHTML = "";
                }, 3000); // fshije warnring after 3 seconds (3000 milliseconds)
            }
            
			
			// a kalon pricegap
			if (diff < priceGap) { 
			
				// kqyre nese inputi osht min range

				if (e.target.className === "min-range") { 
					rangeInputvalue[0].value = maxVal - priceGap; 
				} 
				else { 
					rangeInputvalue[1].value = minVal + priceGap; 
				} 
			} 
			else { 
			
				// mi bo update price inputs 

				priceInputvalue[0].value = minVal; 
				priceInputvalue[1].value = maxVal; 
				rangevalue.style.left = 
					`${(minVal / rangeInputvalue[0].max) * 100}%`; 
				rangevalue.style.right = 
					`${100 - (maxVal / rangeInputvalue[1].max) * 100}%`; 
			} 
		}); 
	} 
}
