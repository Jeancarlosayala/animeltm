import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

import Animes from '../Json/capitulos'
import infoAnime from '../Json/infoAnime'

import Scroll from '../Components/ScrollUp.component'
import '../Styles/Capitulos.styles.scss'

export default function Capitulos(props) {

  const nameAnime = props.match.params.anime

  const animes = Animes
  const iAnime = infoAnime

  const [videoAnime, setVideoAnime] = useState(animes[nameAnime][0].url)
  const [capAnime, setCapAnime] = useState(animes[nameAnime][0].capitulo)
  const [infAnime] = useState(iAnime[nameAnime][0])

  const renderVideo = () => {
    return (
      <div>
        <h5 style={{ color: "#fff" }}> Capitulo {capAnime} </h5>

        <div className="embed-responsive embed-responsive-16by9">
          <iframe title="{animes[nameAnime].title}" src={`//drive.google.com/file/d/${videoAnime}/preview`} className="embed-responsive-item" allowFullScreen></iframe>
        </div>
      </div>
    )
  }

  function renderInfo() {



    return (
      <div>
        <div id="resumenAnime" className="carousel slide" data-ride="carousel" data-interval="false">

          <div className="carousel-inner">
            <div className="carousel-item active">

              <img src={infAnime.portada} loading="lazy" className="img-fluid" alt="" />

              <div className="carousel-caption d-none d-lg-block sinopsis">
                <div className="row mx-auto mt-4 mb-4">
                  <div className="col-12 col-md-6">
                    <img src={infAnime.img} loading="lazy" className="img-fluid" alt="" />
                  </div>
                  <div className="col-12 col-md-6 ml-auto">
                    <h5> {infAnime.name} {infAnime.status === "completo" ?
                      (<span className="badge badge-success"> {infAnime.status}</span>) :
                      infAnime.status === "incompleto" ? (<span className="badge badge-warning"> {infAnime.status} </span>) :
                      (<span className="badge badge-primary"> {infAnime.status} </span>)}
                    </h5>
                    <p> {infAnime.sinopsis} </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div>
      <Fragment>
        <Scroll />


        {renderInfo()}

        <div className="mt-4">
          <div className=" mx-auto col-12 col-md-7 ">
            {renderVideo()}
          </div>
          <div className=" mx-auto col-12 col-md-7 mt-4">
            <div className="card">
              {
                animes[nameAnime].map(item => {
                  return <Link key={item.id} to="#" style={{ background: "#000" }} className="btn btn-light capitulos" onClick={() => {
                    setVideoAnime(item.url)
                    setCapAnime(item.capitulo)
                  }}> <h6 style={{ color: '#fff' }}>Capitulo {item.capitulo} </h6> </Link>
                })
              }
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  )

}