let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#password-confirm");
let container = document.querySelector(".pwd-confirm");
let warning = document.querySelector(".warning");

function validatePassword(password, passwordConfirm) {
    warning.textContent = (password.value === passwordConfirm.value) ? "" : "Passwords do not match";
}

passwordConfirm.addEventListener("input", () => {
    validatePassword(password, passwordConfirm);
});