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

const prodManager = new ProductManager();