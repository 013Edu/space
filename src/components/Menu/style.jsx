import styled from "styled-components";



export const Menuu = styled.nav`

    width: 18%;

    .lista {
    padding-left: 0.5rem;
    margin: 0;
    height: 276px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;

    :first-child {
      a {
        font-weight: 700;
        color: var(--roxo);
      }
    }
  }

  img {
    margin-right: 0.5rem;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    font-size: 1.125rem;
    color: var(--cor-do-texto);
  }

`