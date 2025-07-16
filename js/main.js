const backgrounds = [
  'Images/bg1.jpg',
  'Images/bg2.jpg',
  'Images/bg3.jpg',
  'Images/bg4.jpg'
];

const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
document.body.style.backgroundImage = `url('${randomBg}')`;


 const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });