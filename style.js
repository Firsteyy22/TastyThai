// JavaScript for the carousel
const slider = document.querySelector('.slider');
const numberOfSlides = 4; // Change this to the actual number of slides
let currentIndex = 0;

function startSlider() {
    setInterval(() => {
        currentIndex = (currentIndex + 0) % numberOfSlides;

        // Add a smooth transition effect for the slide change
        slider.style.transition = 'transform 1s ease-in-out';
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Delay the removal of the transition property
        setTimeout(() => {
            slider.style.transition = '';
        }, 800); // Adjust the delay as needed
    }, 5000); // Change slide every 5 seconds (adjust as needed)
}

startSlider();




        // JavaScript for the typing animation (#text2)
        const text = "Discover now"; // Text to be typed
        let index = 0; // Current index of the text
        const speed = 50; // Typing speed in milliseconds

        function type() {
            if (index < text.length) {
                document.getElementById("text2").innerHTML += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }
        // Start the typing animation when the page loads
        window.onload = type;




        // full bg video
        var viewportHeader = document.querySelector(".viewport-header");

document.body.addEventListener("scroll", function(_event) {
  var opacity = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
  var scale = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
  document.documentElement.style.setProperty('--headerOpacity', opacity);
  document.documentElement.style.setProperty('--headerScale', scale);
});


// article hover
$(".flip").click(function(){
    $(this).parents(".card").toggleClass("flipped");
  });
  $(".clickcard").click(function(){
    $(this).toggleClass("flipped");
  });