import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavBar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vh;
  border-bottom: 1px solid var(--grey3);

  div {
    width: 50%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 375px){
      width: 80%
    }
  }

  h3 {
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

export const Header = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12vh;
  border-bottom: 1px solid var(--grey3);

  div {
    display: flex;
    justify-content: space-between;
    width: 50%;
    @media screen and (max-width: 375px){
      width: 80%;
    }

    h3 {
      @media screen and (max-width: 375px){
        width: 50%;
        text-align: left;
        line-height: 25px;
      }
    }

    small {
      @media screen and (max-width: 375px){
        width: 50%;
        text-align: right;
        line-height: 25px;
      }
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 75vh;
  padding-top: 2rem;

  .main-header {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-bottom: 1.5rem;
    @media screen and (max-width: 375px){
      width: 80%;
    }
  }

  .main-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
    width: 50%;
    background: var(--grey3);
    border-radius: 4px;
    min-height: 20%;
    max-height: 75%;
    overflow-y: scroll;
    @media screen and (max-width: 375px){
      width: 80%;
    }

    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      background: var(--grey2);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 20px;
    }
  }
`;

export const MainBtn = styled.button`
  background: var(--grey3);
  color: var(--grey0);
  border: 0;
  font-weight: 700;
  font-size: 20px;
  border-radius: 4px;
  width: 32px;
  height: 32px;
`;