import ItemCount from "../ItemCount/ItemCount"

const addToCart = (number) => {
    console.log(`Se agregaron al carrito ${number} items`)   
  }

const Catalogue = () => {
    return(
        <div>
        <h1>Este es el catalogo</h1>
        <ItemCount stock={10} initial={1} onAdd={addToCart}    />
        </div>
        
    )
}

export default Catalogue; 