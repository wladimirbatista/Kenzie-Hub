import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => 
    props.isErrored && 
    css`
    label {
      color: red;
    }
  `}

  label {
    margin-bottom: 0.5rem;
  }

  span {
    color: red;
    font-size: 14px;
  }
`

export const SelectContainer = styled.select`
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  height: 48px;
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
  background: var(--grey2);
  color: var(--grey1);
  border-radius: 4px;
  border: 0;
  :hover{
    border: 2px solid #F8F9FA;
  }
`;

export const OptionContainer = styled.option`
  
`;
