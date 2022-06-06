"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = exports.Product = void 0;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get getName() {
        return this.name;
    }
    get getPrice() {
        return this.price;
    }
    set setName(name) {
        this.name = name;
    }
    set setPrice(price) {
        this.price = price;
    }
}
exports.Product = Product;
class ProductManager {
    constructor() {
        this.products = [];
    }
    get getAll() {
        return this.products;
    }
    set add(product) {
        this.products.push(product);
    }
}
exports.ProductManager = ProductManager;
