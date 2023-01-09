const controller = {
    home: (req,res)=>{
        res.render("home",{
            title: "Home",
            styles: ["/home"]
        });
    }
}

module.exports = controller;