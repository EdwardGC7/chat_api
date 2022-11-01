
// Email y Contraseña del usuario 

const { getUserByEmail } = require("../users/users.controllers")
const {comparePassword} = require('../utils/crypto')

const loginUser = async (email, password) => {

    try {
        const user = await getUserByEmail(email)
        // user.password contiene la contraseña encriptada de la base de datos
        const verifyPassword = comparePassword(password, user.password)
        if(verifyPassword){
            return user
        } 
        return false
    } catch (err) {
        return false
    }
}


module.exports = { loginUser }