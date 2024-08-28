/*=============== toggle icon navbar ===========*/ 

let menuIcon = document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menuIcon.onclick = () => {
    // Toggle between classes like 'fa-x' and 'fa-bars', assuming you're changing the icon
    menuIcon.classList.toggle('fa-x'); 
    menuIcon.classList.toggle('fa-bars');
    
    navbar.classList.toggle('active');
}


/*=============== scroll section active link ===========*/ 


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
           navLinks.forEach.apply(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id +']').classList.add('active');
           });
        };
        
    });


    /*=============== sticky navbar ===========*/ 

    let header =  document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);


    /*=============== remove toggle icon and navbar ===========*/ 
menuIcon.classList.remove('<i class="fa-solid fa-x"></i>');
navbar.classList.remove('active');

};

 /*=============== scroll reveal ===========*/ 
 ScrollReveal({ 
    distance: '80px',
    duraton: 2000,
    delay: 200,
  });

  ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form ', { origin: 'button' });
  ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
  ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

  /*=============== TYPED JS ===========*/ 

  const typed = new Typed('.multple-text',{
    strings: ['Frontend Developer', 'Web Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
  });