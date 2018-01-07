Note: I am not handling edge cases for now as my understanding is that this application is needed for
demo of sweet scenarios only.

<b> API Details: </b>
Sample API requests can be viewed at:
https://documenter.getpostman.com/view/2345066/pitstop_test/7Lt6exr

Assuming that car has one to many relationship with appointments. So cars will be pre-created in the DB
through some different UI / source and our application's job is to just create the appointments.

In that case, Appointments table will have a foreign key, car_id (primary key in Cars table)

1) Install dependecies:
npm install

2) Create Car Model:
node_modules/.bin/sequelize model:create --name Car --attributes "Make:string, Year:integer, CarModel:string"

3) Create Appointment Model:
node_modules/.bin/sequelize model:create --name Appointments --attributes "AppointmentDate:string, AppointmentTime:string, Shop:string, CarId:integer"

4)
- Add to car.js in associate method:
Car.hasMany(models.Appointments);
- Add to appointments.js in associate method:
Appointments.belongsTo(models.Car);

5) Please create a database named 'pitstop_db' and set the user / password for DB in config.json file.

6) Run Migration:
node_modules/.bin/sequelize db:migrate

7) npm run
