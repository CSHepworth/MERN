const { performance } = require('perf_hooks');
const start = performance.now();

const manufacturers = ["Maliwan", "Torgue", "Hyperion", "Bandit", "Vladof"];
const manufacturersList = manufacturers.map(item => `<li>${item}</li>`);

console.log(manufacturersList);

console.log(`\nThis took ${Math.round(performance.now() - start)} milliseconds to complete.\n`);