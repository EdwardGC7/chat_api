const router = require('express').Router()

const conversationsServices = require('./conversations.services')

// 1. /api/v1/conversations
//     1. Esta ruta debe estar protegida//
//     2. Debera mostrar las conversaciones del usuario loggeado//
//     3. Podras crear conversaciones nuevas//
router.route('/').get(passport.authenticate('jwt', {session: false}), conversationsServices.getAllConversations) 
router.route('/').post(passport.authenticate('jwt', {session: false}), conversationsServices.postConversation) 

// 2. /api/v1/conversations/:conversation_id
//     1. Esta ruta debe estar protegida//
//     2. Debera mostrar una conversacion en especifico//
//     3. La podras eliminar y modificar desde aqui//
router.route('/:conversation_id').get(passport.authenticate('jwt', {session: false}), conversationsServices.getConversationById) 
router.route('/:conversation_id').delete(passport.authenticate('jwt', {session: false}), conversationsServices.deleteConversation) 
router.route('/:conversation_id').patch(passport.authenticate('jwt', {session: false}), conversationsServices.patchConversation) 


module.exports = router
