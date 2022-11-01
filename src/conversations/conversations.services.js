const { response } = require("express");
const conversationsControllers = require("./conversations.controller");

const getAllConversations = (req, res) => {
  const userId = req.user.id 
  conversationsControllers
    .getAllConversations(userId)
    .then((data) => {
      res.status(200).json(data);
    })
    // .catch((err) => {
    //   res.status(400).json({ message: err.message });
    // });
};

const postConversation = (req, res) => {
  const data = req.body;
  const createdBy = req.user.id 
  if (data.imageUrl && data.title) {
    conversationsControllers.createConversation(data, createdBy)
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

const getConversationById = (req, res) => {
  const id = req.params.conversation_id;

  conversationsControllers.getConversationById(id)
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

const deleteConversation = (req, res) => {
  const id = req.params.conversation_id
  conversationsControllers.deleteConversation(id)
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


const patchConversation = (req, res) => {
  const id = req.params.conversation_id 
  const {title, imageUrl} = req.body;

  conversationsControllers.editConversation(id, {title, imageUrl})
    .then((response) => {
      if(response[0]){
        res.status(200).json({
          message: `The conversation was edited succesfully!`
        })
      } else {
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch(error => {
      res.status(400).json({message: error.message})
    })
}


module.exports = {
  getAllConversations,
  postConversation,
  getConversationById,
  deleteConversation,
  patchConversation
}
