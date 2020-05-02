import React,{useEffect,useState}from 'react'
import {Link} from 'react-router-dom'

import {MainStyle} from './styles'

import api from '../../services/api'

export default function Main(){
  const[digimon,setDigimon] = useState([])

  useEffect(()=>{
    async function loadDigimons(){
      const response = await api.get('/digimon')

      setDigimon(response.data)
    }

    loadDigimons();
    
  },[])

  return(
   <MainStyle>
    

     <img src='https://i.pinimg.com/originals/ca/5b/a7/ca5ba7d121989a03a9e22518a3ccaab1.png'/>

      <section>
    {digimon.map(item=>(
      <Link to={`/${item.name}`}>
        <div>
        <img src={item.img} />
    <label>{item.name}</label>
      </div>
      </Link>
    

    ))}
   
    

    </section>
   </MainStyle>
  )
}