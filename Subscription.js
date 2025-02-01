

// Subscription handling logic
document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var plan = document.getElementById("plan").value;
    alert("Proceeding to payment for " + plan);
    window.location.href = "dashboard.html"; // Mock payment success
});

