import styled from 'styled-components';

export const Nav = styled.div`
    background: yellow;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

export const Logo = styled.a`
    padding: 1rem 0;
    margin: 0 50px;

    @media (max-width: 928px) {
        margin: 0;
    }

  img{
      width: 100px;
  }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    
    @media (max-width: 816px) {
        overflow: hidden;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
`;
export const MenuLink = styled.a`
    padding: 1rem 2rem;
    font-family: 'Star Wars';
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    text-shadow: 0.5px 0.5px 0.5px rgb(0, 0, 0, 0.5);
    color: black;
    transition: all 0.3s ease-in;
    font-size: 1.2rem;
    &:hover {
        transition: all 0.6s ease-in-out;
        color: #DBA90D;
        padding: 15px;
        border-bottom: 2px solid #DBA90D;
    }
`;

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
        height: 2px;
        width: 25px;
        background: black;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 816px) {
        display: flex;
    }
`;