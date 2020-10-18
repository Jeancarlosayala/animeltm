import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import BNH from '../Sections/BNH'
import KNY from '../Sections/KNY'


export default function Capitulos() {

  const location = useLocation()

  return (
    <div>
        <Fragment>
           {location.pathname === "/kimetsunoyaiba" && <KNY />}
           {location.pathname === "/bokunohero" && <BNH />}
        </Fragment>
    </div>
  )

}