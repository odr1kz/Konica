// Select the subMenu element
const subMenu = document.getElementById("subMenu");

// Function to toggle the menu's visibility
function toggleMenu() {
    // Check if subMenu exists before toggling the class
    if (subMenu) {
        subMenu.classList.toggle("open-menu");
    } else {
        console.error("Element with ID 'subMenu' not found.");
    }
}
