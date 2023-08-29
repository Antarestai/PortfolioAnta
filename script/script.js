// revelar al scrollear 
window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }

    
// ===== Scroll al top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {    // If page is scrolled more than 50px
        $('#top').fadeIn("fast");       // Fade in the arrow
    } else {
        $('#top').fadeOut("fast");      // Else fade out the arrow
    }
});
$('#top').click(function() {            // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                   // Scroll to top of body
    }, 500);
});
$(document).ready(function() {
    $(".scroll").click(function(event){
        $('html, body').animate({scrollTop: '+=1000px'}, 800);
    });
});
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 0.7; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});


