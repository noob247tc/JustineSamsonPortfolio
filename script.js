
const p1= document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const resume = document.querySelector('.resume')
const sections = document.querySelectorAll('section');
const surveyLink = document.getElementById('survey-link');
const landingPage = document.getElementById('product-landing-page');
const palindromeChecker = document.getElementById('palindrome-checker')
    const toggleButton = document.querySelector('.fa-solid.fa-bars');
    const closeButton = document.querySelector('.fa-solid.fa-xmark');
    const phoneLinks = document.querySelector('.phone-links');
    
p1.addEventListener('animationend', ()=> {

  p1.style.borderRight = 'none';
  p2.style.display = 'block';

 
});
p2.addEventListener('animationend', ()=>{
  resume.style.display = 'block';
   setTimeout(() => {
    resume.style.transform = 'translateY(0)'; // Move to final position
  }, 10);
})
document.addEventListener('DOMContentLoaded', () => {
    
    let activeSection = null;

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 50% visibility to consider a section active
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.5) {
                // A new section is at least 50% visible
                if (activeSection && activeSection !== entry.target) {
                    activeSection.classList.remove('visible');
                }
                entry.target.classList.add('visible');
                activeSection = entry.target;
            } else {
                // If this section is not the active one or less than 50% visible, remove visible class
                if (activeSection !== entry.target) {
                    entry.target.classList.remove('visible');
                }
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));
});


surveyLink.addEventListener("click", ()=>{
     window.open("https://noob247tc.github.io/Survey1/Survery.html", "_blank");
});

landingPage.addEventListener("click", ()=>{
     window.open("https://noob247tc.github.io/landing-page/Product%20Landing%20Page.html", "_blank");
});

palindromeChecker.addEventListener("click", ()=>{
     window.open("https://noob247tc.github.io/PalindromeChecker/Palindrome%20Checker.html", "_blank");
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.fa-solid');
    const phoneLinks = document.querySelector('.phone-links');

    toggleButton.addEventListener('click', function() {
        phoneLinks.classList.toggle('hide');
    });
});
 closeButton.style.display = 'none';
 
document.addEventListener('DOMContentLoaded', function() {


    toggleButton.addEventListener('click', function() {
        phoneLinks.classList.remove('hide');
        toggleButton.style.display = 'none'; // Hide the bars icon
        closeButton.style.display = 'flex'; // Show the close icon
    });

    closeButton.addEventListener('click', function() {
        phoneLinks.classList.add('hide');
        toggleButton.style.display = 'flex'; // Show the bars icon
        closeButton.style.display = 'none'; // Hide the close icon
    });
});
