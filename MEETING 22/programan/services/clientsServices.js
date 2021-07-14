// instanciar dependencias
const clientModel = require('../models/clientsModel');

// método de creación de cliente
const addClient = async (client) => {
  const session = await clientModel.startSession();
  session.startTransaction();

  // validamos si existe el cliente por el correo
  const clientValidation = await clientModel.findOne({email: client.email});
  if (!clientValidation) {
    // creamos el cliente
    await clientModel.create([client], { session: session });
    // commiteamos la transacción en la base de datos
    await session.commitTransaction();
    // terminamos la sesión
    session.endSession();

    return await clientModel.findOne({email: client.email});
  }
  else {
    // es necesario terminar la sesión y no dejarla abierta
    session.endSession();

    return `El cliente con el correo ${client.email} ya existe`;
  }
}

// método para agregar información de contacto al cliente
const addClientContactInfo = async (origen, destino, monto) => {
  // TO DO
}

// método para enviar dinero como una transferencia
const sendMoney = async (origen, destino, monto) => {
  // TO DO
}

module.exports = {
  addClient,
  addClientContactInfo,
  sendMoney
};