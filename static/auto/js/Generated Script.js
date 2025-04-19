function capitalizeParenthesis(text) {
    if (!text) return "";
    return text.replace(/\(([a-zA-Z])/g, (_, letter) => `(${letter.toUpperCase()}`);
}

function generateResult() {
    const resultTextElement = document.getElementById('result-text');

    // ✅ Check tab selection first
    const activeTab = document.querySelector('.tab-button.active');
    if (!activeTab) {
        showCustomAlert("Please select a vehicle type.");
        return;
    }

    const selectedVehicle = activeTab.innerText;

    const configRadio = document.querySelector('input[name="config"]:checked');
    const configuration = configRadio ? configRadio.value : "";

    const tradeToggle = document.getElementById('trade-mode-toggle')?.checked || false;
    const switchBox = document.getElementById('switchBox');
    let switchState = switchBox ? switchBox.textContent.toLowerCase() : 'selling';

    let capitalizedSwitchState = switchState.charAt(0).toUpperCase() + switchState.slice(1).toLowerCase();
    if (capitalizedSwitchState === "Selling" && tradeToggle) {
        capitalizedSwitchState = "Selling or trading";
    }

    // ✅ Add extras for the first car
    const extras = [];
    if (document.getElementById('visual-upgrade-toggle')?.checked) extras.push("visual upgrades");
    if (document.getElementById('insurance-toggle')?.checked) extras.push("insurance");
    if (document.getElementById('tuningPartsToggle')?.checked) extras.push("tuning parts");
    if (document.getElementById('turbo-kit-toggle')?.checked) extras.push("turbo kit");
    if (document.getElementById('driftKitToggle')?.checked) extras.push("drift kit");

    const extrasText = extras.length > 0
        ? " with " + extras.join(", ").replace(/, ([^,]*)$/, " and $1")
        : "";

    // ✅ Handle price input
    const priceInput = document.getElementById("price-box")?.value.trim() || "";
    const formattedPrice = priceInput
        ? `${capitalizedSwitchState === "Buying" ? "Budget" : "Price"}: $${parseFloat(priceInput)} Million`
        : `${capitalizedSwitchState === "Buying" ? "Budget" : "Price"}: Negotiable`;

    const configurationText = configuration ? ` in ${configuration} configuration` : "";

    // ✅ Primary and secondary car names
   const carNameRaw = document.querySelector('#results li.selected')?.innerText.trim()
    || document.getElementById('search')?.value.trim();
const carName = capitalizeParenthesis(carNameRaw);

const secondCarRaw = document.getElementById('looking-search')?.value.trim() || '';
const secondCarName = capitalizeParenthesis(secondCarRaw);

    // ✅ Secondary car configuration
    const secondCarConfigRadio = document.querySelector('input[name="config-2"]:checked');
    const secondCarConfiguration = secondCarConfigRadio ? secondCarConfigRadio.value : "";

    // ✅ Add extras for the second car
    const secondCarExtras = [];
    if (document.getElementById('visual-upgrade-toggle-second')?.checked) secondCarExtras.push("visual upgrades");
    if (document.getElementById('insurance-toggle-second')?.checked) secondCarExtras.push("insurance");
    if (document.getElementById('tuningPartsToggleSecond')?.checked) secondCarExtras.push("tuning parts");
    if (document.getElementById('turbo-kit-toggle-second')?.checked) secondCarExtras.push("turbo kit");
    if (document.getElementById('drift-kit-toggle-second')?.checked) secondCarExtras.push("drift kit");

    const secondCarExtrasText = secondCarExtras.length > 0
        ? " with " + secondCarExtras.join(", ").replace(/, ([^,]*)$/, " and $1")
        : "";

    // ✅ Trade Mode logic
    if (tradeToggle && carName && secondCarName) {
        const secondCarConfigText = secondCarConfiguration ? ` in ${secondCarConfiguration} configuration` : "";
        const secondCarExtrasTextTrade = secondCarExtras.length > 0 
            ? " with " + secondCarExtras.join(", ").replace(/, ([^,]*)$/, " and $1")
            : "";

        resultTextElement.textContent = `Trading "${carName}"${configurationText}${extrasText} for "${secondCarName}"${secondCarConfigText}${secondCarExtrasTextTrade}.`;
        return;
    }

    // ✅ Default result if no trade
    const resultText = carName
        ? `${capitalizedSwitchState} "${carName}"${configurationText}${extrasText}. ${formattedPrice}.`
        : `${capitalizedSwitchState} ${selectedVehicle.toLowerCase()}${configurationText}${extrasText}. ${formattedPrice}.`;

    resultTextElement.textContent = resultText;
}
