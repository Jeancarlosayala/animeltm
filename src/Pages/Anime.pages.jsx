import React from 'react'
import { withRouter } from 'react-router-dom'

function Anime({ id, img, link, anime, history }) {

  return (
    <div>
      
      <a key={id} href="" onClick={() => history.push(`${link}`)}>
        <img key={id} className="img-fluid caratulas " loading="lazy" src={img} alt="" />
      </a>
      
      <div className="text-center">
        <h6> {anime} </h6>
      </div>

    </div>
  )
}

export default withRouter(Anime)