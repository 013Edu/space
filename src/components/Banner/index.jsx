import { Bannerr } from "./style";
import banner from '../../assets/banner.png'

export default function Banner() {
  return (
    <Bannerr>
      <div className="imagem">
        <h1>A galeria mais completa do espaço</h1>
        <img src={banner} alt="Banner Alura Space" />
      </div>
    </Bannerr>
  )
}
