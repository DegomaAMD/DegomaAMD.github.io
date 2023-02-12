const emailInput = document.getElementById('inputEmail');
const resetEmail = document.getElementById("resetEmail")
const resendEmail = document.getElementById('resendEmail');
const username = document.getElementById('username');
const mainMenu = document.getElementById('mainMenu');
const espressoPage = document.getElementById('espressopage');
const nonCoffeePage = document.getElementById('nonCoffee');
const frappeNonCoffee = document.getElementById('frappeNonCoffee');
const frappeCoffee = document.getElementById('frappeCoffee');
const refresherDrinks = document.getElementById('refresherDrinks');

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

// Espresso Menu
function changeMainMenuToEspressoPage(){
    espressoPage.setAttribute ('class', 'col-8 ms-3');
    mainMenu.replaceWith(espressoPage, mainMenu);
}
function changeEspressoPageToMainMenu(){
    espressoPage.replaceWith(mainMenu, espressoPage);   
}
// Non-Coffee Menu
function changeMainMenuTononCoffeePage(){
    nonCoffeePage.setAttribute ('class', 'col-8 ms-3');
    mainMenu.replaceWith(nonCoffeePage, mainMenu);
}
function changenonCoffeePageToMainMenu(){
    nonCoffeePage.replaceWith(mainMenu, nonCoffeePage);

}
// Frappe Non-Coffee Menu
function changeMainMenuTofrappeNonCoffee(){
    frappeNonCoffee.setAttribute ('class', 'col-8 ms-3');
    mainMenu.replaceWith(frappeNonCoffee, mainMenu);
}
function changefrappeNonCoffeeToMainMenu(){
    frappeNonCoffee.replaceWith(mainMenu, frappeNonCoffee);

}
// Frappe Coffee Menu
function changeMainMenuTofrappeCoffee(){
    frappeCoffee.setAttribute ('class', 'col-8 ms-3');
    mainMenu.replaceWith(frappeCoffee, mainMenu);
}
function changefrappeCoffeeToMainMenu(){
    frappeCoffee.replaceWith(mainMenu, frappeCoffee);

}
// Refresher
function changeMainMenuTorefresher(){
    refresherDrinks.setAttribute('class', 'col-8 ms-3');
    mainMenu.replaceWith(refresherDrinks, mainMenu);
}
function changerefresherToMainMenu(){
    refresherDrinks.replaceWith(mainMenu, refresherDrinks);   
}