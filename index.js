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

function showTextContainer(containerId, imageID) {
  const image = document.getElementById(imageID);
  const textContainer = document.getElementById(containerId);
  textContainer.classList.toggle("show");
  image.classList.add("hide");
}

function hideTextContainer(containerID, imageID){
  const image = document.getElementById(imageID);
  const textContainer = document.getElementById(containerID);
  textContainer.classList.remove("show");
  image.classList.remove("hide");
}

function scrollToTop() {
  // Scrollen nach oben mit der smooth scroll-Funktion
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// JavaScript-Funktion zum Anzeigen/Verstecken des "Scroll to Top"-Buttons
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Überprüfen, ob der Benutzer nach unten gescrollt hat
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Wenn ja, Button anzeigen
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    // Andernfalls, Button ausblenden
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}