import {styled} from "styled-components";
import backgroundImage from "../../assets/banner.png"

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    border-radius: 20px;    
    width:100%;
    margin:0 auto;
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`

const Banner = ()=>{
    return(<FigureEstilizada $backgroundImage={backgroundImage}>
        <TituloEstilizado>A galeria mais completa de fotos do espaço!</TituloEstilizado>
    </FigureEstilizada>)
}

export default Banner;