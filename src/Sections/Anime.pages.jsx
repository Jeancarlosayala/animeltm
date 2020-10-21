import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Anime({ id, img, link, anime, match, capitulos}) {

  return (
    <div>
      
      <Link key={id} to={`${match.url}/${link}`}>
        <img key={id} className="img-fluid caratulas " loading="lazy" src={img} alt="" />
      </Link>
      
      <div className="text-center titulo-caratula">
        <h6> {anime} <span className="badge badge-warning"> {capitulos} Cap </span> </h6>
      </div>

    </div>
  )
}

export default withRouter(Anime)