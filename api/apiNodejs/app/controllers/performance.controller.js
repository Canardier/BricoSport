const Performance = require("../models/performance.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Performance
    const performance = new Performance({ 
      user_id: req.body.user_id, 
      references: req.body.references, 
      day: req.body.day, 
      pushup: req.body.pushup, 
      pullup: req.body.pullup, 
      squat: req.body.squat, 
    });
  
    // Save Performance in the database
    Performance.create(performance, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Performance."
        });
      else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Performance.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving performances."
        });
      else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Performance.findById(req.params.performanceId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Performance with id ${req.params.performanceId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Performance with id " + req.params.performanceId
          });
        }
      } else res.send(data);
    });
};

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Performance.updateById(
      req.params.performanceId,
      new Performance(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Performance with id ${req.params.performanceId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Performance with id " + req.params.performanceId
            });
          }
        } else res.send(data);
      }
    );
};

exports.delete = (req, res) => {
    Performance.remove(req.params.performanceId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Performance with id ${req.params.performanceId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Performance with id " + req.params.performanceId
          });
        }
      } else res.send({ message: `Performance was deleted successfully!` });
    });
};

exports.deleteAll = (req, res) => {
    Performance.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all performances."
        });
      else res.send({ message: `All Performances were deleted successfully!` });
    });
};