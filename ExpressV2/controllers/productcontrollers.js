

const product = [
    {
      id: 1,
      item: "fridge",
      category: "mobile",
      price: 5000,
      color: "white",
    },
    {
      id: 2,
      item: "pant",
      category: "mobile",
      price: 10000,
      color: "blue",
    },
    {
      id: 3,
      item: "cooler",
      category: "appliance",
      price: 20000,
      color: "red",
    },
  ];

const getAllcontrollers = (req,res)=> {
    res.send(products)
}

const createProduct = (req,res)=> {
console.log("body", req.body)
    product.push(req.body)
    res.send(product)
}

module.exports = {getAllcontrollers,createProduct}