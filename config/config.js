require('dotenv').config()

const { 
    PORT,
    FBCLIENTID, 
    FBCLIENTSECRET
} = process.env;

module.exports = {
    PORT,
    FBCLIENTID, 
    FBCLIENTSECRET
}