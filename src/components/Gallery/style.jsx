import styled from "styled-components";



export const Galeria = styled.section`

  margin-bottom: 2rem;

  h2 {
    color: var(--roxo);
    font-size: 24px;
  }

  .cards {
    list-style: none;
    padding: 0;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  .card {
    background-color: var(--azul-escuro);
    border-radius: 20px;
    height: 280px;
    width: 285px;
    margin-right: 1rem;
    margin-bottom: 1.35rem;
    cursor: pointer;

    .card:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.025);
      transition: 0.18s;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      box-sizing: border-box;
      width: 100%;

      p {
        margin: 0;
        margin-top: 0.5rem;
        color: var(--cinza-claro);
      }

      span {
        width: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          cursor: pointer;
        }
      }
    }
  }

  .imagem {
    height: 75%;
    width: 100%;
  }

  .descricao {
    margin: 0;
    padding: 0 16px;
    font-size: 1.25rem;
    color: var(--cor-do-texto);
    font-weight: bold;
  }



`