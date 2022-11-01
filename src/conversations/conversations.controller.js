const uuid = require("uuid");
const Conversations = require("../models/conversations.models");

const getAllConversations = (createdBy) => {
  const data = Conversations.findAll({
    where: {
      createdBy,
    },
  }); //Trae las conversaciones del usuario
  return data;
};

const createConversation = async (data, createdBy) => {
  const newConversation = await Conversations.create({
    id: uuid.v4(),
    title: data.title,
    imageUrl: data.imageUrl,
    createdBy: createdBy,
  });
  //Inserta una nueva conversacion
  return newConversation;
};

//..........

const getConversationById = async (id) => {
  const data = await Conversations.findOne({
    where: {
      id,
    },
  });
  return data;
};

const deleteConversation = async (id) => {
  const data = await Conversations.destroy({
      where: {
          id: id
      }
  })
  return data
}

const editConversation = async (id, data) => {
  const response = await Conversations.update(data, {
    where: {
      id: id,
    },
  });
  return response;
};

//.........


module.exports = {
  getAllConversations,
  createConversation,
  getConversationById,
  deleteConversation,
  editConversation
};
