import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

import capBnh from '../Json/bng.json'

import Plyr from "plyr";
import "plyr/dist/plyr.css";
import Scroll from '../Components/ScrollUp.component';


export default function BNH() {
  const location = useLocation()
  console.log(location);

  const [capitulos] = useState(capBnh)

  const [currentVideo, setCurrentVideo] = useState(0)
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    setPlayer(new Plyr("#player"))
    const videoSource = document.getElementById('video-source');
    videoSource.src = capitulos[currentVideo].url;
  }, [capitulos])

  const handleVideo = (i) => {
    player.destroy()
    setCurrentVideo(i)
    setPlayer(new Plyr("#player"))
    const videoSource = document.getElementById('video-source');
    videoSource.src = capitulos[i].url;
  }



  return (
    <div>
      <Scroll />
      <div className="card shadow mb-3">
        <header className="card-header">
          <h5 className="card-title mb-0">
            <Link to="/" style={{ color: "#000" }}><i class="fas fa-arrow-left"></i></Link> Boku No Hero
          </h5>
        </header>

        <div className="col-12 col-md-10 mx-auto">
          <video id="player" playsInline controls data-poster="." style={{ minHeight: '50vh' }}>
            <source id="video-source" type="video/mp4" />
          </video>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-10 mx-auto">
              <aside className="list-group">
                {
                  capitulos.map((video, i) => {
                    return (
                      <button
                        key={i}
                        className={`list-group-item list-group-item-action ${i === currentVideo && 'list-group-item-primary'}`}
                        onClick={() => {
                          i !== currentVideo && handleVideo(i)
                        }}>
                        Capitulo {video.id} - {video.temporada}
                      </button>
                    )
                  })
                }
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}