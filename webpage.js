function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    var namePattern = /^[a-zA-Z ]+$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";

    if (!name.match(namePattern)) {
        nameError.innerHTML = " * Name must contain only letters and spaces.";
        return false;
    }

    if (!email.match(emailPattern)) {
        emailError.innerHTML =  " * Invalid email address.";
        return false;
    }

    if (password.length < 8) {
        passwordError.innerHTML = " * Password must be at least 8 characters long.";
        return false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.innerHTML = " * Passwords do not match.";
        return false;
    }

    return true;
}