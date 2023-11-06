//Declaro la clase ProductManager con sus metodos
class ProductManager {

    constructor() {
        this.products = [];
    }

    addProduct(product) {
        const codeProduct = this.products.find((product) => product.code === product.code);

        if (codeProduct) {
            console.log("********[]-This code already exists-[]********");
        } else {
            if (this.products.length === 0) {
                product.code = 1;
                this.products.push(product)

            } else {
                product.code = this.products[this.products.length - 1].code + 1;
                this.products.push(product)
            }
        }

    }
    getProducts() {
        console.log(this.products);
    }
    getProductById(code) {
        let findId = this.products.filter((product) => product.code === code);

        if (findId.length === 0) {
            console.log("********[]-No product found with this code-[]********")
            
        } else {
            console.log(findId)
        }
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

productManager.addProduct(new Product("producto de prueba", "esto es un producto de prueba", 200, "Sin imagen", 0, 25));

productManager.getProducts();

productManager.addProduct(new Product("producto de prueba", "esto es un producto de prueba", 200, "Sin imagen", 0, 25));

productManager.getProductById(1)

productManager.getProductById(2)
