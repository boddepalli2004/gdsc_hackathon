document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('register');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        // Send the login information to your backend for authentication
        // You might want to use Fetch API or another method for this

        // For demonstration purposes, let's assume a successful login
        alert("Login Successful!\nUsername: ${username}");
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userType = document.querySelector('input[name="usertype"]:checked').value;
        const name = registerForm.querySelector('input[placeholder="Name"]').value;
        const username = registerForm.querySelector('input[placeholder="Username"]').value;
        const age = registerForm.querySelector('input[placeholder="Age"]').value;
        const phoneNumber = registerForm.querySelector('input[placeholder="Phone Number"]').value;
        const email = registerForm.querySelector('input[placeholder="Email Id"]').value;
        const address = registerForm.querySelector('input[placeholder="Address"]').value;

        // Send the registration information to your backend for storage
        // You might want to use Fetch API or another method for this

        // For demonstration purposes, let's assume a successful registration
        alert("Registration Successful!\nUser Type: ${userType}\nName: ${name}\nUsername: ${username}\nAge: ${age}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nAddress: ${address}");
    });
});