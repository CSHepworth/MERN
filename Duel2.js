const { performance } = require('perf_hooks');
const start = performance.now();

class Card {
    constructor(type, name, cost) {
        this.type = type;
        this.name = name;
        this.cost = cost;
    }

    showCard() {
        if (this.type === "unit") {
            console.log(`${this.name} \nType: ${this.type} \nCost: ${this.cost} \nPower: ${this.power} \nResilience: ${this.resilience}`);
        }
        else if (this.type === "effect") {
            console.log(`${this.name} \nType: ${this.type} \nCost: ${this.cost} \nText: ${this.text} \nResilience: ${this.resilience}`);
        }
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super("unit", name, cost, power, resilience);
        this.power = power;
        this.resilience = resilience;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super("effect", name, cost, text, stat, magnitude)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}

var redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
redBeltNinja.showCard();

var blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
blackBeltNinja.showCard();

var hardAlgorithm = new Effect("Hard Algorithm", 3, 3, 3, 3);
hardAlgorithm.showCard();



console.log(`\nThis took ${Math.round(performance.now() - start)} milliseconds to complete.\n`);