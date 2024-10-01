'use strict'


const botao = document.querySelector('.btn-social-links');
const behance = document.querySelector('#link-behance');
const linkedin = document.querySelector('#link-linkedin');
const dribble = document.querySelector('#link-dribble');
const medium = document.querySelector('#link-medium');

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile")
  const iconBehance = document.querySelector('#behance')
  const iconGitHub = document.querySelector('#github')
  const iconLinkedin = document.querySelector('#linkedin')
  const iconDribble = document.querySelector('#dribble')
  const buttonX = document.querySelector('#button-x')
  const themeimg = document.querySelector('.switch-button');

  if (html.classList.contains("light")) {

    img.setAttribute('src', './src/assets/foto-perfil-light-mode.png')
    iconBehance.setAttribute('src', './src/assets/behance-icon-black.png')
    iconGitHub.setAttribute('src', './src/assets/medium-icon-black.png')
    iconLinkedin.setAttribute('src', './src/assets/linkedin-icon-black.png')
    iconDribble.setAttribute('src', './src/assets/dribbble-icon-black.png')
    buttonX.setAttribute('src', './src/assets/button-x-black.svg')
    themeimg.setAttribute('src', './src/assets/sun.svg')
    behance.addEventListener('mouseout', () => {
      behance.innerHTML = `
      <img src="./src/assets/behance-icon-black.png" alt="Ícone Behance" id="behance" class="img-behance" />
      `
    });
    dribble.addEventListener('mouseout', () => {
      dribble.innerHTML = `
          <img src="./src/assets/dribbble-icon-black.png" alt="Ícone Dribble" id="dribble" class="img-button" />

      `
    });
    linkedin.addEventListener('mouseout', () => {
      linkedin.innerHTML = `
       <img src="./src/assets/linkedin-icon-black.png" alt="Ícone Linkedin" id="linkedin"  class="img-button" />
      `
    });
    medium.addEventListener('mouseout', () => {
      medium.innerHTML = `
       <img src="./src/assets/medium-icon-black.png" alt="Ícone Github" id="github" />
      `
    });
  } else {
    img.setAttribute('src', './src/assets/foto-perfil.png')
    iconBehance.setAttribute('src', './src/assets/behance-icon.png')
    iconGitHub.setAttribute('src', './src/assets/medium-icon.png')
    iconLinkedin.setAttribute('src', './src/assets/linkedin-icon.png')
    iconDribble.setAttribute('src', './src/assets/dribbble-icon.png')
    buttonX.setAttribute('src', './src/assets/button-x.svg')
    themeimg.setAttribute('src', './src/assets/MoonStars.svg')

    behance.addEventListener('mouseout', () => {
      behance.innerHTML = `
      <img src="./src/assets/behance-icon.png" alt="Ícone Behance" id="behance" class="img-behance img-button" />
      `
    });
    dribble.addEventListener('mouseout', () => {
      dribble.innerHTML = `
          <img src="./src/assets/dribbble-icon.png" alt="Ícone Dribble" id="dribble" class="img-button" />

      `
    });
    linkedin.addEventListener('mouseout', () => {
      linkedin.innerHTML = `
       <img src="./src/assets/linkedin-icon.png" alt="Ícone Linkedin" id="linkedin" class="img-button"/>
      `
    });
    medium.addEventListener('mouseout', () => {
      medium.innerHTML = `
       <img src="./src/assets/medium-icon.png" alt="Ícone Medium" id="github" />
      `
    });
  }
}


botao.addEventListener('click', function () {
  botao.classList.add('ativo');

  setTimeout(function () {
    botao.classList.remove('ativo');
  }, 100);
});

behance.addEventListener('mouseover', () => {
  behance.innerHTML = `
  <img src="./src/assets/behance-icon.png" alt="Ícone Behance" id="behance" class="img-behance" />
  `
});
dribble.addEventListener('mouseover', () => {
  dribble.innerHTML = `
    <img src="./src/assets/dribbble-icon.png" alt="Ícone Dribble" id="dribble" class="img-button" />

  `
});
linkedin.addEventListener('mouseover', () => {
  linkedin.innerHTML = `
    <img src="./src/assets/linkedin-icon.png" alt="Ícone Linkedin" id="linkedin"  class="img-button" />

  `
});
medium.addEventListener('mouseover', () => {
  medium.innerHTML = `
   <img src="./src/assets/medium-icon.png" alt="Ícone Github" id="github" />
  `
});
