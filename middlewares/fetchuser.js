var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')
var myEnv = dotenv.config()

dotenvExpand.expand(myEnv)
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.VITE_REACT_APP_JWT_KEY
console.log(JWT_SECRET)

const fetchuser = (req, res, next) => {
    // Get use user from JWT token and add id to request

    const token = req.header('auth-token')
    
    if(token) {
        try {
            const data = jwt.verify(token, JWT_SECRET)
            req.user = data.user
            next()
        } catch (error) {
            return res.status(401).json({error:"Please authenticate using a valid token"})
        }
    } else if(! req.header) {
        return res.status(401).json({error:"user not signed-in"})
    } else {
        return res.status(401).json({error:"Please authenticate using a valid token"})
    }

}

module.exports = fetchuser;
