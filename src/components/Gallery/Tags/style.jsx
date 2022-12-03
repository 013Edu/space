import styled from "styled-components";



export const Tagss = styled.div`

  width: 65vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--cor-do-texto);
  font-size: 16px;

  p {
    font-size: 1.25rem;
  }

  .lista {
    list-style: none;
    width: 380px;
    padding: 0;
    display: flex;
    justify-content: space-between;

    li {
      background-color: var(--tag-color);
      padding: 6px 10px;
      border-radius: 8px;
      cursor: pointer;
    }
  }

`