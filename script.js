const emailInput = document.querySelector('#inputEmail');
const resetEmail = document.querySelector("#resetEmail")
const resendEmail = document.querySelector('#resendEmail');
const username = document.querySelector('#username');
const loginBtn = document.querySelector('.login-btn');
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

function userLogin(){
    if (username.value == `andriamae1019`){
        loginBtn.style.display = 'none';
        loginBtn.setAttribute('href','./home.html');
    } else {
        alert(`incorrect username or password`);
        loginBtn.setAttribute('href','./login.html');
    }
}

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
}
function changepastriesPageToMainMenu(){
    mainMenu.style.display = 'block';
    pastriesPage.style.display = 'none';
    pastriesPage.replaceWith(mainMenu, pastriesPage);   
}


