import React from 'react'
import {Link} from 'react-router-dom'


import {MenuStyle} from './styles'

export default function Menu(){
  return(
    <MenuStyle>
      <Link to="/main">Main</Link>
    </MenuStyle>
  )
}