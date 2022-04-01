import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    margin: 0 5rem;
   
`;

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Card = styled.div`
    background-color: yellow;
    height: 400px;
    width: 250px;
    margin: 5px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 3px 2px 5px rgb(109, 119, 115, 0.5);

    h3, 
    p {
        padding: 5px;
        text-align: justify;
        color: #000;
        line-height: 0.9;
    }

    p {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    img{
        height: 367px;
        width: 100%;
        background-size: cover;

        transition: all 0.5s ease-in-out;
    }

    &:hover {
        img {
            height: 100px;
        }
    }

`;

export const Input = styled.input`
    width: 300px;
    height: 40px;
    border-radius: 5px;
    font-size: 1.2rem;
    border: 2px solid yellow;
`;

export const InputDiv = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 120px;
`;
