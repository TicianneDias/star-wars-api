import styled from 'styled-components';

export const Button = styled.button`
  background: none;
  border: 2px solid yellow;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  margin: auto;
  margin-top: 100px;

  p {
    color: white;
    font-size: 1rem;
    font-family: 'Star Wars';
    text-shadow: 1px 1px 1px black;
  }
  &:hover {
    background-color: yellow;
    border-color: white;
  }
`;
