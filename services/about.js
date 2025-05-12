// var  tablinks = document.getElementsByClassName("tab-links");
//  var tabcontents = document.getElementsByClassName("tab-contents");

//  function opentab(tabName) {
//     for (let tablink of tablinks) {
//         tablink.classList.remove("active-link")
//     }
//     for (let tabcontent of tabcontents) {
//         tabcontent.classList.remove("active-tab")
//     }
//  }


function opentab(tabName) {
    const tablinks = document.querySelectorAll(".tab-links");
    const tabcontents = document.querySelectorAll(".tab-content");
  
    // הסרת העיצוב הפעיל מכל הכפתורים והתכנים
    tablinks.forEach(link => link.classList.remove("active-link"));
    tabcontents.forEach(content => content.classList.remove("active-tab"));
  
    // הפעלת הכפתור שנלחץ והתוכן המתאים
    document.querySelector(`#${tabName}`).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
  }
  