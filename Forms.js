

// Form Submission Handling
document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Your request has been submitted.");
            window.location.href = "dashboard.html"; // Redirect after submission
        });
    });
});


