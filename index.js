function toggleMenu() {
    const menu = document.getElementById("menuLinks");
    menu.classList.toggle("active");
    const burger = document.querySelector('.burger-menu');
    burger.classList.toggle('active');
  }

  document.addEventListener("DOMContentLoaded", function() {
    const sectionHeading = document.querySelector('.section-heading');
    sectionHeading.classList.add('loaded'); 
  });