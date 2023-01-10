const controller = {
    loginRegister: (req,res) => {
        res.render("users/login-register",{
            title: ["Acceder"],
            styles: ["/login-register"]
        })
    }

}

module.exports = controller;