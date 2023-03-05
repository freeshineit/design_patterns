// ECMA 2015 Proxy
let products = new Proxy([
  { name: "Firefox", type: "browser" },
  { name: "SeaMonkey", type: "browser" },
  { name: "Thunderbird", type: "mailer" },
], {
  get: function (obj, prop) {
    // 默认行为是返回属性值， prop ?通常是一个整数
    if (prop in obj) {
      // @ts-ignore
      return obj[prop];
    }

    // 获取 products 的 number; 它是 products.length 的别名
    if (prop === "number") {
      return obj.length;
    }

    let result, types = {};

    for (let product of obj) {
      if (product.name === prop) {
        result = product;
      }
      // @ts-ignore
      if (types[product.type]) {
        // @ts-ignore
        types[product.type].push(product);
      } else {
        // @ts-ignore
        types[product.type] = [product];
      }
    }

    // 通过 name 获取 product
    if (result) {
      return result;
    }

    // 通过 type 获取 products
    if (prop in types) {
      // @ts-ignore
      return types[prop];
    }

    // 获取 product type
    if (prop === "types") {
      return Object.keys(types);
    }

    return undefined;
  },
});

export default products;
