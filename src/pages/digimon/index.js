import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

import api from '../../services/api'

import {DigimonStyle} from './style'

export default function Digimon({match}){
  const[name,setName] = useState(match.params.name)
  const[digimon,setDigimon] = useState({})

  useEffect(()=>{

    async function loadDigimon(){
      const response = await api.get(`/digimon/name/${name}`)

      setDigimon(response.data[0])
    }

    loadDigimon()
  
  },[])

  return(
    <DigimonStyle>
       <Link to='/main'>
        <img src={'https://i.pinimg.com/originals/ca/5b/a7/ca5ba7d121989a03a9e22518a3ccaab1.png'} />      
      </Link>
      
    {digimon !== null &&(
       <div>
       <img src={digimon.img}/>
    <label>Name:<span>{digimon.name}</span></label>
    <label>Training:<span>{digimon.level}</span></label>
     </div>
    )}

     
    </DigimonStyle>
  )
}