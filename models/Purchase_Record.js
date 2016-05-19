"use strict";

module.exports = function(sequelize, DataTypes) {
  var Purchase_Record = sequelize.define("Purchase_Record", {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Purchase_Record.belongsTo(models.Member , {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Purchase_Record;
};
