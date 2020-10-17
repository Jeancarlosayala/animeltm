import React, { useState } from 'react'
import caratulasList from '../Json/caratulas.json'

import '../Styles/Home.styles.css'
import Anime from '../Pages/Anime.pages'

export default function Caratulas() {

  const [caratulas] = useState(caratulasList)

  return (
    <div className=" row mx-auto mt-2 ">
      {
        caratulas.map(({ id, ...otherSectionProps }) => (
          <div key={id} className="col-md-2">
            <Anime key={id} {...otherSectionProps} />
          </div>
        ))
      }
    </div>
  )
}