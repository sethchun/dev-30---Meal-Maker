const menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    addDishToCourse: function (courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        if (courseName === 'appetizers') {
            menu.courses['appetizers'].push(dish);
        } else if (courseName === 'mains') {
            menu.courses['mains'].push(dish);
        } else if (courseName === 'desserts') {
            menu.courses['desserts'].push(dish);
        } else {
            console.log('error');
        }
    },
    getRandomDishFromCourse: function (courseName) {
        const dishes = this.courses[courseName];
        let i = Math.floor(Math.random() * dishes.length);
        return dishes[i];
    },
    generateRandomMeal: function () {
        let appetizer = menu.getRandomDishFromCourse('appetizers');
        let main = menu.getRandomDishFromCourse('mains');
        let dessert = menu.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + main.price + dessert.price;
        console.log(`Good Evening! Tonight's dinner will start with ${appetizer.name} as an appetizer. Your main course will be ${main.name}, followed by ${dessert.name} for dessert. Tonight's meal will be $${totalPrice}`);
    }
};

// Testing:

// Adding appetizers:
menu.addDishToCourse('appetizers', 'calamari', 12);
menu.addDishToCourse('appetizers', 'fried pickles', 8);
menu.addDishToCourse('appetizers', 'bruschetta', 10);

// Adding mains:
menu.addDishToCourse('mains', 'vodka penne', 16);
menu.addDishToCourse('mains', 'surf and turf', 28);
menu.addDishToCourse('mains', 'ratatouille', 14);

// Adding desserts:
menu.addDishToCourse('desserts', 'cookies', 6);
menu.addDishToCourse('desserts', 'cake', 10);
menu.addDishToCourse('desserts', 'hot fudge sundae', 8);

// Testing .generateRandomMeal():
const meal = menu.generateRandomMeal();
console.log(meal);
