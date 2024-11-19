// Splash screen atau intro
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let bgSecond = document.querySelector('.bg-second')
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });
    });

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50);
        });
    }, 2000);

    setTimeout(() => {
        intro.style.top = '-100vh';
    }, 2300);

    setTimeout(() => {
        bgSecond.style.top = '-100vh';
        bgSecond.style.opacity = '0';
    }, 1700);

});



// Animasi navbar
window.addEventListener("load", function () {
    const splashScreen = document.querySelector(".intro");
    const navbar = document.querySelector(".navbar");

    setTimeout(function () {
        splashScreen.style.opacity = "0";
        splashScreen.style.visibility = "hidden";
        navbar.style.visibility = "visible";
        navbar.style.opacity = "1";
    }, 3000);
});


// toggle class active
const navbarNav = document.querySelector
    ('.navbar-nav');
// klik hamburger
document.querySelector('#hamburger').
    onclick = () => {
        navbarNav.classList.toggle('active')
    }



// klik diluar side bar
const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});



// Typing efek
const typed = new Typed('.multiple-text', {
    strings: ['Mahasiswa', 'Junior Web Developer', 'UI/UX Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});


// Ambil semua link navbar
const navLinks = document.querySelectorAll('.navbar-nav a');

// Fungsi untuk mengaktifkan link navbar
function activateLink() {
    let fromTop = window.scrollY;

    // Loop untuk setiap link dan tentukan link mana yang aktif berdasarkan posisi scroll
    navLinks.forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Jalankan fungsi `activateLink` saat user scroll
window.addEventListener('scroll', activateLink);

// Fungsi agar link aktif langsung setelah diklik (tanpa scroll)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active')); 
        link.classList.add('active');
    });
});



// Ambil elemen gambar dan tombol code
const landingImage = document.getElementById('landingImage');
const codeButton = document.querySelector('.cta1');

// Gambar asli dan gambar baru
const originalImageSrc = 'img/landing-1.png';
const newImageSrc = 'img/landing-2.png';

function changeImageWithFade(newSrc) {
    landingImage.classList.add('fade-out');

    setTimeout(() => {
        landingImage.src = newSrc;
        landingImage.classList.remove('fade-out'); 

        landingImage.classList.add('fade-in');

        setTimeout(() => {
            landingImage.classList.remove('fade-in');
        }, 150); 
    }, 150);
}

// Ubah gambar saat tombol Code di-hover
codeButton.addEventListener('mouseover', () => {
    changeImageWithFade(newImageSrc);
});

// Kembalikan ke gambar asli saat kursor keluar dari tombol Code
codeButton.addEventListener('mouseout', () => {
    changeImageWithFade(originalImageSrc);
});



function revealSkills() {
    var skillsBoxes = document.querySelectorAll('.skills-box');
    var windowHeight = window.innerHeight;

    skillsBoxes.forEach(function (box) {
        var boxTop = box.getBoundingClientRect().top;

        if (boxTop < windowHeight * 0.8) {
            box.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealSkills);

window.addEventListener('load', revealSkills);


function revealSkills() {
    var skillsBoxes = document.querySelectorAll('.skills-box');
    var windowHeight = window.innerHeight;

    skillsBoxes.forEach(function(box, index) {
        var boxTop = box.getBoundingClientRect().top;

        if (boxTop < windowHeight * 0.8) {
            box.style.transitionDelay = `${index * 0.1}s`;
            box.classList.add('show');
        }
    });
}


