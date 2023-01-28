class ProductManager {
  constructor() {
    this.products = [];
    this.currentId = 0;
  }

  addProduct(prod) {
    if (
      prod.code == undefined ||
      prod.title == undefined ||
      prod.description == undefined ||
      prod.price == undefined ||
      prod.thumbnail == undefined ||
      prod.stock == undefined
    ) {
      console.log("some product properties are empty, check it");
    } else if (this.products.find(p => p.code === prod.code)) {
      console.log(`prod with code: ${prod.code} already exists`);
    } else {
      this.currentId = ++this.currentId;
      prod.id = this.currentId;
      this.products.push(prod);
      console.log(`prod with id: ${prod.id} was added`);
    }
  }

  getProductById(prodId) {
    return (this.products.includes(prodId))
    ? console.log(`product with id: ${prodId} not exists`)
    : this.products.find((p) => p.id === prodId)
  }

  getAllProducts() {
    return this.products
  }
}

const pManager = new ProductManager();

let p1 = {
  code: "p-1",
  title: "product 1",
  description: "description 1",
  stock: 20,
  price: 10,
  thumbnail: "thumbnail path",
};

let p2 = {
  code: "p-1",
  title: "product 2",
  description: "description 2",
  stock: 20,
  price: 50,
  thumbnail: "thumbnail path",
};

let p3 = {
  code: "p-3",
  title: "product 3",
  description: "description 3",
  stock: 20,
  price: 40,
  thumbnail: "thumbnail path",
};