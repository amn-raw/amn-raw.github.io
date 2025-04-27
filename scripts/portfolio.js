document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded");

    // Navbar Toggle
    const navBar = document.getElementById("nav-bar");

    window.toggleNav = function () {
        console.log("Toggling navbar");
        if (navBar) {
            navBar.classList.toggle("active");
        }
    };

    // Highlight Active Navigation Item
    window.highLight = function (sectionId) {
        console.log("Highlighting section:", sectionId);

        // Remove 'selected' class from all links
        document.querySelectorAll(".nav-items .item a").forEach(item => item.classList.remove("selected"));

        // Select the correct nav item
        const link = document.querySelector(`.nav-items .item a[href="#${sectionId}"]`);
        if (link) {
            link.classList.add("selected");
        } else {
            console.error(`No navigation link found for section: ${sectionId}`);
        }
    };

    window.toggleDetails = function (id) {
        console.log(`Toggling details for: ${id}`);
        const details = document.getElementById(id);
    
        if (!details) {
            console.error(`❌ Element with ID ${id} not found!`);
            return;
        }
    
        details.classList.toggle("hide");
    
        if (details.classList.contains("hide")) {
            console.log(`✅ ${id} is now HIDDEN.`);
        } else {
            console.log(`❌ ${id} is now Visibile.`);
        }
    };


    // Modal for Resources
    window.openModal = function () {
        console.log("Opening modal");
        const modal = document.getElementById("resource-modal");
        if (modal) modal.style.display = "block";
    };

    window.closeModal = function () {
        console.log("Closing modal");
        const modal = document.getElementById("resource-modal");
        if (modal) modal.style.display = "none";
    };
});
