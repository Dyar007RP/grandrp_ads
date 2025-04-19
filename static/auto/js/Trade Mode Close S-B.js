document.addEventListener("DOMContentLoaded", () => {
    const tradeModeToggle = document.getElementById("trade-mode-toggle");
    const sellingBuyingBox = document.getElementById("switchBox"); // or your toggle's container

    if (tradeModeToggle && sellingBuyingBox) {
        tradeModeToggle.addEventListener("change", () => {
            if (tradeModeToggle.checked) {
                // Disable the Selling button
                sellingBuyingBox.style.pointerEvents = "none"; // Prevent clicks
                sellingBuyingBox.style.opacity = "0.5"; // Optional: visually show it's disabled
                sellingBuyingBox.style.cursor = "not-allowed"; // Optional: change cursor to not-allowed
            } else {
                // Enable the Selling button
                sellingBuyingBox.style.pointerEvents = "auto"; // Allow clicks again
                sellingBuyingBox.style.opacity = "1"; // Restore normal opacity
                sellingBuyingBox.style.cursor = "pointer"; // Restore cursor
            }
        });
    }
});
