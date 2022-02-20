const products = [
    {
        id:1,
        name: 'Milktank',
        price: 'usd 10.99', 
        category: 'Peluches',
        imgfront:'https://www.pokemoncenter.com/products/images/P6366/701-06253/P6366_701-06253_01_thumb.jpg',
        imgback: 'https://www.pokemoncenter.com/products/images/P6366/701-06253/P6366_701-06253_02_thumb.jpg', 
        stock:'30', 
        description: 'Descripcion de peluche'},
    {
        id:2, 
        name: 'Mimikyu Hat', 
        price: 'usd 22.99', 
        category: 'Ropa',
        imgfront:'https://www.pokemoncenter.com/products/images/P7479/741-08995/P7479_741-08995_01_thumb.jpg', 
        imgback:'https://www.pokemoncenter.com/products/images/P7479/741-08995/P7479_741-08995_02_thumb.jpg', 
        stock: '15', 
        description: 'Descripcion de sombrero'} ,
    {
        id:3, 
        name: 'Pokemon Chess Set', 
        price: 'usd 199.99', 
        category: 'Deco',
        imgfront:'https://www.pokemoncenter.com/products/images/P7671/710-09832/P7671_710-09832_01_thumb.jpg',
        imgback: 'https://www.pokemoncenter.com/products/images/P7671/710-09832/P7671_710-09832_02_thumb.jpg', 
        stock: '20', 
        escription: 'Descripcion de ajedrez'}
]


export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    },2000)
})

export const getProduct = (id) => {
    console.log(id)
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 2000)
    })
}

export const getProductsByCategory=(categoryId) => {
    return new Promise((resolve)=>{
        if (categoryId != 'Home'){
            const prod = products.filter(p => p.category === categoryId)
            setTimeout(() => {
                resolve(prod)
            }, 2000)
        } else {
            <getProducts/>
        }

    })
}