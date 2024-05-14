import styled from 'styled-components'
import tags from './tags.json'

const EstiloTag = styled.div`
display: flex;
padding: 24px;
border: none;
margin: 0;
justify-content: flex-start;
align-items: center;


p{
  color: #fff;
  font-size: 24px;
  margin: 15px;
}


 

`

const Botaotag = styled.button`
  border-radius: 10px;
  font-size: 16px;
  justify-content : space-between;
  color: #d8d8d8;
  border: 2px solid transparent;
  background: rgba(217, 217, 217, 0.3);
  box-sizing: border-box;
  margin: 5px;
  cursor: pointer;
  &:hover {
      border-color: #C98CF1;
    }







  
`



const Tags = ({setTag})=>{
    return(
    <>
    <EstiloTag >
     <p>Busque por tags:</p>
     {tags.map(tag => <Botaotag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</Botaotag>)}
     </EstiloTag>
    </>
    )
}

export default Tags