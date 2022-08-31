// REQUIRE DEPENDENCIES
const express = require('express');
const budget = require("./models/budget.js")

// INITIALIZE EXPRESS APP
const app = express();
const port = 3000;


// DEFINE OUR ROUTES
app.get("/budget/" , (request, respond) => {
    respond.render("index.ejs", {
        allBudget: budget
    })

});






// TELL OUR APP TO LISTEN ON PORT...
app.listen(port, ()=>{
    console.log(`listening on port `, port)
});