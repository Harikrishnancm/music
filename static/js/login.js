// Get the password input fields
var logpass = document.getElementById("p3");
 

// Get the Show Password button
var showPasswordButton = document.getElementById("show_passwd");

// Add click event listener to the Show Password button
showPasswordButton.addEventListener("click", function(event) {
    // Toggle the type attribute of the password input fields
    event.preventDefault()
    if (logpass.type === "password") {
        // Show password
        logpass.type = "text";
        showPasswordButton.textContent = "Hide Password";

    } else {
        // Hide password
        logpass.type = "password";
        showPasswordButton.textContent = "Show Password";
    }
});
