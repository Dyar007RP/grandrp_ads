// Function to copy the final result to clipboard
function copyResult() {
    // Get the text from the result box (from the p tag with id 'result-text')
    let resultText = document.getElementById("result-text").innerText;  

    if (resultText.trim() !== "") {
        // Copy the result text to the clipboard
        navigator.clipboard.writeText(resultText).then(() => {
            // Show a notification when text is successfully copied
            showNotification("Result copied!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    } else {
        // Show a notification if there's no result to copy
        showNotification("No result to copy!");
    }
}

// Function to show notification
function showNotification(message) {
    let notification = document.createElement("div");
    notification.className = "copy-notification";
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add("show");
    }, 10);

    setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}

// Attach event listener to Copy button
document.addEventListener("DOMContentLoaded", function () {
    let copyButton = document.querySelector(".copy-button");
    if (copyButton) {
        copyButton.addEventListener("click", copyResult);  // Call the copyResult function when clicked
    }
});
