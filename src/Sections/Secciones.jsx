import React, { Fragment } from 'react'

const Secciones = ({ items, title }) => (
  <Fragment>

    <div className="seccion-var">
      <h2>{title}</h2>
    </div>

    <div className="row mx-auto">
      {
        items.filter((item, idx) => idx < 6).map(item => (
          <Fragment>
            <div className="col-12 col-md-2 mt-2 mb-2">
              <a className="" key={item.id} href={`/anime/${item.link}`}>
                <img src={item.img} alt="" className=" img-fluid caratulas" loading="lazy" />
              </a>
            </div>
          </Fragment>
        ))
      }
    </div>
  </Fragment>
)

export default Secciones;