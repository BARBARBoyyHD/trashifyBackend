const crypto = require("crypto");

const generateToken = ()=>{
    return crypto.randomBytes(64).toString("hex");
}

const token = generateToken();
console.log(token);