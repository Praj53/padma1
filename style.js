// navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


  let slideIndex = 1;
  showSlide(slideIndex);

  // Auto slide every 4 seconds
  setInterval(() => {
    moveSlide(1);
  }, 4000);

  function moveSlide(n) {
    showSlide(slideIndex += n);
  }

  function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    const offset = -100 * (slideIndex - 1);
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
  }


  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("inquiry-form").style.display = "block";
    }, 5000); // 5000 milliseconds = 5 seconds
});
 // Function to close the form
 function closeForm() {
  document.getElementById("inquiry-form").style.display = "none";
}

// couting number
document.addEventListener("DOMContentLoaded", function() {
  const experienceElement = document.getElementById("experience");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(document.getElementById("counterDiv"));

  function startCounting() {
    const targetCount = 35;
    const duration = 1500; // Animation duration in milliseconds
    const interval = duration / targetCount;
    let currentCount = 0;

    const countingInterval = setInterval(function() {
      currentCount++;
      experienceElement.textContent = currentCount;
      if (currentCount === targetCount) {
        clearInterval(countingInterval);
        experienceElement.style.opacity = 1; // Show the counter once finished counting
      }
    }, interval);
  }
});



//  ScrollReveal
ScrollReveal({
  reset: true,
  distance:0,
  duration: 2000,
  delay: 100
});
ScrollReveal().reveal('.F1div,.F3div,.Hheadline h1,.enq1div', { origin: 'top' });
ScrollReveal().reveal('.Fheading,.F2div,.apara1,.senq2div', { origin: 'bottom' });
ScrollReveal().reveal('.Hdiv1 h1,.Hdiv1 p,.P1div ,.P3div,.A2div1 h2, .apara,.A2divicon ,.A2div3 h2, .apara,.A2divicon,.hisdiv2 p ', { origin: 'left' });
ScrollReveal().reveal('.Hdiv1 h2,.P2div ,.P4div ,.line,.A2div2 h2, .apara,.A2divicon,.hisdiv1 img', { origin: 'right' });