$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('nav ul li a').removeClass("active");
            currentLink.addClass("active");
        }
    });
}

//------------------------------------------nav bar
let menu = document.querySelector('.menu-btn');
const navBar = document.querySelector('nav');
const ul = document.querySelectorAll('li');
function navHidder(){
    navBar.classList.toggle('hidden');
}
menu.addEventListener('click', navHidder);
ul.forEach(function(li){
    li.addEventListener('click', navHidder);
});
// -----------------------------------------like
let hearths = document.querySelectorAll(".hearth");
let hearth, counter;
hearths.forEach(function(hearth){
    hearth.addEventListener('click', function(){
        if (hearth.style.fill!=="red"){
            hearth.style.fill="red";
            hearth.style.stroke="red";
            counter = Number(hearth.previousElementSibling.textContent)+1;
            hearth.previousElementSibling.textContent = counter;
        }
        else{
            hearth.style.fill="none";
            hearth.style.stroke="currentColor";
            counter = Number(hearth.previousElementSibling.textContent)-1;
            hearth.previousElementSibling.textContent = counter;
        }
    });
})
let width = document.createElement('p');
let body = document.querySelector('body');
body.appendChild(width);
width.textContent = window.innerWidth;
width.style.position = 'fixed';
width.style.top = '60px';
width.style.background = 'yellow';