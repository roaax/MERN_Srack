const express = require("express");
const {faker} = require("@faker-js/faker");
const app = express();
const port = 8000;

// User class
// _id ,firstName ,lastName ,phoneNumber ,email ,password
    class User {
        constructor() {
            this._id = faker.datatype.uuid();
                this._fName = faker.name.firstName();
                this._lName = faker.name.lastName();
                this._phoneNum = faker.phone.phoneNumber();
                this._email = faker.internet.email();
                this._password = faker.internet.password();

        }
    }

// Company class
// _id ,name ,address ,street ,city ,state ,zipCode ,country
    class Company {
        constructor() {
            this._id = faker.datatype.uuid();
            this._name = faker.company.name();
            this._address =
            {
                street : faker.address.street(),
                city : faker.address.city(),
                state : faker.address.state(),
                zipCode : faker.address.zipCode(),
                country : faker.address.country(),

            }

        }
    }

app.listen( port, () => console.log(`Listening on port: ${port}`) );

//Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new", (req , res) => {
    res.json(new User());
});

//Create an api route "/api/companies/new" that returns a new company
app.get("/api/companies/new", (req , res) => {
    res.json(new Company());
})

//Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company", (req , res) => {
    res.json({
        User : new User(),
        Company: new Company(),
    });
})


