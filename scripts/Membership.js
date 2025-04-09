document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("membership-form");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Basic validation with HTML5 attributes (e.g., required, pattern, etc.)
        if (form.checkValidity()) {
            confirmation.style.display = "block";
            confirmation.textContent = "🎉 Thank you for joining us! 🎉";

            // Optionally clear form after submission
            form.reset();

            // Hide confirmation after 5 seconds (similar to Teams emoji feedback)
            setTimeout(() => {
                confirmation.style.display = "none";
            }, 5000);
        } else {
            // If form is invalid, display a simple alert (or handle accordingly)
            alert("Please fill in all fields correctly.");
        }
    });
});
