import { Tagss } from "./style";
import pictures from '../../Gallery/pictures.json'


export default function Tags({tags, filtraPicture, setItens}) {
  return (
    <Tagss>
      <p>Filtre por tags:</p>
      <ul className="lista">
        {tags.map((tag) =>{
          return(
            <li key={tag} onClick={() => filtraPicture(tag)}>
              {tag}
            </li>
          )
        })}
        <li onClick={() => setItens(pictures)}>
          Todas
        </li>
      </ul>
    </Tagss>
  )
}
