import React from 'react';
import Menu from './components/Menu'
import BannerMain from './components/components/BannerMain'
import Carousel from './components/components/Carousel'
import dadosIniciais from './data/dados_iniciais.json';
import Footer from './components/components/Footer';

function App() {
  return (
    <div style={ {background: "#141414"} }>
      <Menu/>

      <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      videoDescription={"O que faz uma desenvolvedora front-end? #HipstersPontoTube"}
      url={dadosIniciais.categorias[0].videos[0].url}
      />

      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}
      />
       <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[3]}
      />
       <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[4]}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[5]}
      />
      <Footer/>
    </div>
  );
}

export default App;
