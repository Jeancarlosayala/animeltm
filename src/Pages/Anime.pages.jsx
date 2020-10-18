import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Anime({ id, img, link, anime}) {

  return (
    <div>
      
      <Link key={id} to={link}>
        <img key={id} className="img-fluid caratulas " loading="lazy" src={img} alt="" />
      </Link>
      
      <div className="text-center">
        <h6> {anime} </h6>
      </div>

    </div>
  )
}

export default withRouter(Anime)