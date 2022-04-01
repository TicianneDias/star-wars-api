import styled from 'styled-components';
import image from './home53.jpg'

export const ImageBackground = styled.div`
background-image: url(${image});
background-size: cover;
height: 100vh;
`;

export const Container = styled.div`
        top: 25%;
        padding-left: 50px;
        padding-right: 50px;
        position: absolute;
        font-family: 'Star Wars';
        display: flex;
        align-items: center;
        @media (max-width: 816px){
                top: 55%;
        }
        
span {
        color: white;
        font-size: 2.5rem;

        @media (max-width: 816px){
                font-size: 1.7rem;
        }
}
`;