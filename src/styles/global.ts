import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --text: #F5FBEF;
    --background: #030027;
    --brink-pink: #E85D75;
    --gray-line: #dcdde0;
    --purple: #9D69A3;
    --gray: #61707D;
    --green: #40F99B;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 768px) {
      font-size: 87.5%;
    }

    @media (max-width: 480px) {
      font-size: 75%;
    }
  }

  body{
    background: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
