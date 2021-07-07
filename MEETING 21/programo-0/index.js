const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/usuarios', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const user = mongoose.model('user', {
  nombre: String,
  rol: String,
  email: String
});

const roles = mongoose.model('roles', {
  nombre: String
}); 

//user.find().then(data => console.log(data));
//roles.find().then(data => console.log(data));


// Para crear un nuevo documento
// Creamos el objeto
let nuevoRol = {
  nombre: "otro rol"
};
// Creamos una instancia a partir del nuevo objeto
let dbRoles = new roles(nuevoRol);
// Luego salvamos la información
dbRoles.save();