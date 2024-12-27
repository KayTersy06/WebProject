// script.js

document.getElementsByName('contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;

    // Display a response message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.classList.add('visible'); // Add visible class
    responseMessage.innerHTML = `Thank you, ${name}! Your appointment request for ${date} has been received. We will contact you at ${email}.`;

    // Clear the form
    document.getElementsByName('contact').reset();

    // Submit the form to Netlify
    this.submit(); // This will submit the form to Netlify
});

// Example function to show an alert when the page loads
window.onload = function() {
    console.log("Welcome to Dr. John Doe's website!");
};