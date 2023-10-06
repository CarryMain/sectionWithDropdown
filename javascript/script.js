document.addEventListener("DOMContentLoaded", () => {

const features = document.querySelector('.features'),
      dropdownMenu = document.querySelector('.drop-menu-feature'),
      dropPositionMenu = document.querySelector('.dropdrop'),
      company = document.querySelector('.company');

features.addEventListener('click', () => {
     dropdownMenu.classList.toggle('open');
})

company.addEventListener('click', () => {
    if (dropPositionMenu.style.display === 'block') {
        dropPositionMenu.style.display = 'none';
    } else {
        dropPositionMenu.style.display = 'block';
    }
});


});