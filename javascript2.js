document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the "NO" button
    document.getElementById("noButton").addEventListener("click", function() {
        // Check if the text box is already visible
        const textBox = document.getElementById("textBox");
        if (textBox.style.display === "block") {
            // If visible, hide the text box
            textBox.style.display = "none";
        } else {
            // If hidden, show the text box
            textBox.style.display = "block";
            // Hide the text box after 3 seconds
            setTimeout(function() {
                textBox.style.display = "none";
            }, 3000);
        }
    });
});
// JavaScript
document.getElementById("yesButton").addEventListener("click", function() {
    // Redirect to index3.html
    window.location.href = "third.html";
});
