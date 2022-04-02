import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 7rem;
    padding-top: 150px;
    `;

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    margin: auto;

    @media(max-width: 987px) {
        display: flex;
        grid-template-columns: 0;
        flex-wrap: wrap;
    }
`;

export const Movie = styled.div`
    padding: 15px;
    border: 1px solid yellow;
    border-radius: 5px;
    height: 450px;
    width: 250px;
    margin: 5px;
    overflow: hidden;
    
    &:hover {
        box-shadow: 3px 2px 2px white;
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
    }
`;