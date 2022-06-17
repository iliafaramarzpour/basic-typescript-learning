class UserEntity {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }
}

class ProductEntity {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }
}

class DataCollection<T> {
  private items: T[] = [];

  public addItem(item: T) {
    this.items.push(item);
  }

  public printNames() {
    this.items.forEach((item: T) => {
      if (item instanceof UserEntity || item instanceof ProductEntity) {
        return console.log(`this name is ${item.getName()}`);
      }
      console.log(item);
    });
  }
}

const userCollection = new DataCollection<UserEntity>();
userCollection.addItem(new UserEntity("ilia"));
userCollection.addItem(new UserEntity("mmd"));
userCollection.printNames();

const productCollection = new DataCollection<ProductEntity>();
productCollection.addItem(new ProductEntity("table"));
productCollection.addItem(new ProductEntity("lamp"));
productCollection.printNames();

const tempCollection = new DataCollection<string>();
tempCollection.addItem("blah blah");
tempCollection.addItem("foo");
tempCollection.printNames();
