// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("checkoutForm");
    const cardInput = document.getElementById("card");
    const holderInput = document.getElementById("holder");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const cvcInput = document.getElementById("securityCode");

    form.addEventListener("submit", function(event) {
        // Trim values to avoid spaces
        const cardValue = cardInput.value.trim();
        const holderValue = holderInput.value.trim();
        const monthValue = monthInput.value.trim();
        const yearValue = yearInput.value.trim();
        const cvcValue = cvcInput.value.trim();

        // Check if any field is empty
        if (!cardValue || !holderValue || !monthValue || !yearValue || !cvcValue) {
            alert("Please fill out all fields.");
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Check if card number matches the required number
        if (cardValue !== "123412341234") {
            alert("Card number must be 123412341234.");
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Optional: further validation can go here (like checking month/year/cvc format)
    });
});