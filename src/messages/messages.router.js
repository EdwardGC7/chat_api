const router = require('express').Router()

const messagesServices = require('./messages.services')


// 3. /api/v1/conversations/:conversation_id/messages
//     1. Esta ruta debe estar protegida//
//     2. Mostrara todos los mensajes que tiene la conversacion//
//     3. Permitira crear nuevos mensajes//
router.route('/').get(passport.authenticate('jwt', {session: false}), messagesServices.getAllMessages) 
router.route('/').post(passport.authenticate('jwt', {session: false}), messagesServices.postMessage)

// 4. /api/v1/conversations/:conversation_id/messages/:message_id
//     1. Esta ruta debe estar protegida//
//     2. Mostrara un mensaje en especifico//
//     3. Permitira eliminarlo, pero no modificarlo
router.route('/:message_id').get(passport.authenticate('jwt', {session: false}), messagesServices.getMessageById) 
router.route('/:message_id').delete(passport.authenticate('jwt', {session: false}), messagesServices.deleteMessage) 

module.exports = router
