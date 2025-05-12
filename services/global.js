function toggleMenu() {
    const navLinks = document.querySelector('#nav');
    navLinks.classList.toggle('open');
  }
  

 

window.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop();
  
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  

  window.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.getElementsByClassName("nav-links")[0].getElementsByTagName("a");
    const currentPage = window.location.pathname.split("/").pop();
  
    for (let i = 0; i < navLinks.length; i++) {
      const link = navLinks[i];
      const linkPage = link.getAttribute("href");
  
      if (linkPage === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
  