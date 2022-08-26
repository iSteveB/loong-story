const UserModel = require('../models/user.model');
const uploadErrors = require('../utils/errors.utils');
const fs = require('fs');

module.exports.uploadProfil = async (req, res) => {

    console.log(req.body.name);
};
