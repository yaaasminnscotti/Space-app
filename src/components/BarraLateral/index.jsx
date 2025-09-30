import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 240px;
`

const BarraLateral = ()=>{
    return(
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                    IconeAtivo="/icones/home-ativo.png"
                    IconeInativo="/icones/home-inativo.png"
                    ativo ={true}
                     >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao
                    IconeAtivo="/icones/mains-vistas-ativo.png"
                    IconeInativo="/icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao
                    IconeAtivo="/icones/mais-curtidas-ativo.png"
                    IconeInativo="/icones/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                    IconeAtivo="/icones/novas-ativo.png"
                    IconeInativo="/icones/novas-inativo.png"
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                    IconeAtivo="/icones/surpreenda-me-ativo.png"
                    IconeInativo="/icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavegacao>
              </ListaEstilizada>

                
            </nav>
        </aside>
    )
}

export default BarraLateral;