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

