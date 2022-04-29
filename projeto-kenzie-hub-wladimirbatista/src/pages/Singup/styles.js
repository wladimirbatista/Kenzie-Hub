import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 370px;
  margin: 2rem;
  @media screen and (max-width: 375px){
    width: 80%;
    height:5vh;
    margin: 1rem 0 0 0;
  }

  h2 {
    color: var(--primary);
  }

  button {
    width: 67px;
    height: 32px;
    background: var(--grey3);
    border:0;
    border-radius: 4px;
    color: var(--grey0);
    font-size: 12px;
    font-weight: 700;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--grey3);
  height: 85vh;
  width: 370px;
  padding-top: 1rem;

  h3 {
    margin-bottom: 0.5rem;
    @media screen and (max-width: 375px){
      margin-bottom: 0.5rem;
    }
  }

  small {
    margin-bottom: 0.5rem;
    @media screen and (max-width: 375px) and (max-width: 768px){
      margin-bottom: 0.5rem;;
    }
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 89%;
  @media screen and (max-width: 375px){
    height: 12%;
  }
`;

