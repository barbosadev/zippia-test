import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: rgb(206,225,233);
    background: linear-gradient(140deg, rgba(206,225,233,1) 0%, rgba(236,236,236,1) 100%);
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  button, a {
    cursor: pointer;
  }

  a{
    color: #3174ee;
    text-decoration: underline;
  }

  main {
    margin-top: 68px;
  }
`;
