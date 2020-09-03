import ProxyImage from "./image";
import products from "./proxy";

const image = new ProxyImage("1.jpg");

image.display();
console.log("---------------------------");
image.display();

console.log("\n---------------------------\n");

console.log(products[0]); // { name: 'Firefox', type: 'browser' }
// @ts-ignore
console.log(products["Firefox"]); // { name: 'Firefox', type: 'browser' }
// @ts-ignore
console.log(products["Chrome"]); // undefined
// @ts-ignore
console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
// @ts-ignore
console.log(products.types); // ['browser', 'mailer']
// @ts-ignore
console.log(products.number); // 3
