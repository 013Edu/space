import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './components/Menu'
import { Home } from './components/Header'
import { GlobalStyle } from './style/GlobalStyle'

import banner from '../src/assets/banner.png'

import { Bannerr } from './components/Banner/style'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Card1 from './components/Gallery/Card1'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
   <main>
   <Bannerr>
    <Menu />
      <div className="imagem">
        <h1>A galeria mais completa do espaço</h1>
        <img src={banner} alt="Banner Alura Space" />
      </div>
    </Bannerr>
   <div className='galeria'>
    <Gallery />
    <Card1 />
   </div>
   </main>
   <Footer />
  </React.StrictMode>
)
