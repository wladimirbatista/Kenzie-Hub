import styled from 'styled-components';

export const ContainerOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #9d856269;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;

`;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 370px;
`

export const HeaderModal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px 4px 0 0;
  background: var(--grey2);  
  padding-left: 1rem;
  padding-right: 0.8rem;
  width: 100%;
  height: 7vh;

  button {
    background: var(--grey2);
    color: var(--grey1);
    border: 0;
    font-weight: 500;
    font-size: 20px;
    border-radius: 4px;
    width: 32px;
    height: 32px;
  }
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 4px 4px;
  background: var(--grey3);
  width: 100%;
  height: 32vh;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 89%;

  label {
    margin-bottom: 1rem;
  }
`;

