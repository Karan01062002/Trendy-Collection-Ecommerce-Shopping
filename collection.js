// Assuming this script is in collection.js

// Wait for the DOM content to load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    var productContainer = document.getElementById("products");
    var search = document.getElementById("search");
    var productlist = productContainer.querySelectorAll(".product-item"); // Corrected selector

    search.addEventListener("keyup", function(event) {
        var enteredValue = event.target.value.toUpperCase();

        for (var i = 0; i < productlist.length; i++) {
            var productname = productlist[i].querySelector("p").textContent.toUpperCase();

            if (productname.indexOf(enteredValue) > -1) {
                productlist[i].style.display = "block";
            } else {
                productlist[i].style.display = "none";
            }
        }
    });
});
