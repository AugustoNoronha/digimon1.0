import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Menu from './pages/Menu'
import Main from './pages/Main'
import Digimon from './pages/digimon'

export default function Routes(){
  return(
    <BrowserRouter>
    <Switch>

      <Route path='/' exact component={Menu}/>
      <Route path='/Main' component={Main}/>
      <Route path='/:name'  component={Digimon}/>
      
    </Switch>
    </BrowserRouter>
  )
}
