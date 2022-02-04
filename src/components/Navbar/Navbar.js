import './Navbar.css'

const Navbar = () => {
    return(
      <nav className = 'Navbar'>
        <span className = "nav-logo">Pokemon Store</span>
          <div className ="nav-items">
              <a href= "/home">Home</a>
              <a href= "/pokebalss">Pokeballs</a>
              <a href= "/medicine">Medicine</a>
              <a href= "/other">Other Objects</a>
          </div>
      </nav>
    )
  }


  export default Navbar