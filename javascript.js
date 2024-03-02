document.getElementById("transitionButton").addEventListener("click", function() {
    document.body.style.opacity = 0;
    setTimeout(function() {
        window.location.href = "second.html"; // Navigate to index2.html after a short delay
    }, 500); // Adjust the delay to match the duration of the transition
});
