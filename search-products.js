const products = [
    { name: 'xiaomi redmi note 4x phone', price: 120000 },
    { name: 'samsung champ phone', price: 6000 },
    { name: 'Nokia c12 phone', price: 10000 },
    { name: 'Apple smart watch', price: 14000 },
    { name: 'samsung smart watch', price: 4000 },
    { name: 'xiaomi smart watch', price: 10000 },
    { name: 'lg samrt tv', price: 109000 },
    { name: 'samsung samrt tv', price: 129000 },
    { name: 'sony samrt tv', price: 209000 },
    { name: 'walton samrt tv', price: 90000 },
    { name: 'walton super cooler ac', price: 25000 },
    { name: 'whilepool super cooler ac', price: 110000 },
    { name: 'samsung laptop', price: 49000 },
    { name: 'apple laptop', price: 109000 },
    { name: 'asus laptop', price: 69000 },
];

function searchProducts(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(product);
        }
    }
    return matched;
}
const matched = searchProducts(products, 'phone');
console.log(matched);