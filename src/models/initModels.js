const Conversations = require('./conversations.models')
const Messages = require('./messages.models')
const Participants = require('./participants.models')
const Users = require('./users.models')

const initModels = () => {
  //Una conversacion le pertenece a un usuario
  Conversations.belongsTo(Users)
  //Un usuario tiene muchas conversaciones
  Users.hasMany(Conversations)

  //Participants le pertenece a un usuario
  Participants.belongsTo(Users)
  //Un usuario es participante de muchas conversaciones
  Users.hasMany(Participants)

  //Un mensaje le pertenece a un usuario
  Messages.belongsTo(Users)
  //Un usuario envia muchos mensajes
  Users.hasMany(Messages)

  //Participants le pertenece a una conversacion
  Participants.belongsTo(Conversations)
  //Una conversacion tiene muchos participantes
  Conversations.hasMany(Participants)

  //Un mensaje le pertenece a una conversacion
  Messages.belongsTo(Conversations)
  //Una conversacion tiene muchos mensajes
  Conversations.hasMany(Messages)
}


module.exports = initModels