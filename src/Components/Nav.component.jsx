import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Navbar.styles.scss'

const Nav = () => (
  <div>
    <nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#BarraNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i  className="fas fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="BarraNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/anime" className="nav-link" activeClassName="active">Animes</NavLink>
          </li>
        </ul>
      </div>

    </nav>
  </div>
)

export default Nav