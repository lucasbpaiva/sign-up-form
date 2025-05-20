let pwd = document.querySelector("#password");
let pwdConfirm = document.querySelector("#password-confirm");
let container = document.querySelector(".pwd-confirm");
let warning = document.querySelector(".warning");
let submitBtn = document.querySelector(".submitBtn");

function passwordsMatch(password, passwordConfirm) {
    return password.value === passwordConfirm.value;
}

pwdConfirm.addEventListener("input", () => {
    warning.textContent = (passwordsMatch(pwd, pwdConfirm)) ? "" : "Passwords do not match";
});

submitBtn.addEventListener("click",(event) => {
    if (!passwordsMatch(pwd, pwdConfirm)) {
        event.preventDefault();   
    }
});