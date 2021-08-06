let theme = 'light'

const navToggle = document.querySelectorAll('.nav-toggle, .nav-toggle-bottom')

navToggle.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.toggle('nav-open')
    })
})

const navLinks = document.querySelectorAll('.nav__link')

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

var nav = document.querySelector('.nav-toggle');
var navBottom = document.querySelector('.nav-toggle-bottom');

if (window.pageYOffset > 100 && window.innerWidth > 800) {
    navBottom.classList.add("show")
    navBottom.classList.remove("hide")
}
else {
    nav.classList.add("show")
    nav.classList.remove("hide")

}

window.onscroll = function () {
    var nav = document.querySelector('.nav-toggle');
    var navBottom = document.querySelector('.nav-toggle-bottom');
    if (window.pageYOffset > 100) {
        navBottom.removeAttribute("hidden");
        nav.classList.add("hide")
        nav.classList.remove("show")
        navBottom.classList.add("show")
        navBottom.classList.remove("hide")
    }
    else {
        nav.classList.add("show")
        nav.classList.remove("hide")
        navBottom.classList.add("hide")
        navBottom.classList.remove("show")
    }
}

const navToggleTheme = document.querySelector('.nav__toggle-theme')

const htmlTag = document.getElementsByTagName("html")[0]
console.log(document.cookie)
if (document.cookie == 'theme=alt') {
    htmlTag.setAttribute("data-theme", "alt")
}
else
    htmlTag.removeAttribute("data-theme")

navToggleTheme.addEventListener('click', () => {
    const htmlTag = document.getElementsByTagName("html")[0]
    if (htmlTag.hasAttribute("data-theme")) {
        htmlTag.removeAttribute("data-theme")
        document.cookie = 'theme=original'
        return
    }
    document.cookie = 'theme=alt'
    htmlTag.setAttribute("data-theme", "alt")
})

$(document).on('click', function (event) {
    if (document.querySelector('.nav-open'))
        document.body.classList.remove('nav-open')
})
$('.nav, .nav-toggle, .nav-toggle-bottom').on('click', function (event) {
    event.stopPropagation()
})

var velocity = 0.5;

function update() {
    var pos = $(window).scrollTop();
    $('.portfolio__about').each(function () {
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height() - 18;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity - 141) + 'px');
    });
};

$(window).bind('scroll', update);