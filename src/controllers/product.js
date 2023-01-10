const controller = {
    detail: (req,res) => {
        res.render("products/detail", {
            styles: ["/detail"],
            title: ["Detalles"]
        })
    }
}

module.exports = controller;