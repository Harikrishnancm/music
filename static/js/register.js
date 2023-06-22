// Get the password input fields
var passwordInput = document.getElementById("p1");
var confirmPasswordInput = document.getElementById("p2");
 

// Get the Show Password button
var showPasswordButton = document.getElementById("show_pass");

// Add click event listener to the Show Password button
showPasswordButton.addEventListener("click", function(event) {
    // Toggle the type attribute of the password input fields
    event.preventDefault()
    if (passwordInput.type === "password") {
        // Show password
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
        showPasswordButton.textContent = "Hide Password";

    } else {
        // Hide password
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
        showPasswordButton.textContent = "Show Password";
    }
});


// function show(){
//     // event.preventDefault()
//     let a = document.getElementById('p1');
//     let b = document.getElementById('p2')
//     if (a.type=='text'){
//         a.type='password'
//         b.type='password'
//     }else{
//         a.type='text'
//         b.type='text'
//     }
// }