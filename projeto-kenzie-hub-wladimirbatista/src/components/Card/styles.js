import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 95%;
  min-height: 48px;
  background: var(--grey4);
  border-radius: 4px;
  padding: 0 1rem;
  cursor: pointer;
  :hover {
    background: var(--grey2);
  }
`;