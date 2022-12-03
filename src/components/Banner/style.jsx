import styled from "styled-components";

export const Bannerr = styled.div`

display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  .imagem {
    width: 88%;
    img {
      width: 100%;
      height: 288px;
    }

    position: relative;

    h1 {
      position: absolute;
      z-index: 1;
      color: var(--cor-do-texto);
      font-size: 2.5rem;
      width: 401px;
      height: 144px;
      top: 100px;
      left: 44px;
    }
  }

`