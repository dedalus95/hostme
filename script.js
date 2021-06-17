
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
