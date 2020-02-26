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

function meatGroceries(){
    document.getElementById("groceryMeat").classList.add('showGrid');
    document.getElementById("groceryVegetable").classList.remove('showGrid');
    document.getElementById("groceryFruit").classList.remove('showGrid');
}

function vegetableGroceries(){
    document.getElementById("groceryVegetable").classList.add('showGrid');
    document.getElementById("groceryMeat").classList.remove('showGrid');
    document.getElementById("groceryFruit").classList.remove('showGrid');
}

function friutGroceries(){
    document.getElementById("groceryFruit").classList.add('showGrid');
    document.getElementById("groceryVegetable").classList.remove('showGrid');
    document.getElementById("groceryMeat").classList.remove('showGrid');
}
person= [
    {
        name: 'Jhon',
        age: '48',
        height: '168',
        weight: '86'
    },
    {
        name: 'Mariella',
        age: '28',
        height: '158',
        weight: '66'
    },
    {
        name: 'Booster',
        age: '99',
        height: '200',
        weight: '80'
    },
    {
        name: 'Bernardita',
        age: '46',
        height: '178',
        weight: '96'
    }
]

function create(){
    let name    = document.getElementById('name').value
    let age     = document.getElementById('age').value
    let height  = document.getElementById('height').value
    let weight  = document.getElementById('weight').value
    person.push({name: name, age: age, height: height, weight: weight})
    console.log(person)
}

function showUsers(){
    for (i= 0; i<person.length; i++){
        document.getElementById('output').innerHTML+= 'Name: ' + person[i].name + '</br>';
        document.getElementById('output').innerHTML+= 'Age: ' + person[i].age + '</br>';
        document.getElementById('output').innerHTML+= 'Height: ' + person[i].height + '</br>';
        document.getElementById('output').innerHTML+= 'Weight: ' + person[i].weight + '</br>';
        document.getElementById('output').innerHTML+= '</br>'
    }
    console.log(person)
}