const About = require("../models/About")
const User = require("../models/User")
const Address = require("../models/Address")

const dashboardController = async (req, res) => {
    const about = await About.findAll();
    const user = await User.findByPk(req.user.id);
    const address = await Address.findAll({
        where : {
            userId : req.user.id
        }
    }) || []

    res.render("user_interface", {
        about, 
        user, 
        address,
        flash : req.flash()
    })
}

module.exports = {
    dashboardController
}