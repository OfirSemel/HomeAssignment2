
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
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
  

  // const toggleBtn = document.getElementById('toggle-theme');
  // const icon = document.getElementById('theme-icon');

  // toggleBtn.addEventListener('click', () => {
  //   const body = document.body;

  //   // אם יש dark-mode — נסיר, אחרת נוסיף
  //   body.classList.toggle('dark-mode');

  //   // שינוי האייקון בהתאם למצב
  //   if (body.classList.contains('dark-mode')) {
  //     icon.textContent = '🌙'; // שמש = מצב כהה מופעל
  //   } else {
  //     icon.textContent = '🌞'; // ירח = מצב בהיר
  //   }
  // });