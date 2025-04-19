// This script disables the garden toggle if apartment is selected 
document.addEventListener("DOMContentLoaded", function () {
    // Get the property type dropdown
    const propertyTypeDropdown = document.getElementById("property_type");

    // Get the garden toggle checkbox
    const gardenToggle = document.getElementById("garden-toggle");

    // Function to disable garden if property type is apartment
    function handlePropertyTypeChange() {
        const propertyType = propertyTypeDropdown.value.trim().toLowerCase();

        if (propertyType === "apartment") {
            gardenToggle.disabled = true;  // Disable the garden toggle
            gardenToggle.checked = false;  // Uncheck the garden toggle
        } else {
            gardenToggle.disabled = false;  // Enable the garden toggle
        }
    }

    // Listen for changes in the property type dropdown
    propertyTypeDropdown.addEventListener("change", handlePropertyTypeChange);

    // Initialize on page load
    handlePropertyTypeChange();
});
