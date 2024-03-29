const emailInput = document.querySelector('#inputEmail');
const resetEmail = document.querySelector("#resetEmail")
const resendEmail = document.querySelector('#resendEmail');
const username = document.querySelector('#username');
const loginBtn = document.querySelector('.login-btn');
const homeLogin = document.querySelector('#homeLogin');
const mainMenu = document.querySelector('#mainMenu');
const espressoPage = document.querySelector('#espressopage');
const nonCoffeePage = document.querySelector('#nonCoffee');
const frappeNonCoffee = document.querySelector('#frappeNonCoffee');
const frappeCoffee = document.querySelector('#frappeCoffee');
const refresherDrinks = document.querySelector('#refresherDrinks');
const silogPage = document.querySelector('#silogPage');
const addOnsPage = document.querySelector('#addOnsPage');
const eggdropPage = document.querySelector('#eggdropPage');
const pastriesPage = document.querySelector('#pastriesPage');

// function userLogin(){
//     if (username.value == `andriamae1019`){
//         homeLogin.setAttribute = ('href','./userlogin/home.html');
//     } else {
//         alert('Wrong username or password. Please check and try again.');
//         homeLogin.setAttribute = ('href','./login.html');
//     }
// }

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
    espressoPage.style.display = 'block';
    mainMenu.style.display = 'none';
    mainMenu.replaceWith(espressoPage, mainMenu);
    nonCoffeePage.style.display = 'none';
    frappeNonCoffee.style.display = 'none';
    frappeCoffee.style.display = 'none';
    refresherDrinks.style.display = 'none';
    silogPage.style.display = 'none';
    addOnsPage.style.display = 'none';
    eggdropPage.style.display = 'none';
    pastriesPage.style.display = 'none';
}
function changeEspressoPageToMainMenu(){
    mainMenu.style.display = 'block';
    espressoPage.style.display = 'none';
    espressoPage.replaceWith(mainMenu, espressoPage);   
}

// Non-Coffee Menu
function changeMainMenuTononCoffeePage(){
    nonCoffeePage.setAttribute ('class', 'col-8 ms-3');
    nonCoffeePage.style.display = 'block';
    mainMenu.style.display = 'none';
    mainMenu.replaceWith(nonCoffeePage, mainMenu);
    espressoPage.style.display = 'none';
    frappeNonCoffee.style.display = 'none';
    frappeCoffee.style.display = 'none';
    refresherDrinks.style.display = 'none';
    silogPage.style.display = 'none';
    addOnsPage.style.display = 'none';
    eggdropPage.style.display = 'none';
    pastriesPage.style.display = 'none';

}
function changenonCoffeePageToMainMenu(){
    mainMenu.style.display = 'block';
    nonCoffeePage.style.display = 'none';
    nonCoffeePage.replaceWith(mainMenu, nonCoffeePage);

}
// Frappe Non-Coffee Menu
function changeMainMenuTofrappeNonCoffee(){
    frappeNonCoffee.setAttribute ('class', 'col-8 ms-3');
    frappeNonCoffee.style.display = 'block';
    mainMenu.style.display = 'none';
    mainMenu.replaceWith(frappeNonCoffee, mainMenu);
    espressoPage.style.display = 'none';
    nonCoffeePage.style.display = 'none';
    frappeCoffee.style.display = 'none';
    refresherDrinks.style.display = 'none';
    silogPage.style.display = 'none';
    addOnsPage.style.display = 'none';
    eggdropPage.style.display = 'none';
    pastriesPage.style.display = 'none';
}
function changefrappeNonCoffeeToMainMenu(){
    mainMenu.style.display = 'block';
    frappeNonCoffee.style.display = 'none';
    frappeNonCoffee.replaceWith(mainMenu, frappeNonCoffee);

}
// Frappe Coffee Menu
function changeMainMenuTofrappeCoffee(){
    frappeCoffee.setAttribute ('class', 'col-8 ms-3');
    frappeCoffee.style.display = 'block';
    mainMenu.style.display = 'none';
    mainMenu.replaceWith(frappeCoffee, mainMenu);
    espressoPage.style.display = 'none';
    nonCoffeePage.style.display = 'none';
    frappeNonCoffee.style.display = 'none';
    refresherDrinks.style.display = 'none';
    silogPage.style.display = 'none';
    addOnsPage.style.display = 'none';
    eggdropPage.style.display = 'none';
    pastriesPage.style.display = 'none';
}
function changefrappeCoffeeToMainMenu(){
    mainMenu.style.display = 'block';
    frappeCoffee.style.display = 'none';
    frappeCoffee.replaceWith(mainMenu, frappeCoffee);

}
// Refresher
function changeMainMenuTorefresher(){
    refresherDrinks.setAttribute('class', 'col-8 ms-3');
    refresherDrinks.style.display = 'block';
    mainMenu.style.display = 'none';
    mainMenu.replaceWith(refresherDrinks, mainMenu);
    espressoPage.style.display = 'none';
    nonCoffeePage.style.display = 'none';
    frappeNonCoffee.style.display = 'none';
    frappeCoffee.style.display = 'none';
    silogPage.style.display = 'none';
    addOnsPage.style.display = 'none';
    eggdropPage.style.display = 'none';
    pastriesPage.style.display = 'none';
}
function changerefresherToMainMenu(){
    mainMenu.style.display = 'block';
    refresherDrinks.style.display = 'none';
    refresherDrinks.replaceWith(mainMenu, refresherDrinks);   
}
// Silog
function changeMainMenuTosilogPage(){
    silogPage.setAttribute('class', 'col-8 ms-3');
    silogPage.style.display = 'block';
    mainMenu.style.display = 'none';
    mainMenu.replaceWith(silogPage, mainMenu);
    espressoPage.style.display = 'none';
    nonCoffeePage.style.display = 'none';
    frappeNonCoffee.style.display = 'none';
    frappeCoffee.style.display = 'none';
    refresherDrinks.style.display = 'none';
    addOnsPage.style.display = 'none';
    eggdropPage.style.display = 'none';
    pastriesPage.style.display = 'none';
}
function changesilogPageToMainMenu(){
    mainMenu.style.display = 'block';
    silogPage.style.display = 'none';
    silogPage.replaceWith(mainMenu, silogPage);   
}
// Add-Ons
function changeMainMenuToaddOnsPage(){
    addOnsPage.setAttribute('class', 'col-8 ms-3');
    addOnsPage.style.display = 'block';
    mainMenu.style.display = 'none';
    mainMenu.replaceWith(addOnsPage, mainMenu);
    espressoPage.style.display = 'none';
    nonCoffeePage.style.display = 'none';
    frappeNonCoffee.style.display = 'none';
    frappeCoffee.style.display = 'none';
    refresherDrinks.style.display = 'none';
    silogPage.style.display = 'none';
    eggdropPage.style.display = 'none';
    pastriesPage.style.display = 'none';
}
function changeaddOnsPageToMainMenu(){
    mainMenu.style.display = 'block';
    addOnsPage.style.display = 'none';
    addOnsPage.replaceWith(mainMenu, addOnsPage);   
}
// Eggdrop
function changeMainMenuToeggdropPage(){
    eggdropPage.setAttribute('class', 'col-8 ms-3');
    eggdropPage.style.display = 'block';
    mainMenu.style.display = 'none';
    mainMenu.replaceWith(eggdropPage, mainMenu);
    espressoPage.style.display = 'none';
    nonCoffeePage.style.display = 'none';
    frappeNonCoffee.style.display = 'none';
    frappeCoffee.style.display = 'none';
    refresherDrinks.style.display = 'none';
    silogPage.style.display = 'none';
    addOnsPage.style.display = 'none';
    pastriesPage.style.display = 'none';
}
function changeeggdropPageToMainMenu(){
    mainMenu.style.display = 'block';
    eggdropPage.style.display = 'none';
    eggdropPage.replaceWith(mainMenu, eggdropPage);   
}
// Pastries
function changeMainMenuTopastriesPage(){
    pastriesPage.setAttribute('class', 'col-8 ms-3');
    pastriesPage.style.display = 'block';
    mainMenu.style.display = 'none';
    mainMenu.replaceWith(pastriesPage, mainMenu);
    espressoPage.style.display = 'none';
    nonCoffeePage.style.display = 'none';
    frappeNonCoffee.style.display = 'none';
    frappeCoffee.style.display = 'none';
    refresherDrinks.style.display = 'none';
    silogPage.style.display = 'none';
    addOnsPage.style.display = 'none';
    eggdropPage.style.display = 'none';
}
function changepastriesPageToMainMenu(){
    mainMenu.style.display = 'block';
    pastriesPage.style.display = 'none';
    pastriesPage.replaceWith(mainMenu, pastriesPage);   
}
