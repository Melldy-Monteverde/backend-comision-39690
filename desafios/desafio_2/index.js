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

const main = async () => {

  // Bringing existing data
  // await getAllProd();

  // Creating a new element

  await addProd({
    title: "title 14",
    description: "description 14",
    price: 200,
    thumbnail: "img path",
    code: "code-2",
    stock: 25,
  });

  await getAllProd();

  // await getProdById(1);
  // await getProdById(2);

  // await updProd(13, {
  //   title: "Updated product title to 50",
  //   description: "Updated description to 50",
  // });

  // await getAllProd();
  // await delProdById(14);
}

main()
