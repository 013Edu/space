import styled from "styled-components";



export const Rodape = styled.footer`

background-color: var(--azul-rodape);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  box-shadow: 0px -2px 30px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;

  .icones {
    width: 10%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  p {
    margin: 0;
    color: var(--cor-do-texto);
  }

`