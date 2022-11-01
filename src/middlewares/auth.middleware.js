// Middleware para proteger rutas

const { jwtSecret } = require('../config');
const { getUserById } = require('../users/users.controllers');
const JwtStrategy = require('passport-jwt').Strategy; 
// Passport maneja estrategias para las diferentes autenticaciones
const ExtractJwt = require('passport-jwt').ExtractJwt; 
// Extrae el header de la peticion

// Exportando funcion anonima
module.exports = (passport) => {
    const options = {
        jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
        secretOrKey: jwtSecret
    }
    passport.use(
        new JwtStrategy(options, async(decoded, done) => {

            try {
                const response = await getUserById(decoded.id)
                if(!response){
                    return done(null, false)
                }
                console.log('decoded JWT', decoded)
                return done(null, decoded)
            } catch (error) {
                return done(error, false)
            }
        })
    )
}