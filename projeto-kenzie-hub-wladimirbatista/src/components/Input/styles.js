import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div`
  text-align: left;
  margin-bottom: 1rem;

  ${(props) => 
    props.isErrored && 
    css`
    label {
      color: red;
    }
  `}

  input {
    background: var(--grey2);
    color: var(--grey0);
    border: 0;
    border-radius: 4px;
    display: flex;
    padding: 1rem;
    min-width: 329px;
    width: 100%;
    margin-top: 0.5rem;
    :hover{
      border: 2px solid #F8F9FA;
    }
  }

  span {
    color: red;
    font-size: 14px;
    margin-top: -1rem;
    margin-bottom: 0.5rem;
  }
`;