var DataTypes = require("sequelize").DataTypes;
var _user = require("./user");
var _performance = require("./performance");

function initModels(sequelize) {
  var user = _user(sequelize, DataTypes);
  var performance = _performance(sequelize, DataTypes);

  return {
    user,
    performance,
  };
}
module.exports = { initModels };
