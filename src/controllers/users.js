const controller = {
    loginRegister: (req,res) => {
        res.render("users/login-register",{
            title: ["Acceder"],
            styles: ["/login-register"]
        })
    },
    profile: (req,res) => {
        res.render("users/profile",{
            title: ["Perfil"],
            styles: ["/profile"]
        })
    }

}

module.exports = controller;