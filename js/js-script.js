$(document).ready(function () {
  $(".style-switcher-toggle").click(function () {
    console.log("hello");

    $(".style-switcher").toggleClass("open");
  });

  $(".day-nigh").click(function () {
    $(".s-icon").toggleClass("open");
    $(".contact").toggleClass("open");
    $(".contact .section-title").toggleClass("open");
    $(".contact .second-level .box p a").toggleClass("open");
    $(".contact .second-level").toggleClass("open");
    $(".home").toggleClass("open");
    $(".home .text-content h3").toggleClass("open");
    $(".Skills").toggleClass("open");
    $(".Skills h2").toggleClass("open");
    $(".education .section-title").toggleClass("open");
    $(".education").toggleClass("open");
  });

  
  $(".theme-box .colors").click(function(){
    $(".style-switcher").toggleClass("open");
  })

  $(window).scroll(function () {
    $(".style-switcher").removeClass("open");
    $(".left-stable").removeClass("active");
    $(".menu-bar i").removeClass("active");
    if (this.scrollY > 500) {
      $(".up-angle").addClass("open");
    } else {
      $(".up-angle").removeClass("open");
    }
  });

  $(".menu-bar").click(function () {
    console.log("hello");

    $(".left-stable").toggleClass("active");
    $(".menu-bar i").toggleClass("active");
  });
});

function setThemeAttr(color) {
  document.querySelectorAll(".set-theme").forEach(function (style) {
    if (color == style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

var typed = new Typed(".typing", {
  strings:["Web Developer", "Blogger", "", "C.P."],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing-2", {
  strings:["Web Developer", "Blogger", "", "C.P."],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".menu a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".menu a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

/* disable developer mode*/
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

document.oncontextmenu = function(e) {
  var el = window.event.srcElement || e.target;
  var tp = el.tagName || '';
  if ( tp.toLowerCase() == 'input' || tp.toLowerCase() == 'select' || tp.toLowerCase() == 'textarea' ){
    return false;
  }
};

var loader=document.getElementById('preloader')

window.addEventListener("load",function(){
  loader.style.display="none"
})
