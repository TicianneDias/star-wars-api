import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
   
`;

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Card = styled.div`
    background-color: yellow;
    height: 390px;
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
    }

    img{
        height: 350px;
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

export const Input = styled.style`
    display: flex;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: -50px;
`;
