module.exports = app => {
        const user = require("../controllers/user.controller.js");

        // Create a new User
        app.post("/user", user.create);

        // authenticate a new User
        app.post("/user/auth", user.authenticate);

        // Retrieve all User
        app.get("/user", user.findAll);

        // Retrieve a single User with Id
        app.get("/user/:userId", user.findOne);

        // Update a User with Id
        app.put("/user/:userId", user.update);

        // Delete a User with Id
        app.delete("/user/:userId", user.delete);

        // Delete all User
        app.delete("/user", user.deleteAll);
};