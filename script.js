
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change")
})

document.getElementById("readMoreBtn").addEventListener("click", function() {
    var fullText = document.getElementById("fullText");
    var shortText = document.getElementById("shortText");
    
    // Toggle visibility of the full text and the short text
    if (fullText.style.display === "none") {
        fullText.style.display = "block";
        shortText.style.display = "none";
        this.textContent = "Read Less";  // Change button text to "Read Less"
    } else {
        fullText.style.display = "none";
        shortText.style.display = "block";
        this.textContent = "Read More";  // Change button text to "Read More"
    }
});

document.getElementById("readMore").addEventListener("click", function() {
    var fText = document.getElementById("fText");
    var sText = document.getElementById("sText");
    
    // Toggle visibility of the full text and the short text
    if (fText.style.display === "none") {
        fText.style.display = "block";
        sText.style.display = "none";
        this.textContent = "Read Less";  // Change button text to "Read Less"
    } else {
        fText.style.display = "none";
        sText.style.display = "block";
        this.textContent = "Read More";  // Change button text to "Read More"
    }
});
