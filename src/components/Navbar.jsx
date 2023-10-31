import { Link } from "react-router-dom"

import './Navbar.css'

function Navbar() {


  return (
    <nav className="navbar">
        <h2>
            <Link to={"/Blog_react_api"}>Blog</Link>
        </h2>
        <ul id="links-nav">
          <li>
            <Link to={"/Blog_react_api"}>Home</Link>
          </li>
          <li>
            <Link to={'/Blog_react_api/new'} className="new-btn">Novo Post</Link>
          </li>
          <li>
            <Link to={'/Blog_react_api/adm'} >Gerenciar</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar