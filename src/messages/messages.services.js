const { response } = require("express");
const messagesControllers = require("./messages.controller");

const getAllMessages = (req, res) => {
  const conversationId = req.params.conversation_id;
  messagesControllers
    .getAllMessages(conversationId)
    .then((data) => {
      res.status(200).json(data);
    })
};

const postMessage = (req, res) => {
  const data = req.body;
  const senderId = req.user.id 
  const conversationId = req.params.conversation_id;
  if (data.message) {
    messagesControllers.createMessage(data, senderId, conversationId)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({message : err.message})
        })  
  } else {
    res.status(400).json({message : 'Missing data'})
  }
};

//--------

const getMessageById = (req, res) => {
  const id = req.params.message_id;

  messagesControllers.getMessageById(id)
      .then(data => {
        if(data){
          res.status(200).json(data)
        }else {
          res.status(404).json({message: 'Invalid ID'})
        }
      })
      .catch(err => {
          res.status(404).json({message: err.message})
      })
}

const deleteMessage = (req, res) => {
  const id = req.params.message_id
  messagesControllers.deleteMessage(id)
    .then((response) => {
      if(response){
        res.status(204).json()
      }else{
        res.status(400).json({message: 'Invalid ID'})
      }
    })
    .catch(err=> {
      res.status(400).json(err)
    })
}




module.exports = {
  getAllMessages,
  postMessage,
  getMessageById,
  deleteMessage
}