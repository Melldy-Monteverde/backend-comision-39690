const path = require('path');
const dbPath = path.join(`${__dirname}/DB.json`);
const ProductManager = require('./productManager/productManager.js');

const prodManager = new ProductManager(dbPath)

// Instances
const getAllProd = async () => {
  try {
    const productsBaseList = await prodManager.getAllProd(dbPath);
    console.log(productsBaseList);
  } catch (error) {
    console.log(error);
  }
};

const getProdById = async (id) => {
  const productsBaseList = await prodManager.getProdById(id);
};

const addProd = async (product) => {
  const productsBaseList = await prodManager.addProd(product);
};
const updProd = async (id, data) => {
  const productsBaseList = await prodManager.updProd(id, data);
};
const delProdById = async (id) => {
  const productsBaseList = await prodManager.delProdById(id);
};

// Bringing existing data
getAllProd();

// Creating a new element
addProd({
  title: "title 1",
  description: "description 1",
  price: 200,
  thumbnail: "img path",
  code: "code-1",
  stock: 25,
});

getAllProd();
getProdById(1);
getProdById(20);

updProd(1, {
  title: "Updated product title",
  description: "Updated description",
});

delProdById(1);
