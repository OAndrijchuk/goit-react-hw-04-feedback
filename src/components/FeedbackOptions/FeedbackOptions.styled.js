import styled from 'styled-components';

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const Button = styled.button`
  padding: 8px 15px;
  background-color: lightgray;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  min-width: 150px;
  &:hover,
  &:focus {
    background-color: ${props => {
      switch (props.name) {
        case 'good':
          return 'green';
        case 'bad':
          return 'red';
        default:
          return 'grey';
      }
    }};
  }
`;
