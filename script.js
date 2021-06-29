
function debounce(func,wait = 20, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if(!immediate) func.apply(context,args); 
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context,args);
    };
};

let biggerImages = document.querySelectorAll('.get-bigger');
let biggerImages1 = document.querySelectorAll('.get-bigger-1');

function getBigger(e) {
// console.log(window.scrollY);
biggerImages.forEach(biggerImage => {
const getBiggerAt = (window.scrollY + window.innerHeight) - 
biggerImage.height / 3;
const imageBottom = biggerImage.offsetTop + biggerImage.height;
const isHalfShown = getBiggerAt > biggerImage.offsetTop;
const isNotScrolledPast = window.scrollY < imageBottom;

if (isHalfShown && isNotScrolledPast) {
    biggerImage.classList.add('active');
} else {
    biggerImage.classList.remove('active');

}
});
}

window.addEventListener('scroll', debounce(getBigger));

function getBigger1(e) {
    // console.log(window.scrollY);
    biggerImages1.forEach(biggerImage1 => {
    const getBiggerAt = (window.scrollY + window.innerHeight) - 
    biggerImage1.height / 3;
    const imageBottom = biggerImage1.offsetTop + biggerImage1.height;
    const isHalfShown = getBiggerAt > biggerImage1.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    
    if (isHalfShown && isNotScrolledPast) {
        biggerImage1.classList.add('active-1');
    } else {
        biggerImage1.classList.remove('active-1');
    
    }
    });
    }

    window.addEventListener('scroll', debounce(getBigger1));

// function that makes telephone number appear and disappear
    let whatsappButton = document.querySelector('#whatsapp-button');
    
    let telephone = document.getElementById('#telephone') 

    function showNumber() {
       
     if (!telephone.classList.contains('telephone-in'))
     {telephone.classList.add('telephone-in');
    } else {
         telephone.classList.remove('telephone-in');
     }

    }
   whatsappButton.addEventListener('click', showNumber);

   //function that makes side navbar appear and disappear
  
   let menuButton = document.querySelector('#navbar-button');
    
   let menu = document.getElementById('#menu') 

   let stopScrolling = document.querySelector('body');
   function showMenu(e) {
      
    if (!menu.classList.contains('side-navbar-active'))
    {
        menu.classList.add('side-navbar-active');
        menuButton.classList.remove('fa-bars');
        menuButton.classList.add('fa-times');
        stopScrolling.classList.add('stop-scrolling');
   }

  else {
    menu.classList.remove('side-navbar-active');
    menuButton.classList.remove('fa-times');
    menuButton.classList.add('fa-bars');
    stopScrolling.classList.remove('stop-scrolling');
   }

   }

menuButton.addEventListener('click', showMenu);

// function closeMenu {

    
//        if ( menu.classList.contains('side-navbar-active'))
       
  
// }


   



   
   
    
   
 
  

  

   


 


  let para = document.querySelectorAll('.sliding-para');


function slidingPara(e) {
    // console.log(window.scrollY);
    para.forEach(par => {
    const slideAt = (window.scrollY + window.innerHeight)
    const paraBottom = par.offsetTop + par.clientHeight;
    const isHalfShown = slideAt > par.offsetTop;
    const isNotScrolledPast = window.scrollY < paraBottom;    
    if (isHalfShown && isNotScrolledPast) {
        par.classList.add('active-para');
    } else {
        par.classList.remove('active-para');
    
    }
    });
    }


    window.addEventListener('scroll', debounce(slidingPara));
