import styled from "styled-components"
import Titulo from "../../Titulo"


const Div = styled.div`
    display: block;
   
    justify-content: flex-end;
    align-items: center;
    margin: 1.5rem;
   
    

    img{
        border-radius: 10px;
        padding: 5px;
       
      
       
    }

`

const Botao = styled.button`

align-items: center;
justify-items: center;
justify-content: center;
padding: 10px;
width: 95%;
font-size: 16px;
 color: #d8d8d8;
  border: 2px solid transparent;
  background: rgba(217, 217, 217, 0.3);
  box-sizing: border-box;
  border-radius: 10px;
  border-color: #313e8d;
  cursor: pointer;



  
  

`
  

const Populares = ()=> {
    return(
        <>
         <Div>
        <Titulo $alinhamento= 'center'>Populares</Titulo>
            <img src="public\imagens\populares\foto-1.png" alt="" />
            <img src="public\imagens\populares\foto-2.png" alt="" />
            <img src="public\imagens\populares\foto-3.png" alt="" />
            <img src="public\imagens\populares\foto-4.png" alt="" />
            <img src="public\imagens\populares\foto-5.png" alt="" />

            <Botao > Ver mais</Botao>
         </Div>
       
        </>
    )
}

export default Populares 