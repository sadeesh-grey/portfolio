/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v2.0.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */
!function (n) { "use strict"; n((function () { })), n(window).on("load", (function () { })) }(jQuery);

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form data
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    // Set up the form data for submission
    const formData = new FormData();
    formData.append('access_key', '924e2301-3f75-4989-bf07-d7b2fea428e8');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Send the form data via Fetch API
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Check for a successful response
            if (data.success) {
                // Show success message
                document.getElementById('contact-feedback').textContent = "Your message has been sent successfully!";
                document.getElementById('contact-feedback').style.color = "green";

                // Clear the form
                document.getElementById('contact-form').reset();
            } else {
                // Show error message
                document.getElementById('contact-feedback').textContent = "Oops! Something went wrong. Please try again.";
                document.getElementById('contact-feedback').style.color = "red";
            }
        })
        .catch(error => {
            // Handle network errors
            document.getElementById('contact-feedback').textContent = "Error sending the message. Please try again.";
            document.getElementById('contact-feedback').style.color = "red";
        });
}


document.addEventListener("DOMContentLoaded", function () {
    // Set your birthdate (YYYY, MM - 1 (since months are 0-based), DD)
    const birthDate = new Date(2002, 1, 22); // Example: July 15, 2000
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // If the birthday hasn't occurred yet this year, subtract 1
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Update the age in the HTML
    document.getElementById("age").textContent = age;
});