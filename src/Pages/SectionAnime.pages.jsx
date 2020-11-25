import React, { useEffect } from 'react'
import Caratulas from '../Sections/Caratulas.component'

export default function SectionAnime(){

  useEffect(() =>{
    document.title = 'AnimeLTM - Anime'
  }, [])

  return(
    <div>
      <Caratulas />
    </div>
  )
}