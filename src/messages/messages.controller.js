const uuid = require("uuid");
const Messages = require("../models/messages.models");

const getAllMessages = (conversationId) => {
  const data = Messages.findAll({
    where: {
      conversationId
    },
  }); //Trae todos los mensajes de una conversacion especifica
  return data;
};

const createMessage = async (data, senderId, conversationId) => {
  const newMessage = await Messages.create({
    id: uuid.v4(),
    senderId: senderId,
    conversationId: conversationId,
    message: data.message
  });
  //Inserta un nuevo mensaje
  return newMessage;
};

//..........

const getMessageById = async (id) => {
  const data = await Messages.findOne({
    where: {
      id,
    },
  });
  return data;
};

const deleteMessage = async (id) => {
  const data = await Messages.destroy({
      where: {
          id: id
      }
  })
  return data
}



module.exports = {
  getAllMessages,
  createMessage,
  getMessageById
};