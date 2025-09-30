import styled from 'styled-components'
import tags from './tags.json'

const TagsFila = styled.div`
display: flex;
margin-top: 15px;
color: #fff;
font-weight: 500;
gap: 10px;
`

const TagsEstilizadas = styled.div`
  .botao {
    background-color: rgba(217, 217, 217, 0.3);
    font-size: 24px;
    color: white;
    padding: 8px 10px;
    border: none;
    border-radius: 10px;
    margin: 10px;   
  }
`;
const Tags = ()=>{
    return(
    <>
    <TagsFila>
        <p>Busque por tags: </p>
        <TagsEstilizadas>
        
        {tags.map(tag => <button className='botao' key={tag.id}>{tag.titulo}</button>)}
            </TagsEstilizadas>
    </TagsFila>
    </>
    )
}

export default Tags