// Function to handle tab activation
function activateTab(button) {
    // Remove 'active' class from all tabs
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Add 'active' class to the clicked tab
    button.classList.add('active');
}
