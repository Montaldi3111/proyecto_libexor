const controller = {
    detail: (req,res) => {
        res.render("products/detail", {
            styles: ["/detail"],
            title: ["Detalles"]
        })
    },
    cart: (req,res) => {
        res.render("products/cart", {
            styles: ["/cart"],
            title:["Carro"]
        })
    }
}

module.exports = controller;