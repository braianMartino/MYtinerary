const User = require("./user.model");

const getUsers = (req, res) => {
  User
    .find({}).then(users => {
    res.json(users).status(204);
  });
};

const createUser = (req,res)=>{
    console.log(req.body)
    User
        .create({
            userName:req.body.userName,
            password:req.body.password,
            email:req.body.email,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            country:req.body.country
        }).then((createdUser)=>{
        res.json(createdUser).status(200)
    }).catch((err)=>{
        res.json(err).status(500)
    })
}

module.exports = {
  getUsers,
  createUser
}