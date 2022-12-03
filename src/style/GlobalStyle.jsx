import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    body{
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background-image: linear-gradient(#041833, #154580);
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    main{
        margin: 0 24px;
    }

    body::-webkit-scrollbar{
        width: 3px;
    }

    body::-webkit-scrollbar-track {
    background: linear-gradient(#041833, #154580);
    }
    body::-webkit-scrollbar-thumb {
    background-color: #154580;
    border-radius: 20px;
}
    .galeria{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-left: 17%;
        margin-top: 1rem;
    }

`