const products = [
    { name: 'xiaomi redmi note 4x phone', price: 12000 },
    { name: 'samsung champ phone', price: 6000 },
    { name: 'Nokia c12 phone', price: 10000 },
    { name: 'Apple smart watch', price: 15000 },
    { name: 'samsung smart watch', price: 5000 },
    { name: 'xiaomi smart watch', price: 4000 },
    { name: 'lg samrt tv', price: 39000 },
    { name: 'samsung samrt tv', price: 44000 },
    { name: 'sony samrt tv', price: 50000 },
    { name: 'walton samrt tv', price: 25000 },
    { name: 'walton super cooler ac', price: 30000 },
    { name: 'whilepool super cooler ac', price: 60000 },
    { name: 'samsung laptop', price: 56000 },
    { name: 'apple laptop', price: 109000 },
    { name: 'asus laptop', price: 69000 },
];

for (const product of products) {
    if (product.price < 60000) {
        // break;
        continue;
    }
    console.log(product);
}