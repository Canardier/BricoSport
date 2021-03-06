/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('performance', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    day: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pushup: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pullup: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    squat: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'performance',
    timestamps: false
    });
};
