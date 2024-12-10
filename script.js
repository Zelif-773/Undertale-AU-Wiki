document.addEventListener("DOMContentLoaded", function() {
    var accordions = document.querySelectorAll(".accordion-button");

    accordions.forEach(function(accordion) {
        accordion.addEventListener("click", function() {
            var content = accordion.nextElementSibling;
            
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
