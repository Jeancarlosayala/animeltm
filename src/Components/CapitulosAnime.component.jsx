import React from 'react'
import { useLocation } from 'react-router-dom'

export default function CapAnime () {

  const location = useLocation()
  console.log(location);

  return(
    <div>
      <p>Hola</p>
    </div>
  )
}