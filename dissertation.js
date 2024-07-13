document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-button');
    const nextBtn = document.querySelector('.next-button');
    const slides = document.querySelectorAll('.slider1');
    const totalSlides = slides.length;
    let currentSlide = 0;

    function updateSliderPosition() {
        const slideWidth = slides[0].clientWidth;
        const newTransform = -currentSlide * slideWidth;
        slider.style.transform = `translateX(${newTransform}px)`;
    }

    prevBtn.addEventListener('click', function () {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 3; // Adjust this number based on the number of visible slides
        }
        updateSliderPosition();
    });

    nextBtn.addEventListener('click', function () {
        if (currentSlide < totalSlides - 3) { // Adjust this number based on the number of visible slides
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateSliderPosition();
    });

    window.addEventListener('resize', updateSliderPosition);
});
/*---------------faq section js starts here------------------*/ 
const faqs=document.querySelectorAll(".faq");
faqs.forEach((faq)=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
})
/*---------------faq section js ends here------------------*/ 