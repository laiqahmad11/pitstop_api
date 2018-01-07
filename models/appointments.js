'use strict';
module.exports = function(sequelize, DataTypes) {
  var Appointments = sequelize.define('Appointments', {
    AppointmentDate: DataTypes.STRING,
    AppointmentTime: DataTypes.STRING,
    Shop: DataTypes.STRING,
    CarId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Appointments.belongsTo(models.Car);
      }
    }
  });
  return Appointments;
};
