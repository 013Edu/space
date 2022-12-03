import styled from "styled-components";
import '../../style/variaveis.css'


export const Cabecalho = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    .inputArea{

        display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 10px;
    width: 33%;
    position: relative;
    z-index: 0;
    ::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 10px;
      z-index: -1;
      border: 2px solid transparent;
      background: linear-gradient(to right, var(--rosa), var(--roxo)) border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
    input{
    width: 80%;
    height: 30px;
    color: var(--cor-do-texto);
    font-size: 1rem;
    border: none;
    background-color: transparent;
    outline: 0;
        }
    }

`