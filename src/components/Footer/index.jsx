import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import { Rodape } from './style'

export default function Footer() {
  return (
    <Rodape>
      <div className='icones'>
        <a
          href="/"
        >
          <img src={facebook} alt="ícone do facebook" />
        </a>
        <a
          href="/"
        >
          <img src={twitter} alt="ícone do twitter" />
        </a>
        <a
          href="/"
        >
          <img src={instagram} alt="ícone do instagram" />
        </a>
      </div>
      <p>Desenvolvido por Alura</p>
    </Rodape>
  )
}
