const emailInput = document.getElementById('inputEmail');
const resetEmail = document.getElementById("resetEmail")
const resendEmail = document.getElementById('resendEmail');
const username = document.getElementById('username');
const mainMenu = document.getElementById('mainMenu');
const espressoPage = document.getElementById('espressopage');

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
function changeMainMenuToEspressoPage(){
    mainMenu.replaceChild(espressoPage, mainMenu.childNodes[0]);

}
function changeEspressoPageToMainMenu(){
    espressoPage.replaceChild(mainMenu, espressoPage.childNodes[0]);

}