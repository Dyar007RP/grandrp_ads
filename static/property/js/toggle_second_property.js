// Toggle second property input based on selection 
document.addEventListener("DOMContentLoaded", function () {
    let numOfProperties = document.getElementById("property");
    let secondPropertyInput = document.getElementById("second-property-number-input");

    function toggleSecondPropertyInput() {
        if (numOfProperties.value.trim() === "2") {
            secondPropertyInput.disabled = false;  // Unlock
        } else {
            secondPropertyInput.disabled = true;   // Lock and clear value
            secondPropertyInput.value = "";
        }
    }

    toggleSecondPropertyInput();
    numOfProperties.addEventListener("change", toggleSecondPropertyInput);
});
