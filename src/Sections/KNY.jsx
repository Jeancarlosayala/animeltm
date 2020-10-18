import React, { Fragment, useState } from 'react'

import capKny from '../Json/kny.json'
import Scroll from '../Components/ScrollUp.component'

import CapitulosAnime from './capitulosKny'


export default function KNY() {

  const [capitulos] = useState(capKny)



  return (

    <Fragment>
      <div>
        <Scroll />

      </div>

      <div id="capAnime" class="carousel slide" data-ride="carousel" data-interval="false">
        <div id="capAnime" className="carousel slide" data-ride="carousel" data-interval="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://firebasestorage.googleapis.com/v0/b/apkpeliculas-c9378.appspot.com/o/KNY.jpg?alt=media&token=3e3e8eac-8374-4c8a-b48b-be00d02a112a" alt="" />
            </div>
            
              {
                capitulos.map(({ id, ...otherPropsCollections}) => (
                  <CapitulosAnime key={id} {...otherPropsCollections} />
                ))
              }
          </div>
        </div>

        <a class="carousel-control-prev"   href="#capAnime" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon"  aria-hidden="true"></span>
          <span class="sr-only" style={{background: "#000"}}>Previous</span>
        </a>
        <a class="carousel-control-next" href="#capAnime" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

    </Fragment>
  )
}