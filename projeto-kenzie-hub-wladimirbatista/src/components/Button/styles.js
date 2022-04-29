import styled from 'styled-components';

export const BtnContainer = styled.button`
  background: ${(props) => (props.primarySchema ? "#FF577F" : "#868E96")};
  color: #FFFF;
  min-width: 329px;
  width: 70%;
  height: 48px;
  font-weight: 500;
  border: 0;
  border-radius: 4px;
  margin-bottom: 1rem;
`;