const { performance } = require('perf_hooks');
const start = performance.now();

class Unit {
    constructor(name, cost, power, resilience) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    showStats() {
        console.log(`Name: ${this.name} \nCost: ${this.cost} \nPower: ${this.power} \nResilience ${this.resilience}\n`);
    }
}

class RedBeltNinja extends Unit {
    constructor(name) {
        super(name, 3, 3, 4);
    }
}

class BlackBeltNinja extends Unit {
    constructor(name) {
        super(name, 4, 5, 4);
    }
}

class Effect {
    constructor(name, cost, text, stat, magnitude) {
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    PlayEffect(target) {
        target
    }
}

class HardAlgorithm extends Effect {
    constructor() {

    }
}

const red1 = new RedBeltNinja("red1");
red1.showStats();

const black1 = new BlackBeltNinja("black1");
black1.showStats();

console.log(`\nThis took ${Math.round(performance.now() - start)} milliseconds to complete.\n`);