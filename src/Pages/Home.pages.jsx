import React, { Fragment, useEffect, useState } from 'react'
import Scroll from '../Components/ScrollUp.component';
import Secciones from '../Sections/Secciones';
import '../Styles/Seccion.styles.scss'

export default function Home() {

  useEffect(() => {
    fetch('https://secciones-d5115.firebaseio.com/secciones.json')
      .then(res => res.json())
      .then(data => {
        setSecciones(data)
      })
  }, [])

  useEffect(() => {
    fetch('https://apkpeliculas-c9378.firebaseio.com/portadas.json')
      .then(res => res.json())
      .then(data => {
        setPortadas(data)
      })

    document.title = 'AnimeLTM'
  }, [])

  const [secciones, setSecciones] = useState([])
  const [portada, setPortadas] = useState([])

  return (
    <Fragment>
      <div id="secciones" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="img-fluid portada" loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/apkpeliculas-c9378.appspot.com/o/Portadas%2FBeastars.jpg?alt=media&token=4a1d447e-065c-48bf-976c-dde9ad68ff7a" alt="" />
          </div>

          {
            portada.map(portadas => (
              <div className="carousel-item">
                <img className="img-fluid portada" loading="lazy" src={portadas.img} alt="" />
              </div>
            ))
          }
        </div>
      </div>

      <div className="">
        {
          secciones.map(({ id, ...otherPropsCollections }) => (
            <Secciones key={id} {...otherPropsCollections} />
          ))
        }
      </div>

      <Scroll />
    </Fragment>
  )
}