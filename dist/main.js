"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
let laptop = new product_1.Product("Laptop", 20000);
let iphone = new product_1.Product("Iphone", 100000);
let productManager = new product_1.ProductManager();
productManager.add = laptop;
productManager.add = iphone;
console.log(productManager.getAll);
