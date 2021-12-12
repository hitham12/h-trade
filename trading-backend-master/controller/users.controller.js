const usersModel = require('../model/users.model');

const getAllUsers = async (req, res) => {
    const data = await usersModel.User.find({})
    return res.status(200).json(data)
}
const addNewUser = (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        usersModel.User.findOne({ email }).exec((err, user) => {
            if (user) {
                return res.status(400).json({ error: "Email already exists." });
            }
            const newUser = new usersModel.User({
                email: email,
                password: password
            })
            newUser.save((err, data) => {
                if (err) return res.status(404).json({ error: err });
                return res.status(200).json({ success: data });
            });
        })
    }
    else {
        return res.status(400).json({ error: "Something went wrong!" });
    }
}
const updateCoins2 =  (req, res) => {
    const { id } = req.params;
    const { coins2 } = req.body;
    // console.log(id);
    // const idExists = await usersModel.User.findById(id);
    // if (!idExists) {
    //     return res.status(400).json({ error: "Book Not Valid." });
    // }
    usersModel.User.findByIdAndUpdate({ _id: id }, {coins2: coins2}, { new: true, runValidators: true }, (err, data) => {
        if (err) return res.status(404).send(err);
        return res.status(200).send(data);
    });
}
module.exports = {
    getAllUsers,
    addNewUser,
    updateCoins2
}