// JavaScript for locking property number checkbox when in buying mode 
document.addEventListener("DOMContentLoaded", function () {
    let switchBox = document.getElementById("switchBox");
    let propertyNumberInput = document.querySelector(".checkbox-number-box-container input");

    function togglePropertyLock() {
        if (switchBox.classList.contains("buying")) {
            propertyNumberInput.disabled = true; // Lock the input in buying mode
            propertyNumberInput.value = ""; // Clear input when locked
        } else {
            propertyNumberInput.disabled = false; // Unlock the input in selling mode
        }
    }

    // Initial check on page load
    togglePropertyLock();

    // Listen for changes in transaction type
    switchBox.addEventListener("click", function () {
        togglePropertyLock();
    });
});
