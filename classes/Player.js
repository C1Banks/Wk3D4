const Person = require("./Person.js");

class Player extends Person {
    constructor(weapon, name, type, location) {
        super(name, type, location);
        this.weapon = weapon;
        this.inventory = []
    };
    addItem(item){
        if (!this.inventory.includes(item)){
        this.inventory.push(item);
        return;
    }
    else{
        console.log(`${item.name} already in inventory.`);
    }
    }
};

module.exports = Player; 