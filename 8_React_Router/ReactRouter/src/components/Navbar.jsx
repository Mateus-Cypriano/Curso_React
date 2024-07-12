import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        {/* 2 - Links com react router */}
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}

        {/* 8 - NavLink */}
        <NavLink to="/" 
        // className={({isActive}) => (isActive ? "esta-ativo" : "não-ativo")}
        >Home</NavLink>
        <NavLink to="/About">About</NavLink>


    </nav>
  )
}

export default Navbar