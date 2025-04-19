function showCustomAlert() {
    const alertBox = document.getElementById('custom-alert');
    const topText = document.getElementById('custom-alert-top');
    const bottomText = document.getElementById('custom-alert-bottom');

    // Set the alert messages in two languages
    topText.textContent = "Please select a vehicle type.";
    bottomText.textContent = "تکایە جۆری ئامێرەکەت هەڵبژێرە";

    // Show the alert box
    alertBox.classList.remove('hidden');
    alertBox.classList.add('show');

    // Play sound
    const audio = new Audio('/static/auto/sounds/nina bb.mp3');
    audio.play().catch(() => {
        audio.src = '/static/auto/sounds/soft-alert-81627.wav';
        audio.play().catch(err => console.error("Alert sound error:", err));
    });

    // Hide after 3 seconds
    setTimeout(() => {
        alertBox.classList.remove('show');
        alertBox.classList.add('hidden');
    }, 3000);
}
