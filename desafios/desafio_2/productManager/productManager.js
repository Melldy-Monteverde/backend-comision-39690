const fs = require('fs/promises');

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  async idGnerator(prodList) {
    try {
      if (prodList.length === 0) return 1;
      return prodList[prodList.length - 1].id + 1;
    } catch (error) {
      console.log(error)
    }
  }

  async addProd(prod) {
    try {
      if (
        !prod.code ||
        !prod.title ||
        !prod.description ||
        !prod.thumbnail ||
        !prod.price ||
        !prod.stock
      ) {
        throw new Error('some product properties are empty')
      } else {
        const dbProd = await this.getAllProd();

        const newId = await this.idGnerator(dbProd.products);
        const newProd = { id: newId, ...prod };
        dbProd.products.push(newProd)

        await fs.writeFile(this.path, JSON.stringify(dbProd));
        return newProd
      }

    } catch (error) {
      console.log(error);
    }
  }

  async getAllProd() {
    try {
      const prodListDB = await fs.readFile(this.path, 'utf-8');
      console.log(prodListDB);
      return JSON.parse(prodListDB);
    } catch (error) {
      console.log(error);
      throw new Error('there are not products');
    }
  }

  async getProdById(id) {
    try {
      const prodListDB = await this.getAllProd()
      const prodFound = prodListDB.find(p => p.id === id)
      console.log(prodFound)
      return prodFound ? prodFound : console.log(`product with id: ${id} not found`);

    } catch (error) {
      console.log(error);
    }
  }

  async updProd(id, data) {
    try {
      const prodListDB = await this.getAllProd()
      const prodId = await this.getProdById(id)

      let index = prodListDB.findIndex(p => p.id === id)
      prodListDB[index] = { ...prodId, ...data };
      await fs.writeFile(this.path, JSON.stringify(prodListDB))
      return console.log(prodListDB)
    } catch (error) {
      console.log(error)
    }
  }

  async delProdById(id) {
    try {
      const prodListDB = await this.getAllProd()
      const prodFiltered = prodListDB.filter(p => p.id !== id)
      console.log(prodFiltered)
      return console.log(`product with id: ${id} removed`)
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = ProductManager
