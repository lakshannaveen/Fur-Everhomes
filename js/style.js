//js code
document.addEventListener("DOMContentLoaded", function ()
 {
 
  const hasVisited = localStorage.getItem("hasvisited");

  
  if (!hasVisited) {
      alert("Welcome to Jay Tours!"); 
      
      localStorage.setItem("hasvisited", "true");
  }
  
});
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const currentUrl = window.location.href;

    links.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
// jQuery code here
$(document).ready(function() {
    $('form').on('submit', function(event) {
      event.preventDefault();
      let isValid = true;
      $('input[required]').each(function() {
          if ($(this).val() === '') {
              isValid = false;
              $(this).addClass('is-invalid');
          } else {
              $(this).removeClass('is-invalid');
          }
      });
  
      if (isValid) {
          alert('Form submitted successfully!');
          $(this).trigger("reset"); 
      } else {
          alert('Please fill in all required fields.');
      }
  });
  
});