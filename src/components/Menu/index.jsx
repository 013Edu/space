import home from '../../assets/home-ativo.png'
import maisCurtidas from '../../assets/mais-curtidas-inativo.png'
import maisVistas from '../../assets/mais-vistas-inativo.png'
import novas from '../../assets/novas-inativo.png'
import supreedaMe from '../../assets/surpreenda-me-inativo.png'
import { Menuu } from './style'


export default function Menu() {
  return (
    <Menuu>
        <ul className='lista'>
            <li className='item'>
                <img src={home} alt="" />
                <a href="/">Home</a>
            </li>
            <li className='item'>
                <img src={maisCurtidas} alt="" />
                <a href="/">Mais Curtidas</a>
            </li>
            <li className='item'>
                <img src={maisVistas} alt="" />
                <a href="/">Mais Vistas</a>
            </li>
            <li className='item'>
                <img src={novas} alt="" />
                <a href="/">Novas</a>
            </li>
            <li className='item'>
                <img src={supreedaMe} alt="" />
                <a href="/">Supreenda-me</a>
            </li>
        </ul>
    </Menuu>
  )
}
