// Sign-up form
const formSignUp = document.querySelector(".sign-up-form"),
    emailFieldSignUp = formSignUp.querySelector(".email-field"),
    emailInputSignUp = emailFieldSignUp.querySelector(".email"),
    passFieldSignUp = formSignUp.querySelector(".create-password"),
    passInputSignUp = passFieldSignUp.querySelector(".password"),
    cPassFieldSignUp = formSignUp.querySelector(".confirm-password"),
    cPassInputSignUp = cPassFieldSignUp.querySelector(".cPassword");

formSignUp.addEventListener("submit", (e) => {
    e.preventDefault();
    handleFormSubmit(formSignUp, emailFieldSignUp, emailInputSignUp, passFieldSignUp, passInputSignUp, cPassFieldSignUp, cPassInputSignUp);
});

emailInputSignUp.addEventListener("keyup", () => validateEmail(emailInputSignUp, emailFieldSignUp));
passInputSignUp.addEventListener("keyup", () => validatePassword(passInputSignUp, passFieldSignUp));
cPassInputSignUp.addEventListener("keyup", () => confirmPassword(passInputSignUp, cPassInputSignUp, cPassFieldSignUp));
