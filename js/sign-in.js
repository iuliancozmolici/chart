// Sign-in form
const formSignIn = document.querySelector(".sign-in-form"),
    emailFieldSignIn = formSignIn.querySelector(".email-field"),
    emailInputSignIn = emailFieldSignIn.querySelector(".email"),
    passFieldSignIn = formSignIn.querySelector(".create-password"),
    passInputSignIn = passFieldSignIn.querySelector(".password"),
    cPassFieldSignIn = formSignIn.querySelector(".confirm-password"),
    cPassInputSignIn = cPassFieldSignIn.querySelector(".cPassword");

formSignIn.addEventListener("submit", (e) => {
    e.preventDefault();
    handleFormSubmit(formSignIn, emailFieldSignIn, emailInputSignIn, passFieldSignIn, passInputSignIn, cPassFieldSignIn, cPassInputSignIn);
});

emailInputSignIn.addEventListener("keyup", () => validateEmail(emailInputSignIn, emailFieldSignIn));
passInputSignIn.addEventListener("keyup", () => validatePassword(passInputSignIn, passFieldSignIn));
cPassInputSignIn.addEventListener("keyup", () => confirmPassword(passInputSignIn, cPassInputSignIn, cPassFieldSignIn));
