// animações

addEventListener("scroll", reveal);

function reveal() {
    let reveals = document.querySelectorAll(".reveal")

    for (i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
        }
    }
}
    
// responsividade

let screenSize = window.screen;

addEventListener('DOMContentLoaded', function(){
    changeWrapperClassList();
    changeAboutImg()
})

addEventListener('resize', function(){
    changeWrapperClassList()
    changeAboutImg()
})

function changeWrapperClassList(){
    let wrapper = document.querySelector(".wrapper");

    if ( screenSize.availWidth < 990 ) {
        wrapper.classList.remove('flex')
        wrapper.classList.add('grid');
    } else {
        wrapper.classList.remove('grid')
        wrapper.classList.add('flex');
    }
}

function changeAboutImg(){
    let aboutImg = document.querySelector(".bg-about-colorido");

    if ( screenSize.availWidth > 990 ) {
        aboutImg.src = "img/about/bg-about-colorido.png";
    } else {
        aboutImg.src = "img/about/bg-about-completo.png";
    }
}

// validação do formulário bootstrap

(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()