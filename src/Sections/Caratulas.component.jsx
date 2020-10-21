import React, { Fragment, useState } from 'react'
import caratulasList from '../Json/caratulas'
import { NavLink } from 'react-router-dom'

import '../Styles/Caratulas.styles.scss'
import Anime from './Anime.pages'

export default function Caratulas() {

  const [caratulas] = useState(caratulasList)
  const [search, setSearch] = useState('')

  const filteredAnimes = caratulas.filter(item => {
    return item.anime.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#BarraNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="BarraNav">

          <ul className="navbar-nav">
            <li className="nav-item">
              <input className="mt-2 form-control" placeholder="Busca tu anime preferido" type="text" onChange={e => setSearch(e.target.value)} />
            </li>
          </ul>

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

      <div className=" row mx-auto mt-2 ">

        {
          filteredAnimes.map(({ id, ...otherSectionProps }) => (
            <div key={id} className="col-md-2">
              <Anime key={id} {...otherSectionProps} />
            </div>
          ))
        }
      </div>
    </Fragment>
  )
}