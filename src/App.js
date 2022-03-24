import React from 'react'
import CardHolder from './Component/Card/CardHolder'
import { Header } from './Component/Header/Header'
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <>      
      <GlobalStyle />
      <Header />
      <CardHolder />
      <div style={{width:'100%', height:'500px', display:'flex',justifyContent:'center'}}>
      <iframe width="90%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=23%20abiodun%20obayemi%20ikola&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      <br/>
      <br/>
      </div>
      
    </>
  )
}

export default App