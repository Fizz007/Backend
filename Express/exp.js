const express = require("express");

const app = express();
app.use(express.json()); //middleware
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

app.get("/login", (req, res) => {
  console.log("method", req.method);
  console.log("url", req.url); //url and path are same but url show query param also but path can't
  console.log("path", req.path);
  console.log("query", req.query);
  res.send(`succesfully logged in`);
});

app.get("/", (req, res) => {
  console.log("get");
  res.send("<h1>This is home in Get tag</h1>");
});
app.post("/", (req, res) => {
  console.log("post");
  res.send("<h1>This is home in Post tag</h1>");
});

app.get("/products/:productID", (req, res) => {
  console.log("params", req.params);
  const pd = product.find((e) => e.id === Number(req.params.productID));
  {
    pd ? res.send(pd) : res.send({});
  }
  // res.send(product)
});

app.get("/data", (req, res) => {
  res.send({ name: "faisal", age: "20" });
});

app.get("/products", (req, res) => {
  console.log("query", req.query);
  const { category, price } = req.query;
  console.log("categ", category);
  console.log("price", price);

  if (category) {
    const prod = product.filter((e) => e.category === category);
    res.send(prod);
  }
  if (price) {
    const prod = product.filter((e) => e.price === +price);
    res.send(prod);
  } else {
    res.send(product);
  }
});

app.get("/products", (req, res) => {
  console.log("this is sp prod");
  res.send(product);
});
app.post("/products", (req, res) => {
  console.log("post", req.body);
  product.push(req.body);
  res.send(product);
});

app.put("/products/:id", (req, res) => {
  console.log("params", req.params);
  console.log("body", req.body);
  //   product.forEach((elem, i) => {
  //     if (elem.id === +(req.params.id)) {
  //       product[i] = req.body;
  //     }

  // });
  const elem = product.indexOf((elem, i) => elem.id === Number(req.params.id));
  product[elem] = req.body;

  res.send(product);
});

app.patch("/products/:id", (req, res) => {
  console.log("params", req.params);
  console.log("body", req.body);
  const elementIndex = product.indexOf(
    (elem, i) => elem.id === Number(req.params.id)
  );
  if (elementIndex !== -1)
    product[elementIndex] = { ...product[elementIndex], ...req.body };
  res.send(product);
});

app.delete("/products/:id", (req, res) => {
  console.log("params", req.params);
  const elementIndex = product.indexOf(
    (elem, i) => elem.id === Number(req.params.id)
  );
  if (elem !== -1) product.splice(elementIndex, 1);
  res.send(product);
});

app.get("*", (req, res) => {
  console.log("not found page");
  res.send("<h3>Page not found</h3>");
});

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Express ruuning at ${PORT}`);
});
