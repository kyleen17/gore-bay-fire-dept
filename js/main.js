const backgrounds = [
  'images/bg1.jpg',
  'images/bg2.jpg',
  'images/bg3.jpg',
  'images/bg4.jpg'
];

const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
document.body.style.backgroundImage = `url('${randomBg}')`;


 const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });