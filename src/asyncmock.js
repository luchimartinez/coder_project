const products = [
    {id:1, name: 'Milktank', price: 'usd 10.99', category: 'Peluches',img:'https://www.pokemoncenter.com/products/images/P6366/701-06253/P6366_701-06253_01_thumb.jpg', stock:'30'},
    {id:2, name: 'Mimikyu Hat', price: 'usd 22.99', category: 'Ropa',img:'https://www.pokemoncenter.com/products/images/P7479/741-08995/P7479_741-08995_01_thumb.jpg', stock: '15'} ,
    {id:3, name: 'Pokemon Chess Set', price: 'usd 199.99', category: 'Deco',img:'https://www.pokemoncenter.com/products/images/P7671/710-09832/P7671_710-09832_01_thumb.jpg', stock: '20'}
]


export const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
    },2000)
})
