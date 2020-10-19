import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Animes from '../Json/capitulos'


export default function Capitulos(props) {

  const nameAnime = props.match.params.anime
  const animes = Animes

  const [videoAnime, setVideoAnime] = useState(animes[nameAnime][0].url)
  const [titulo, setTitle] = useState(animes[nameAnime].title)

  const renderVideo = () => {
    return (
      <div>

        <div className="embed-responsive embed-responsive-16by9">
          <iframe src={`//drive.google.com/file/d/${videoAnime}/preview`} className="embed-responsive-item" allowFullScreen></iframe>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Fragment>
        <div className="card-header">
          <h5 className="card-title"> {titulo} </h5>
        </div>
        
        <div className="row mx-auto mt-4">
          <div className="col-12 col-md-6 ">
            {renderVideo()}
          </div>
          <div className="col-12 col-md-6 mt-4">
            <div className="card">
              {
                animes[nameAnime].map(item => {
                  return <Link to="#" activeClassName="" style={{background: "#000"}}  className="btn btn-light" onClick={() => {
                    setVideoAnime(item.url)
                  }}> <h6 style={{color: '#fff'}}>Capitulo {item.capitulo}</h6> </Link>
                })
              }
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  )

}