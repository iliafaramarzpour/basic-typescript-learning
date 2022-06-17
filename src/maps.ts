const items: Map<string, number> = new Map<string, number>();

items.set("ilia", 1);
items.set("mmd", 2);
items.forEach((value: number, key: string) => {
  console.log(`key : ${key} - value is : ${value}`);
});
