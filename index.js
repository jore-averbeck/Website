function toggleMenu() {
    const menu = document.getElementById("menuLinks");
    menu.classList.toggle("active");
    const burger = document.querySelector('.burger-menu');
    burger.classList.toggle('active');
  }