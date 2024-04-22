/*home js*/
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    hamburger.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
  }


  /* contact js */
function sendMail() {
  var parameter = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  
  const serviceID = "service_1jvqwbr";
  const templateID = "template_jp0zm0f";
  
  emailjs.send(serviceID, templateID, parameter)
  .then(res=>{
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Manifesting Pasado!")
  })
  
  .catch(err=>console.log(err));
}

/* discover js */

const nextDom = document.getElementById('next');
const prevDom = document.getElementById('prev');

const carouselDom = document.querySelector('.carousel');
const SliderDom = carouselDom.querySelector('.carousel .list');
const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// const Runningtime = 3000;
const timeAutoNext = 20000;

let isAnimating = false; // Flag to track if animation is running

nextDom.addEventListener('click', () => {
    if (!isAnimating) { // Check if animation is not running
        isAnimating = true; // Set flag to true to indicate animation start
        showSlider('next');
    }
});

prevDom.addEventListener('click', () => {
    if (!isAnimating) { // Check if animation is not running
        isAnimating = true; // Set flag to true to indicate animation start
        showSlider('prev');
    }
});

let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext);

function showSlider(type) {
    const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    
    // Set timeout to reset animation flag after animation duration
    setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
        isAnimating = false; // Reset flag to indicate animation end
    })
    // }, Runningtime);
}
