
const jwt = require("jsonwebtoken");

const jwt_secret = "supersecret";

const verificar_token = (req, res, next) => {
    let token =
        req.headers["x-access-token"] ||
        req.headers["authorization"] ||
        req.headers["x-auth-token"];

    if (!token) {
        return res
            .status(401)
            .send({ message: "No token provided." });
    } else {
        jwt.verify(token, jwt_secret, (err, decoded) => {
            if (err) {
                return res
                    .status(401)
                    .send({ message: "Failed to authenticate token." });
            } else {
                req.user = decoded;
                next();
            }
        });
    }
}

module.exports = {
    verificar_token
};