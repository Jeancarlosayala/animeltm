import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Scroll from '../Components/ScrollUp.component'
import '../Styles/Capitulos.styles.scss'

export default function Capitulos(props) {

  const nameAnime = props.match.params.anime

  // const iAnime = infoAnime

  useEffect(() => {

    fetch(`https://animes-f1a00.firebaseio.com/animes/items/${nameAnime}.json`)
      .then(res => res.json())
      .then(data => {
        const result = data.map(anime => {
          return { title: anime.title, url: anime.url, capitulo: anime.capitulo }
        })
        setFetchAnimes(result)
        setVideoAnime(result[0].url)
        setCapAnime(result[0].capitulo)
        setTitleAnime(result[0].title)
      })

    fetch(`https://apkpeliculas-c9378.firebaseio.com/info_anime/items/${nameAnime}.json`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setInfoAnime(data)
      })
  }, [nameAnime])


  const [fetchAnimes, setFetchAnimes] = useState([])
  const [videoAnime, setVideoAnime] = useState("")
  const [capAnime, setCapAnime] = useState("")
  const [titleAnime, setTitleAnime] = useState("")
  const [infoAnime, setInfoAnime] = useState([])

  useEffect(() => {
    document.title = `AnimeLTM - ${nameAnime}`
  }, [nameAnime])

  const renderVideo = () => {
    return (
      <div>

        <div className="embed-responsive embed-responsive-16by9">
          <iframe title="Animet" src={`${videoAnime}/preview`} className="reproductor embed-responsive-item" allowFullScreen ></iframe>
        </div>
      </div>
    )
  }



  function Info({ nombre, capitulos }) {
    return (
      <Fragment>

        <div>
          <div className="info-anime">
            <div className="row mx-auto">
              <div className="mr-2">
                <h1 style={{ color: "#fff" }}> {nombre} </h1>
              </div>

              <div className="ml-2 mt-2">
                <span style={{ fontSize: "20px" }} className="badge badge-warning"> {capitulos} Capitulos </span>
              </div>

              <div className="col-12 col-md-12 mt-2">
                <h5 style={{ color: "#fff" }}>Capitulo {capAnime} - {titleAnime} </h5>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

  return (
    <div>
      <Fragment>
        <Scroll />

        <div className="row mx-auto mt-4 p-4" style={{background: " rgb(7, 7, 7)"}}>
          <div className="col-12 col-md-9 d-none d-md-block">
            {renderVideo()}
          </div>

          <div className="col-12 col-md-12 d-md-none d-block">
            {renderVideo()}
          </div>

          {/* =================================================================================== */}

          <div className="col-12 col-md-12 d-md-none d-block mt-4 mb-4">
            {
              infoAnime.map(({ id, ...otherPropsCollection }) => (
                <div className="d-md-block d-block">
                  <Info key={id} {...otherPropsCollection} />
                </div>
              ))
            }
          </div>

          {/* =================================================================================== */}


          <div className="col-12 col-md-3 d-md-block d-none">
            <div className="card capitulos-anime">
              {
                fetchAnimes.map(item => {
                  return <Link key={item.id} to="#" style={{ background: "#000" }} className="btn btn-light capitulos" onClick={() => {
                    setVideoAnime(item.url)
                    setCapAnime(item.capitulo)
                    setTitleAnime(item.title)
                  }}> <h6 style={{ color: '#fff' }}>Capitulo {item.capitulo} </h6> </Link>
                })
              }
            </div>
          </div>

          <div className="col-12 col-md-12 d-md-none d-block">
            <div className="card capitulos-anime">
              {
                fetchAnimes.map(item => {
                  return <Link key={item.id} to="#" style={{ background: "#000" }} className="btn btn-light capitulos" onClick={() => {
                    setVideoAnime(item.url)
                    setCapAnime(item.capitulo)
                    setTitleAnime(item.title)
                  }}> <h6 style={{ color: '#fff' }}>Capitulo {item.capitulo} </h6> </Link>
                })
              }
            </div>
          </div>
        </div>

        {
          infoAnime.map(({ id, ...otherPropsCollection }) => (
            <div className="d-none d-md-block">
              <Info key={id} {...otherPropsCollection} />
            </div>
          ))
        }

      </Fragment>
    </div>
  )
}

