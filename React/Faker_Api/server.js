const express = require('express');
const {faker} = require('@faker-js/faker');

const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

const createUser = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};
    
//test function
const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newCompany;
}

const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get('/api/users/new', (req, res) => {
    const newFakeUser1 = createUser();
    res.json(newFakeUser1);
})

app.get('/api/companies/new', (req, res) => {
    const newFakeCompany1 = createCompany();
    res.json(newFakeCompany1);
})

app.get('/api/user/company', (req, res) => {
    const newFakeUser2 = createUser();
    const newFakeCompany2 = createCompany();
    const newFakeUserandCompany = { user: newFakeUser2, company: newFakeCompany2 };
    res.json(newFakeUserandCompany);
})



app.listen(port, () => {
    console.log(`Listening on port ${port} for request to respond to`)
})