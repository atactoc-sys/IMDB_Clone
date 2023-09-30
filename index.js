// JavaScript code for your navigation menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleMegaMenu = document.getElementById("toggleMegaMenu");
  const megaMenu = document.getElementById("megaMenu");
  const footerLinks = document.querySelectorAll(".footer-links ul li a");
  
  toggleMegaMenu.addEventListener("click", function () {
    megaMenu.classList.toggle("show");
  });
  
  // Close mega menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!event.target.matches("#toggleMegaMenu") && !event.target.matches("#megaMenu")) {
      megaMenu.classList.remove("show");
    }
  });
  
  footerLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      
      // Example: Log the clicked link's text to the console
      console.log(`Clicked link: ${link.textContent}`);
    });
  });
});

// JavaScript code for your search functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");
  const searchBox = document.getElementById("movie-search-box");
  const searchList = document.getElementById("search-list");
  
  searchButton.addEventListener("click", function () {
    const searchTerm = searchBox.value;
    // You can perform search-related actions here, e.g., make an AJAX request and display results in searchList.
    // For now, let's just display the search term.
    searchList.innerHTML = `You searched for: ${searchTerm}`;
  });
});
