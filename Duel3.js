class Card {
    constructor(name = "", cost = 0) {
        this.name = name;
        this.cost = cost;
    }

    displayCard() {
        let output = "*********************\n\n" + "Name: " + this.name + "\n" + "Cost: " + this.cost + "\n\n*********************";
        console.log(output);
    }
}

const try1 = new Card("card1");
try1.displayCard();