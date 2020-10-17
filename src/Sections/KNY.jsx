import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import capKny from '../Json/kny.json'

import Plyr from "plyr";
import "plyr/dist/plyr.css";


export default function KNY() {
  const location = useLocation()
  console.log(location);

  const [capitulosKny] = useState(capKny)

  const [currentVideo, setCurrentVideo] = useState(0)
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    setPlayer(new Plyr("#player"))
    const videoSource = document.getElementById('video-source');
    videoSource.src = capitulosKny[currentVideo].url;

  }, [])

  const handleVideo = (i) => {
    player.destroy()
    setCurrentVideo(i)
    setPlayer(new Plyr("#player"))
    const videoSource = document.getElementById('video-source');
    videoSource.src = capitulosKny[i].url;
  }



  return (
    <div>
      <div className="card shadow mb-3">
        <header className="card-header">
          <h5 className="card-title mb-0">Kimetsu No Yaiba</h5>
        </header>

        <div className="col-12 col-md-12">
          <video id="player" playsInline controls data-poster="." style={{ minHeight: '50vh' }}>
            <source id="video-source" type="video/mp4" />
          </video>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-12">
              <aside className="list-group">
                {
                  capitulosKny.map((video, i) => {
                    return (
                      <button
                        key={i}
                        className={`list-group-item list-group-item-action ${i === currentVideo && 'list-group-item-primary'}`}
                        onClick={() => {
                          i !== currentVideo && handleVideo(i)
                        }}>
                        Capitulo {video.id}
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