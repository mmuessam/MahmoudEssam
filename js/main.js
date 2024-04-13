// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});



document.addEventListener('DOMContentLoaded', function() {
  // Get all links inside the navbar-menu
  const menuLinks = document.querySelectorAll('.navbar-menu a');

  // Add event listener to each link
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Toggle the visibility of the navbar-menu
      const navbarMenu = document.querySelector('.navbar-menu');
      navbarMenu.classList.toggle('hidden');

      // Close the navbar-menu
      navbarMenu.classList.remove('open');

      // Remove active-link class from all links
      menuLinks.forEach(link => {
        link.classList.remove('active-link');
      });

      // Add active-link class to the clicked link
      link.classList.add('active-link');
    });
  });
});





var swiper = new Swiper(".mySwiper", {

  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
          1440: {
            slidesPerView:1.1,
            centeredSlides: true,
          }
        },
  autoplay: {
    delay: 3000, // Change the delay value to adjust autoplay speed (in milliseconds)
    disableOnInteraction: false, // Set to true if you want autoplay to stop when the user interacts with the slider
  },
  loop: true, // Enable looping
});

  



var swiper = new Swiper(".mySwiper-Customer", {

  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
          1440: {
            slidesPerView:3,
            centeredSlides: true,
          }
        },
  autoplay: {
    delay: 3000, // Change the delay value to adjust autoplay speed (in milliseconds)
    disableOnInteraction: false, // Set to true if you want autoplay to stop when the user interacts with the slider
  },
  loop: true, // Enable looping
});

socialBtnHover();


function socialBtnHover() {
  $(".st-social-btn").hover(
    function () {
      $(this).addClass("active").siblings().removeClass('active');
    }
  )
}


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('shadow-header') 
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)





/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/




document.addEventListener('DOMContentLoaded', function() {
  // Get all links inside the navbar-menu
  const menuLinks = document.querySelectorAll('.nav__menu a');

  // Add event listener to each link
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Close the navbar-menu
      const navbarMenu = document.querySelector('.navbar-menu');
      navbarMenu.classList.add('hidden');

      // Remove 'active-link' class from all links
      menuLinks.forEach(link => {
        link.classList.remove('active-link');
      });

      // Add 'active-link' class to the clicked link
      link.classList.add('active-link');
    });
  });

  // Get all sections
  const sections = document.querySelectorAll('section[id]');
  
  const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute('id');
      const sectionsClass = document.querySelector('.nav__menu a[href="#' + sectionId + '"]');

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        // Remove 'active-link' class from all navigation links
        document.querySelectorAll('.nav__menu a').forEach(link => {
          link.classList.remove('active-link');
        });
        // Add 'active-link' class to the navigation link corresponding to the current section
        sectionsClass.classList.add('active-link');
      } else {
        sectionsClass.classList.remove('active-link');
      }
    });
  };

  window.addEventListener('scroll', scrollActive);
});





/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 3000,
	delay: 400,
   // Animation repeats when scrolling back up
  });



sr.reveal(`.home, .st-social-info,.logos, .info, .me`) 
sr.reveal(`.tips`, {delay: 600, distance: '100px', interval: 100}) 
sr.reveal(`.aboutme`, {delay: 600, distance: '100px', interval: 100}) 
sr.reveal(`.swiper-wrapper`, {interval: 200})
sr.reveal(`.Bookacall`, {origin: 'right'}) 
sr.reveal(`.reviews`,{origin: 'left'}) 
sr.reveal(`.Latestprojects`,{origin: 'left'}) 
sr.reveal(`.footer`,{origin: 'top'}) 
sr.reveal(`.buttons`,{origin: 'top'}) 
