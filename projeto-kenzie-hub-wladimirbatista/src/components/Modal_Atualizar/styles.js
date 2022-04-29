import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => props.modal? "flex" : "none"};
  z-index: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #9d856269;
  /* position: absolute; */
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
`;

export const ContainerModal = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
`;

export const CloseBtn = styled.button`
  background: var(--grey2);
  color: var(--grey1);
  border: 0;
  font-weight: 500;
  font-size: 20px;
  border-radius: 4px;
  width: 32px;
  height: 32px;
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  border-radius: 0 0 4px 4px;
  background: var(--grey3);
  width: 100%;
  height: 32vh;

  p{
    width: 90%;
    margin-bottom: 1rem;
  }
`;

export const InputDisable = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  color: var(--grey1);
  width: 90%;
  height: 48px;
  background: var(--grey2);
  border-radius: 4px;
  margin-bottom: 1rem;
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 89%;

  label {
    margin-bottom: 1rem;
  }
`;

export const BtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`

export const BtnSalvar = styled.button`
  background: #59323F;
  color: var(--grey0);
  font-weight: 700;
  height: 48px;
  width: 60%;
  border: 0;
  border-radius: 4px;
`;

export const BtnExcluir = styled.button`
  background: var(--grey1);
  color: var(--grey0);
  font-weight: 700;
  height: 48px;
  width: 30%;
  border: 0;
  border-radius: 4px;
`;