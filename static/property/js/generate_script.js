function generateResult() {
    let result = "";

    // Get the Buying/Selling status from the switch box
    let switchBox = document.getElementById("switchBox");
    let transactionType = switchBox.classList.contains("selling") ? "Selling" : "Buying";

    // Get property type
    let propertyType = document.getElementById("property_type")?.value.trim().toLowerCase() || "";

    // Get property number (first & second)
    let propertyNumber = document.querySelector(".checkbox-number-box-container input")?.value.trim() || "";
    let secondPropertyNumber = document.getElementById("second-property-number-input")?.value.trim() || "";

    // Check if garden toggle is enabled
    let gardenEnabled = document.getElementById("garden-toggle")?.checked || false;

    // Get selected warehouse and garage values
    let warehouseValue = document.getElementById("warehouse-select")?.value || "empty";
    let garageValue = document.getElementById("garage-select")?.value || "empty";

    // Check if additional features are enabled
    let features = [];
    if (document.getElementById("custom-interior-toggle")?.checked) features.push("custom interior");
    if (document.getElementById("insurance-toggle")?.checked) features.push("insurance");
    if (document.getElementById("helipad-toggle")?.checked) features.push("helipad");
    if (document.getElementById("tennis-court-toggle")?.checked) features.push("tennis court");
    if (document.getElementById("long-driveway-toggle")?.checked) features.push("long driveway");
    if (document.getElementById("swimming-pool-toggle")?.checked) features.push("swimming pool");

    // Get view dropdown value
    let viewValue = document.getElementById("view-dropdown")?.value.trim() || "";
    
    // Get location details
    let locationPrefix = document.getElementById("location-prefix")?.value.trim() || "";
    let location = document.getElementById("location")?.value.trim() || "";

    // Get and format price
    let priceInput = document.getElementById("price-box")?.value.trim() || "";
    let formattedPrice = priceInput 
        ? `${transactionType === "Buying" ? "Budget" : "Price"}: $${parseFloat(priceInput)} Million`
        : `${transactionType === "Buying" ? "Budget" : "Price"}: Negotiable`;

    // Constructing the result string
    if (propertyType === "house" || propertyType === "apartment") {
        if (propertyType === "apartment" && !propertyNumber) {
            result = `${transactionType} an apartment`;
        } else if (propertyNumber && secondPropertyNumber) {
            result = `${transactionType} ${propertyType} №${propertyNumber} and №${secondPropertyNumber}`;
        } else if (propertyNumber) {
            result = `${transactionType} ${propertyType} №${propertyNumber}`;
        } else {
            result = `${transactionType} a ${propertyType}`;
        }

 // Additional details
let additionalDetails = [];
if (propertyType === "house" && gardenEnabled) {
    additionalDetails.push(propertyNumber && secondPropertyNumber ? "garden" : "a garden");
}
if (garageValue !== "empty") additionalDetails.push(`${garageValue} g.s.`);
if (warehouseValue !== "empty") additionalDetails.push(`${warehouseValue} w.h.`);
additionalDetails.push(...features);


       // Correctly format additional details
if (additionalDetails.length > 0) {
    if (additionalDetails.length === 1) {
        result += ` with ${additionalDetails[0]}`;
    } else {
        let lastDetail = additionalDetails.pop();
        result += ` with ${additionalDetails.join(", ")} and ${lastDetail}`;
    }
}
        if (viewValue) {
            result += additionalDetails.length > 0 ? ` and ${viewValue}` : ` with ${viewValue}`;
        }
        // Add the location with the location prefix, ensuring it doesn't add extra "in" or any other unwanted prefix
        if (locationPrefix && location) {
            // Only add the location prefix if it's not already part of the location string
            result += ` ${locationPrefix} ${location}`;
        } else if (location) {
            // Add location without prefix if no prefix is selected
            result += ` ${location}`;
        }



        result += `. ${formattedPrice}.`;

        // Prevent double dots
        result = result.replace(/\.\./g, ".");
    }

    // Display the result
    let resultTextElement = document.getElementById("result-text");
    if (resultTextElement) {
        resultTextElement.innerText = result;
    } else {
        console.error("Result text element not found!");
    }
}

// Function to toggle between Buying and Selling
function toggleSwitch() {
    let switchBox = document.getElementById("switchBox");
    if (!switchBox) return;

    if (switchBox.classList.contains("selling")) {
        switchBox.classList.remove("selling");
        switchBox.classList.add("buying");
        switchBox.innerText = "Buying";
    } else {
        switchBox.classList.remove("buying");
        switchBox.classList.add("selling");
        switchBox.innerText = "Selling";
    }
}

// Attach event listener to Generate button
document.addEventListener("DOMContentLoaded", function () {
    let generateButton = document.querySelector(".generate-button");
    if (generateButton) {
        generateButton.addEventListener("click", generateResult);
    }
});
