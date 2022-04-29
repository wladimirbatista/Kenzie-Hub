import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;

  h1 {
    color: var(--primary);
    margin-bottom: 1.5rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 1rem;
    background: var(--grey3);
    min-height: 502px;
    min-width: 370px;
    width: 20%;
  }

  h2 {
    margin-bottom: 2rem;
  }

  small {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`

