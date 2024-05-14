import styled from "styled-components";
import EstilosGlobais from "./Componentes/estilosGlobais";
import Cabecalho from "./Componentes/Cabecalho";
import BarraLateral from "./Componentes/BarraLateral";
import Banner from "./Componentes/Banner";
import bannerBackground from "./assets/banner.png";
import Galeria from "./Componentes/Galeria";

import fotos from "./fotos.json"
import { useState } from "react";
import ModalZoom from "./Componentes/ModaldeZoom";
import { useEffect } from "react";
import Tags from  './Componentes/Galeria/Tags/tags.json'
import Rodape from "./Componentes/Rodape";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoDagaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App=() => {

const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
const [fotoSelecionada, setFotoSelecionada] = useState(null)
const [filtro, setFiltro] = useState('')
const [tag, setTag]= useState(0)
const [fotoComZoom, setFotoComZoom] = useState(null)




useEffect(() => {
  const fotosFiltradas = fotos.filter(foto => {
    const filtroPorTag = !tag || foto.tagId === tag;
    const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
    return filtroPorTag && filtroPorTitulo
  })
  setFotosDaGaleria(fotosFiltradas)
}, [filtro, tag])





const aoAlterarFavorito = (foto) => {
  if(foto.id ===fotoSelecionada?.id){
    setFotoSelecionada({
      ...fotoSelecionada,
      favorita: !fotoSelecionada.favorita
    })

  }

  setFotosDaGaleria(fotosDaGaleria.map(fotosDaGaleria =>{
    return{
      ...fotosDaGaleria,
      favorita: fotosDaGaleria.id === foto.id ? !foto.favorita : fotosDaGaleria.favorita
    }
  }))
}

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho 
         filtro={filtro}
         setFiltro={setFiltro}/>
        <MainContainer>
          <BarraLateral />
          <ConteudoDagaleria>
          <Banner
            texto="A galeria mais completa de fotos do espaço!"
            backgroundImage={bannerBackground}
          />
          <Galeria 
          aoFotoSelecionada={foto => setFotoSelecionada(foto)}
          fotos={fotosDaGaleria}
          aoAlterarFavorito={aoAlterarFavorito}
          setTag={setTag}
          />
          </ConteudoDagaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlterarFavorito={aoAlterarFavorito}
      />
      <Rodape />
    </FundoGradiente>
  );
}

export default App;
