
export const createNewItem = (name, price, ingredients) => {
    let newMenuItem = new MenuItem(name, price, ingredients);
    items.push(newMenuItem);
}

export const menu = () => {

    const menu = document.createElement('div');
    const title = document.createElement('div');
    const menuItems = document.createElement('div');
    const menuLink = document.querySelector('.menuLink');
    menuLink.classList.add('ul')
    document.querySelector('.content').appendChild(menu);
    menu.classList.add('menu');
    menu.appendChild(title);
    title.classList.add('title');
    title.textContent = 'Our menu'
    menu.appendChild(menuItems);
    menuItems.classList.add('menuItems');

    items.forEach(function(item) {
        const itemContainer = document.createElement('div');
        const itemName = document.createElement('div');
        const middle = document.createElement('div');
        const price = document.createElement('div');
        const ingredients = document.createElement('div');

        menuItems.appendChild(itemContainer);
        itemContainer.classList.add('item');
        itemContainer.appendChild(itemName);
        itemName.textContent = item.name;
        itemContainer.appendChild(middle);
        middle.classList.add('middle')
        itemContainer.appendChild(price);
        price.textContent = item.price;
        menuItems.appendChild(ingredients);
        ingredients.textContent = item.ingredients;
        ingredients.classList.add('ingredients');
    });
}

class MenuItem {
    constructor(name, price, ingredients){
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
    }
}

let items = [
    {
        "name": "Antipasto",
        "price": "30",
        "ingredients": "ingredient, ingredient, ingredient"
    },
    {
        "name": "Pizza",
        "price": "20",
        "ingredients": "ingredient, ingredient, ingredient"
    },
    {
        "name": "Calzone",
        "price": "20",
        "ingredients": "ingredient, ingredient, ingredient"
    },
    {
        "name": "Pasta",
        "price": "25",
        "ingredients": "ingredient, ingredient, ingredient"
    },
    {
        "name": "Gnocci",
        "price": "25",
        "ingredients": "ingredient, ingredient, ingredient"
    },
    {
        "name": "Salad",
        "price": "15",
        "ingredients": "ingredient, ingredient, ingredient"
    },
    {
        "name": "Soup",
        "price": "15",
        "ingredients": "ingredient, ingredient, ingredient"
    }
];

`createNewItem('test', 'test', 'test');
createNewItem('test', 'test', 'test');
createNewItem('test', 'test', 'test');
createNewItem('test', 'test', 'test');
createNewItem('test', 'test', 'test');
createNewItem('test', 'test', 'test');
createNewItem('test', 'test', 'test');
createNewItem('test', 'test', 'test');
createNewItem('test', 'test', 'test');
createNewItem('test', 'test', 'test');`