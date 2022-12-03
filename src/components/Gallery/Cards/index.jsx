import favorite from '../../../assets/favorito.png'
import open from '../../../assets/open.png'
import { Cardss } from './style'

export default function Cards({item}) {
  return (

    <Cardss>
        {item.map((pic) =>{
           return(
            <li key={pic.id} className='card'>
            <img className="imagem" src={pic.imagem} alt={pic.titulo} />
            <p className="descricao">
                {pic.titulo}
            </p>
            <div>
                <p>
                    {pic.creditos}
                </p>
                <span>
                    <img src={favorite} alt="ícone coração de curtir" />
                    <img src={open} alt="ícone de abrir modal" />
                </span>
            </div>
        </li>
           )
        })}
    </Cardss>
  )
}
