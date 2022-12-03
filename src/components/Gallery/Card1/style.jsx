import styled from "styled-components";

export const Popularess = styled.aside`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 800px;
  color: var(--roxo);
  font-size: 16px;

  h2 {
    margin-top: 5.3rem;
  }

  .imagens {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 77%;
    padding: 0;
    list-style: none;

    img {
      width: 150px;
      height: 100px;
    }
  }

  .buttonItem {
    margin-top: 1.5rem;
    background: transparent;
    border: none;
    color: var(--cor-do-texto);
    font-size: 16px;
    width: 100%;
    padding: 12px 16px;
    position: relative;
    z-index: 0;
    cursor: pointer;

    :hover {
      border-radius: 10px;
      background: linear-gradient(to right, var(--rosa), var(--roxo)) border-box;
      color: $azul-escuro;
      transition: 0.1s;
    }

    ::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 10px;
      z-index: -1;
      border: 2px solid transparent;
      background: linear-gradient(to right, var(--rosa), var(--azul-claro)) border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      background: linear-gradient(to right, var(--rosa), var(--roxo)) border-box;
      color: $azul-escuro;
      transition: 0.1s;
    }
  }

`