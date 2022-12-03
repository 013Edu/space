import pictures from '../populares.json'
import {Popularess} from './style'


export default function Card1() {
  return (
    <Popularess>
    <h2>Populares</h2>
    <ul className='imagens'>
      {pictures.map((pic) =>{
          return(
              <li key={pic.id}>
                  <img src={pic.path} alt={pic.alt} />
              </li>
          )
      })}
    </ul>
    <button className='buttonItem'>Ver mais</button>
  </Popularess>
  )
}
