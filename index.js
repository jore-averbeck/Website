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
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

let currentLanguage = 'en'; 
let content;

function loadContent(language) {
  fetch(`content_${language}.json`)
    .then(response => response.json())
    .then(data => {
      content = data;
      updateContent();
    })
    .catch(error => console.error('Error loading content:', error));
}

function updateContent() {
  // About Abschnitt aktualisieren
  document.querySelector('.article-heading').textContent = content.about.heading;
  document.querySelector('.about-article-heading').textContent = content.about.name;
  document.querySelector('.about-article ul').innerHTML = content.about.education.map(item => `<li>${item}</li>`).join('');
  document.querySelector('.about-article-text').textContent = content.about.description;

  // Projekt Abschnitte aktualisieren
  document.querySelector('.project-section h3').textContent = content.projects.heading;
  
  // Projekt 1
  document.querySelector('#text-container1 h5').textContent = content.projects.project1.title;
  document.querySelector('#text-container1 p').textContent = content.projects.project1.description;

  // Projekt 2
  document.querySelector('#text-container2 h5').textContent = content.projects.project2.title;
  document.querySelector('#text-container2 p').textContent = content.projects.project2.description;

  // Projekt 3
  document.querySelector('#text-container3 h5').textContent = content.projects.project3.title;
  document.querySelector('#text-container3 p').textContent = content.projects.project3.description;

  // Kontakt Abschnitt aktualisieren
  document.querySelector('footer.contact h3').textContent = content.contact.heading;
  const contactLinks = content.contact.links;
  document.querySelectorAll('.contact-ul li').forEach((li, index) => {
    li.innerHTML = `<img src="/img/arrow.svg" height="25px" width="20px" class="arrow"> <a href="${Object.values(contactLinks)[index]}" target="_blank" title="Visit ${Object.keys(contactLinks)[index]}">${Object.values(contactLinks)[index]}</a>`;
  });
}

loadContent(currentLanguage);

function switchLanguage(language) {
  currentLanguage = language;
  loadContent(language);
}