import { Link } from "react-router-dom"

import './Navbar.css'

function Navbar() {


  return (
    <nav className="navbar">
        <h2>
            <Link to={"/"}>Repositórios</Link>
        </h2>
        <ul id="links-nav">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={'/new'} className="new-btn">Novo Post</Link>
          </li>
          <li>
            <Link to={'/adm'} >Gerenciar</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar