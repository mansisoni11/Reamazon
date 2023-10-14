
const mongoose = require("mongoose");
const username = "mansi";
const password = "MAnsi@3101"; // Replace with your actual password
const cluster = "cluster0";
const database = "Amazonweb";

// URL encode the password
const encodedPassword = encodeURIComponent(password);

const DB = `mongodb+srv://${username}:${encodedPassword}@${cluster}.hov53sy.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log("Connection is successfully done"))
.catch(error => console.log("Error: " + error.message));
