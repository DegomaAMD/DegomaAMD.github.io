const emailInput = document.getElementById('inputEmail');
const resetEmail = document.getElementById("resetEmail")
const resendEmail = document.getElementById('resendEmail');
const username = document.getElementById('username');

function passResetValue(){
    valueEmailPass = emailInput.value;
    resetEmail.innerHTML = valueEmailPass;
}

function emailResend(){
    alert(`Email sent`);
}

function usernameValue(){
    usernameVal = username.value;
    usernameInput.innerHTML = usernameVal;
}