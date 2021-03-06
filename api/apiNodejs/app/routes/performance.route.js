module.exports = app => {
        const performance = require("../controllers/performance.controller.js");

        // Create a new Performance
        app.post("/performance", performance.create);

        // Retrieve all Performance
        app.get("/performance", performance.findAll);

        // Retrieve a single Performance with Id
        app.get("/performance/:performanceId", performance.findOne);

        // Update a Performance with Id
        app.put("/performance/:performanceId", performance.update);

        // Delete a Performance with Id
        app.delete("/performance/:performanceId", performance.delete);

        // Delete all Performance
        app.delete("/performance", performance.deleteAll);
};