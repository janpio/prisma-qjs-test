const { Crypto } = require("@peculiar/webcrypto");

const crypto = new Crypto();

module.exports = {
    crypto: crypto,
}