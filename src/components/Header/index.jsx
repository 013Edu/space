
import logo from './logo.png'
import search from './search.png'
import { Cabecalho } from './style'

export function Home(){
    return(
         <Cabecalho>
            <img src={logo} alt="Planeta" />
            <div className='inputArea'>
                <input type="text" placeholder="Oque você procura?" />
                <img src={search} alt="ícone de lupa" />
            </div>
         </Cabecalho>
    )
}