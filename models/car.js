'use strict';
module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define('Car', {
    Make: DataTypes.STRING,
    Year: DataTypes.INTEGER,
    CarModel: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Car.hasMany(models.Appointments);
      }
    }
  });
  return Car;
};
