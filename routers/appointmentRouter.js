const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
var models = require('../models/index');

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/pitstop_db';
const appointmentRouter = express.Router();

appointmentRouter.use(bodyParser.json());

appointmentRouter.route('/appointments')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})
.get((req,res,next) => {
    models.Appointments.findAll({

    }).then(function(appointments) {
      res.json(appointments);
  });
})
.post((req, res, next) => {
  models.Appointments.create({
    AppointmentDate: req.body.AppointmentDate,
    AppointmentTime: req.body.AppointmentTime,
    Shop: req.body.Shop,
    CarId: req.body.CarId
  }).then(function(appointment) {
    res.json(appointment);
  });
});



appointmentRouter.route('/appointments/:AppointmentId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})
.put((req, res, next) => {
      models.Appointments.findOne({
      where: {
        id: req.params.AppointmentId
      }
    }).then(function(appointment) {
      if(appointment){
        appointment.update({
          AppointmentDate: req.body.AppointmentDate,
          AppointmentTime: req.body.AppointmentTime,
          Shop: req.body.Shop,
          CarId: req.body.CarId
        }).then(function(appointment) {
          res.send(appointment);
        });
      }
    });
})
.delete((req, res, next) => {
  models.Appointments.destroy({
  where: {
    id: req.params.AppointmentId
  }
  }).then(function(appointment) {
      res.json(appointment);
  });
});



module.exports = appointmentRouter;
