import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 7rem;
    padding-top: 150px;
    padding-bottom: 50px;
    
    @media(max-width: 816px) {
        margin:  auto;
    }
    `;

export const List = styled.div`
    gap: 20px;
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
    
    border: 1px solid yellow;
    border-radius: 5px;
    height: 730px;
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
        text-align: justify;
    }

    h1, p {
        padding: 6px;
    }
`;

export const IMG = styled.img`
    width: 250px;
    height: 200px;
    padding: 0;
`;