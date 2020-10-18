import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import '../Styles/Carousel.styles.css'

function CapitulosAnime({ id, url, capitulo, match }) {

  return (
    <Fragment>
      <div className="carousel-item">
        <iframe  src={url} allowFullScreen></iframe>
        <div className="carousel-caption d-none d-md-block">
          <h5>Capitulo {capitulo} </h5>
          <h6>Da doble click para ingresar ver el video en pantalla completa</h6>
        </div>
      </div>

    </Fragment>
  )
}

export default withRouter(CapitulosAnime)