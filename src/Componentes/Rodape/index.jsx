import styled from "styled-components"

const Rodapediv = styled.footer`
width: 100%;
background-color: #04244F;
display: flex;
padding-top: 10px;
margin-top: 50px;

p{
   
    flex-wrap: nowrap;
    align-items: center;
    text-align: center;
    color: #fff;
    white-space: nowrap;
    padding: 10px;
    
    
    
  }

`
const Divisoria = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
 
  

  a{
    margin: 10px;
    cursor: pointer;
    
    
    
  }

 

`


const Rodape = ()=>{
    return(
        <Rodapediv>
            <Divisoria>
              <a href="#"><img src="public\imagens\sociais\facebook.svg" alt="" /></a>
              <a href="#"><img src="public\imagens\sociais\twitter.svg" alt="" /></a>
              <a href="#"><img src="public\imagens\sociais\instagram.svg" alt="" /></a>
              
            </Divisoria>
              <p>Desenvolvido por Alura</p>
        </Rodapediv>

    )
}

export default Rodape