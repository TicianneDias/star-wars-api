import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 7rem;
  padding-top: 150px;
  padding-bottom: 50px;

  @media (max-width: 816px) {
    margin: auto;
  }
`;

export const List = styled.div`
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  margin: auto;

  @media (max-width: 987px) {
    display: flex;
    grid-template-columns: 0;
    flex-wrap: wrap;
  }
`;

export const Movie = styled.div`
  border: 1px solid #f2ff3d;
  border-radius: 15px;
  height: 730px;
  width: 250px;
  margin: 5px;
  overflow: hidden;

  &:hover {
    border-color: white;
    background-color: #101010;
  }

  h1 {
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace;
    color: yellow;
  }
  p {
    color: white;
    text-align: justify;
  }

  h1,
  p {
    padding: 6px;
  }
`;

export const IMG = styled.img`
  width: 250px;
  height: 200px;
  padding: 0;
`;

export const SideToSide = keyframes`
    0% {
        background: yellow;
        box-shadow: 0 0 10px yellow;
        width: 100px;
        left: 0;
        
    }

    25% {
        background: yellow;
        box-shadow: 0 0 10px yellow;
        width: 300px;
        left: 0;
    }
    50% {
        background: greenyellow;
        box-shadow: 0 0 10px greenyellow;
        width: 100px;
        left: 90px;
    }
    75% {
        background: greenyellow;
        box-shadow: 0 0 10px greenyellow;
        width: 300px;
        left: 0;
    }
    100% {
        background: yellow;
        box-shadow: 0 0 10px yellow;
        width: 100px;
        left: 0;
    }
    `;

export const Loading = styled.div`
  margin: 150px auto;
  height: 15px;
  border-radius: 5px;
  background-color: yellow;
  box-shadow: 0 0 10px yellow;
  animation: ${SideToSide} 2s ease infinite;

  @media (max-width: 800px) {
    margin: 350px auto;
  }
`;
