document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.1
    });
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });

  // print.html

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("printForm");
    const confirmation = document.getElementById("confirmation");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Simulasi kirim data, bisa diubah ke fetch/axios
      setTimeout(() => {
        form.reset();
        confirmation.classList.remove("hidden");
      }, 500);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".menu-item");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.1
    });
  
    items.forEach(item => observer.observe(item));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".alu-card");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });
  
    cards.forEach(card => observer.observe(card));
  });

  // Animasi fade-in saat section masuk viewport
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});



var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

//Manual images slider
var manualNav = function(manual) {
    slides.forEach(function (slide) {
        slide.classList.remove("active");

        buttons.forEach((btn) => {
            btn.classList.remove("active");
        });
    });

    slides[manual].classList.add("active");
    buttons[manual].classList.add("active");
}

buttons.forEach(function(btn, i) {
    btn.addEventListener("click", function() {
        manualNav(i);
        currentSlide = i;
    })
})

var repeat = function(activeClass) {
  let active = document.
               getElementsByClassName("active");

  let i = 1;
  var repeater = function() {
    setTimeout(function() {
       [...active].forEach(function(activeSlide) {
          activeSlide.classList.remove("active");
       });

       slides[i].classList.add("active");
       buttons[i].classList.add("active");
       i++

       if(slides.length == i) {
         i = 0;
       }
       if(i >= slides.length) {
         return;
       }
       repeater(); 
     }, 5000);
  } 
  repeater();
}
repeat();

setTimeout(function() {
  //command
}, timeInMillisecond);

// Optional: If you want a more interactive dropdown (like for mobile responsiveness), you can add JS for toggling

// Example of a simple toggle (not necessary for this code unless you want more advanced functionality)
document.addEventListener("DOMContentLoaded", function() {
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdown.addEventListener("click", function() {
      dropdownContent.classList.toggle("show");
  });
});


// about us
document.addEventListener("DOMContentLoaded", function() {
  console.log("Print & Sip - About Us Page Loaded");
  // You can add interactive features here, if needed.
});

// print slide

let slideIndex = [0, 0];
const sliders = [document.getElementById("slider1"), document.getElementById("slider2")];

function plusSlides(n, sliderNum) {
  slideIndex[sliderNum] += n;
  showSlides(sliderNum);
}

function showSlides(sliderNum) {
  const slides = sliders[sliderNum].querySelectorAll(".slide");
  if (slideIndex[sliderNum] >= slides.length) slideIndex[sliderNum] = 0;
  if (slideIndex[sliderNum] < 0) slideIndex[sliderNum] = slides.length - 1;

  const offset = -slideIndex[sliderNum] * 100;
  sliders[sliderNum].style.transform = `translateX(${offset}%)`;
}

window.onload = () => {
  showSlides(0);
  showSlides(1);
};