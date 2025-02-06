import { NavLink } from "react-router"

import "./Header.css"

function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Aplicação Frontend</NavLink>

        <div className="d-flex">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Entrar</NavLink>
            </li>
          </ul>
        </div>
      </div >
    </nav >
  )
}

export default Header
