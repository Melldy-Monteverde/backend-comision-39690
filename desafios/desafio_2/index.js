const path = require('path');
const dbPath = path.join(`${__dirname}/DB.json`);
const ProductManager = require('./productManager/productManager.js');

const prodManager = new ProductManager(dbPath)

// Instances
const getAllProd = async () => {
  try {
    const prodListDB = await prodManager.getAllProd(dbPath);
    console.table(prodListDB);
  } catch (error) {
    console.log(error);
  }
};

const getProdById = async (id) => {
  const prodListDB = await prodManager.getProdById(id);
  console.log(prodListDB);
};

const addProd = async (product) => {
  const prodListDB = await prodManager.addProd(product);
};

const updProd = async (id, data) => {
  const prodListDB = await prodManager.updProd(id, data);
};

const delProdById = async (id) => {
  const prodListDB = await prodManager.delProdById(id);
};

// Bringing existing data
getAllProd();

// Creating a new element
addProd({
  title: "title 3",
  description: "description 3",
  price: 200,
  thumbnail: "img path",
  code: "code-3",
  stock: 25,
});

getAllProd();
// getProdById(1);
// getProdById(2);

updProd(1, {
  title: "Updated product title",
  description: "Updated description",
});

delProdById(1);
