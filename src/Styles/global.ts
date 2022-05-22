import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --blue: #00D7FE;
    --purple: #2F1755;
    --purple-brightness: #5F32A7;
    --green: #03DCA5;
    --green-darken: #03AAA8;
    --grey: #A2A2A2;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a{
    text-decoration: none;
}

html{
        scroll-behavior: smooth;
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }

    body, input, textarea, button {
        font-family: 'Ubuntu', sans-serif;
        font-weight: 400 500 700;
    }
    
    body::-webkit-scrollbar {
        width: 12px;               
        }

    body::-webkit-scrollbar-track {
        background: transparent;       
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--blue);  
        border-radius: 20px;       
  
    }
`;