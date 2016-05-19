"use strict";

module.exports = function(sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    name: DataTypes.STRING ,
	password : DataTypes.INTEGER 
  }, {
    classMethods: {
      associate: function(models) {
        Member.hasMany(models.Purchase_Record)
      }
    }
  });

  return Member;
};
