//Declaro la clase ProductManager con sus metodos
class ProductManager {

    constructor(){
        this.pruducts=[];
        this.counter=1;   
    }

    addProduct(product){
        const codeProduct = this.products.find((product) => product.code === products.code);

        if(codeProduct){
            console.log("This code already exists");
            return;
        }else{
            product.id = this.counter;
            this.counter ++;
            this.products.push(product)
        }

    }
    getProduct(){
        console.log(this.products);
    }
    getProductById(code){
        let findId = this.products.find((product) => product.id === id);
        console.log(findId);
        return findId;
    }
}

//Declaro la clase Product
class Product{

    constructor(title, description, price, thumbnail, code, stock){

        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
        

}