import { Product, ProductManager } from "./product";

let laptop = new Product("Laptop", 20000);
let iphone = new Product("Iphone", 100000);

let productManager = new ProductManager();
productManager.add = laptop;
productManager.add = iphone;

console.log(productManager.getAll);
