var link = document.querySelector(".button-search-hotels");
var popup = document.querySelector(".search-hotels-wrapper");

    link.addEventListener("click", function(event) { 
        event.preventDefault(); 
        popup.classList.toggle("search-hotels-wrapper-show");
    });