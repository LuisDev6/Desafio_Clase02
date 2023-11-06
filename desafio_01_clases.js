//Declaro la clase ProductManager con sus metodos
class ProductManager {

    constructor() {
        this.products = [];
    }

    addProduct(product) {
        const codeProduct = this.products.find((products) => products.code === products.code);

        if (codeProduct) {
            console.log("********[]-This code already exists-[]********");
            return;
        } else {
            product.code = this.products[this.products.length - 1].code + 1;
            this.products.push(product)
        }

    }
    getProducts() {
        console.log(this.products);
    }
    getProductById(code) {
        let findId = this.products.find((product) => product.code === code);

        if(findId){
            let productFoud =
        }
        console.log(findId);
        return findId;
    }
}

//Declaro la clase Product
class Product {

    constructor(title, description, price, thumbnail, code, stock) {

        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

const productManager = new ProductManager();

productManager.getProducts();

productManager.addProduct( new Product("producto de prueba", "esto es un producto de prueba", 200, "Sin imagen", 0, 25));

productManager.getProducts();

productManager.addProduct( new Product("producto de prueba", "esto es un producto de prueba", 200, "Sin imagen", 1, 25));

productManager.getProductById(1)

productManager.getProductById(2)