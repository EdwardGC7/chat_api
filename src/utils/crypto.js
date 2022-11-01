const bcrypt = require('bcrypt')

// Encripta la contraseña del usuario cuando esta se crea o modifica
const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}


const comparePassword = (plainPassword, hashedPassword) => {
    /* Esta utilidad se usa cuando hacemos un login y recibimos la contraseña del usuario y la comparamos con la que tenemos en la DB*/
    return bcrypt.compareSync(plainPassword, hashedPassword)
}


module.exports = { hashPassword, comparePassword }