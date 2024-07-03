// Generic function to validate email
function validateEmail(emailInput, emailField) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        emailField.classList.add("invalid");
        return false;
    }
    emailField.classList.remove("invalid");
    return true;
}

// Generic function to validate password
function validatePassword(passInput, passField) {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passInput.value.match(passPattern)) {
        passField.classList.add("invalid");
        return false;
    }
    passField.classList.remove("invalid");
    return true;
}

// Generic function to confirm password
function confirmPassword(passInput, cPassInput, cPassField) {
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {
        cPassField.classList.add("invalid");
        return false;
    }
    cPassField.classList.remove("invalid");
    return true;
}

// Generic function to handle form submission
function handleFormSubmit(form, emailField, emailInput, passField, passInput, cPassField, cPassInput) {
    const isEmailValid = validateEmail(emailInput, emailField);
    const isPassValid = validatePassword(passInput, passField);
    const isConfirmPassValid = confirmPassword(passInput, cPassInput, cPassField);

    if (isEmailValid && isPassValid && isConfirmPassValid) {
        location.href = form.getAttribute("action");
    }
}

// Function to handle show/hide password
function togglePasswordVisibility(eyeIcon) {
    const pInput = eyeIcon.parentElement.querySelector("input");
    if (pInput.type === "password") {
        eyeIcon.classList.replace("bx-hide", "bx-show");
        pInput.type = "text";
    } else {
        eyeIcon.classList.replace("bx-show", "bx-hide");
        pInput.type = "password";
    }
}

// Password show/hide
const eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => togglePasswordVisibility(eyeIcon));
});