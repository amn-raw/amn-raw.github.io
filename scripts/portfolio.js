document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const frame = document.getElementById("frame");
    const navBar = document.getElementById("nav-bar");
    const footer = document.querySelector("footer");
    
    // Check if dark mode is already set in local storage
    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark-mode");
        frame.classList.add("dark-mode");
        navBar.classList.add("dark-mode");
        footer.classList.add("dark-mode");
    }

    // Toggle dark mode when the button is clicked
    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        frame.classList.toggle("dark-mode");
        navBar.classList.toggle("dark-mode");
        footer.classList.toggle("dark-mode");
        
        // Save the user's preference in local storage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "true");
        } else {
            localStorage.setItem("dark-mode", "false");
        }
    });
});
