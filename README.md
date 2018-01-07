Note: I am not handling edge cases for now as my understanding is that this application is needed for
demo of sweet scenarios only.

API Details:
Sample API requests can be viewed at:
https://documenter.getpostman.com/view/2345066/pitstop_test/7Lt6exr

Assuming that car has one to many relationship with appointments. So cars will be pre-created in the DB
through some different UI / source and our application's job is to just create the appointments.

In that case, Appointments table will have a foreign key, car_id (primary key in Cars table)

install dependecies:
npm install

Create Car Model:
node_modules/.bin/sequelize model:create --name Car --attributes "Make:string, Year:integer, CarModel:string"

Create Appointment Model:
node_modules/.bin/sequelize model:create --name Appointments --attributes "AppointmentDate:string, AppointmentTime:string, Shop:string, CarId:integer"

- Add to car.js in associate method:
Car.hasMany(models.Appointments);
- Add to appointments.js in associate method:
Appointments.belongsTo(models.Car);

Run Migration:
node_modules/.bin/sequelize db:migrate
