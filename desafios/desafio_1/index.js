class ProductManager {
  constructor() {
    this.products = [];
    this.currentId = 0;
  }

  addProduct(prod) {
    if (
      !prod.code || !prod.title || !prod.description || !prod.price || !prod.thumbnail || !prod.stock
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
   return (this.products.find(p => p.id === prodId)) 
   ? this.products.find((p) => p.id === prodId)
   : console.log(`product with id: ${prodId} not found`)
  }

  getAllProducts() {
    return this.products
  }
}

const prodManager = new ProductManager();