import { Galeria } from "./style";
import Tags from "./Tags";
import pictures from './pictures.json'
import Cards from "./Cards";
import { useState } from "react";


export default function Gallery() {
    const [itens, setItens] = useState(pictures)
    const tags = [...new Set(pictures.map((value) => value.tag))]

    const filtraPorTag = (tag) =>{
        const newPictures = pictures.filter((pic) =>{
            return(
                pic.tag === tag
            )
        })

        setItens(newPictures)
    }


  return (
        <Galeria>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtraPicture={filtraPorTag} setItens={setItens} />
            <Cards item={itens} />
        </Galeria>
  )
}
