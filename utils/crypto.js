const { SECRET_KEY } = require('config').get('PassWord-SECRET_KEY');
const crypto = require('crypto');

function md5(content){
    let md5 = crypto.createHash("md5");
    return md5.update(content).digest("hex");
}

function CryptoPassword(password){
    const str = `password=${password}$key=${SECRET_KEY}`;
    return md5(str);
}

module.exports = {
    CryptoPassword,
}