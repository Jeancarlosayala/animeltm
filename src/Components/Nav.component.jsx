import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#BarraNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="BarraNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/animes" className="nav-link" activeClassName="active">Animes</NavLink>
          </li>
        </ul>
      </div>

    </nav>
  </div>
)

export default Nav