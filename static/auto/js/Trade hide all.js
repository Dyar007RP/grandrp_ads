document.addEventListener("DOMContentLoaded", function () {
    const tradeToggle = document.getElementById("trade-mode-toggle");

    const elementsToToggle = [
        // Configuration
        ".configuration-title-second-container",
        ".modern-toggle-group",

        // Visual Upgrade
        ".visual_upgrade_text_container_second",
        ".visual-upgrade-switch-second",

        // Insurance
        ".insurance-text-container-second",
        ".insurance-switch-second",

        // Tuning Parts
        ".tuning-parts-text-container-second",
        ".tuning-parts-switch-second",

        // Turbo Kit
        ".turbo-kit-text-container-second",
        ".turbo-kit-switch-second",

        // Drift Kit
        ".drift-kit-text-container_second",
        ".drift-kit-switch-second",

        // Second Vehicle Input
        ".looking-search-input-container"
    ];

    function updateVisibility() {
        const isTradeEnabled = tradeToggle.checked;

        elementsToToggle.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.display = isTradeEnabled ? "" : "none";
            }
        });
    }

    // Initial state update
    updateVisibility();

    // Add listener for change
    tradeToggle.addEventListener("change", updateVisibility);
});
