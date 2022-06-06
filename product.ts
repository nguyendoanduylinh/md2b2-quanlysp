export class Product {
  private name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  get getName(): string {
    return this.name;
  }
  get getPrice(): number {
    return this.price;
  }
  set setName(name: string) {
    this.name = name;
  }
  set setPrice(price: number) {
    this.price = price;
  }
}

export class ProductManager {
  private products: any[] = [];
  constructor() {}
  get getAll() {
    return this.products;
  }
  set add(product: Product) {
    this.products.push(product);
  }
}
