import React from 'react'
import { withRouter } from 'react-router-dom'

function Anime({id, img, link, anime, match, capitulos}) {

  return (
    <div>
      
      <a key={id} href={`${match.url}/${link}`}>
        <img key={id} className="img-fluid caratulas mt-3"  src={img} alt="" />
      </a>
      
      <div className="text-center titulo-caratula">
        <h6> {anime} <span className="badge badge-warning"> {capitulos} Cap </span> </h6>
      </div>

    </div>
  )
}

export default withRouter(Anime)
