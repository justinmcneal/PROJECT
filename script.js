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

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let sliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

// Initial setup
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let runningTime = 3000;
let timeAutoNext = 20000;
let runTimeout;
let runNextAuto;

// Click event handlers
nextDom.onclick = function() {
    showSlider('next');
};

prevDom.onclick = function() {
    showSlider('prev');
};

// Function to show slider
function showSlider(type) {
    let sliderItemsDom = sliderDom.querySelectorAll('.carousel .list .item');

    if (type === 'next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, runningTime);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}
