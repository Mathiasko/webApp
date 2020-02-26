/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function reveal() {
    let menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
    console.log(menu)
}

function meatMenu() {
    let menu = document.getElementById("recipesMenu");
    if (menu.style.display === "grid") {
        menu.style.display = "none";
    } else {
        menu.style.display = "grid";
    }

    menu = document.getElementById("meatMenu");
    if (menu.style.display === "grid") {
        menu.style.display = "none";
    } else {
        menu.style.display = "grid";
    }

    menu = document.getElementById("back");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

    on = 'meat';


}

function vegetarianMenu() {
    let menu = document.getElementById("recipesMenu");
    if (menu.style.display === "grid") {
        menu.style.display = "none";
    } else {
        menu.style.display = "grid";
    }

    menu = document.getElementById("vegetarianMenu");
    if (menu.style.display === "grid") {
        menu.style.display = "none";
    } else {
        menu.style.display = "grid";
    }

    menu = document.getElementById("back");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

    on = 'vegetarian';
}

function back() {
    switch (on) {
        case 'meat':
            meatMenu()
            break;
        case 'vegetarian':
            vegetarianMenu()
            break;
    }
}

function ingredients(){
    document.getElementById("ing").classList.add('show');
    document.getElementById("dir").classList.remove('show');
    document.getElementById("tip").classList.remove('show');
}

function directions(){
    document.getElementById("dir").classList.add('show');
    document.getElementById("ing").classList.remove('show');
    document.getElementById("tip").classList.remove('show');
}

function tips(){
    document.getElementById("tip").classList.add('show');
    document.getElementById("ing").classList.remove('show');
    document.getElementById("dir").classList.remove('show');
}