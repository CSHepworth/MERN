const { performance } = require('perf_hooks');
const start = performance.now();

class person {
    constructor(name, occupation, location) {
        this.name = name;
        this.occupation = occupation;
        this.location = location;
    }

    showInfo() {
        
        if (this.occupation == "Vault Hunter") {
            console.log(`Name: ${this.name} \nOccupation: ${this.occupation} \nLocation: ${this.location} \nTitle: ${this.title}\n`);
        }
        else {
            console.log(`Name: ${this.name} \nOccupation: ${this.occupation} \nLocation: ${this.location}\n`)
        }
    }
}

const Zed = new person("Zed", "Unliscensed Medical Doctor", "Sanctuary");
Zed.showInfo();

const Scooter = new person("Scooter", "Mechanic", "Sanctuary");
Scooter.showInfo();

class VaultHunter extends person {
    constructor(name, location, title) {
        super(name, "Vault Hunter", location, title);
        this.title = title;
    }

}

const Salvador = new VaultHunter("Salvador", "Sanctuary", "Gunzerker");
Salvador.showInfo();

const Axton = new VaultHunter("Axton", "Sanctuary", "Commando");
Axton.showInfo();

const CL4PTP = new VaultHunter("CL4P-TP", "Sanctuary", "Fragtrap");
CL4PTP.showInfo();

const Maya = new VaultHunter("Maya", "Sanctuary", "Siren");
Maya.showInfo();

console.log(`\nThis took ${Math.round(performance.now() - start)} milliseconds to complete.\n`);