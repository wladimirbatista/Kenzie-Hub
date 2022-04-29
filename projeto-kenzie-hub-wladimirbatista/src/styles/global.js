import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    :root {
      --grey4: #000000;
      --grey3: #212529;
      --grey2: #343B41;
      --grey1: #868E96;
      --grey0: #F8F9FA;
      --primary: #FF577F;
      --primary-hover: #FF427F;
      --primary-disable: #59323F;
    }

    body {
      background: var(--grey4);
      color: var(--grey0);
    }

    body, input, button {
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
    }

    h1,h2,h3,h4,h5,h6 {   
      font-family: 'Inter', sans-serif;
      font-weight: 700;
    }

    button {
      cursor: pointer;
    }
  }
`

export default Reset;