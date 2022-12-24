const jwt = require('jsonwebtoken')
const secretStr = "InstaShop-Database2022-SecretString-70483473" 

const createToken = (id) => {
    // 30 minute session
    return jwt.sign({id}, secretStr, {expiresIn: 1800})
}

const verify = (token, secretStr) => {
    return new Promise ((resolve, reject) => {
        jwt.verify(token, secretStr, (err, decodedToken) => {
            if (err){
                reject(err)
            } else {
                resolve(decodedToken)
            }
        })
    })
}
const authenticateUser = async (req, res, next) => {
    try{
        const token = req.cookies.jwt
        const decodedToken = await verify(token, secretStr)
        const tokenData = decodedToken.id.split("|")
        const email = tokenData[0]
        const role = tokenData[1] 
        
        res.email = email
        res.role = role
        next() 
    } 
    catch{
        res.status(401).send() 
    }
}

module.exports = {createToken, authenticateUser}