import styled from 'styled-components';

export const GridStyle = styled.div`
    display: grid;
    grid-template-columns: 290px 290px 290px;
    justify-content: center;
    grid-gap: 8px;
`;

export const ItemStyle = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
                0px 3px 3px 0px rgba(0,0,0,0.14),
                0px 4px 6px 0px rgba(0,0,0,0.12);
    clear: both;
`;

export const Header = styled.header`
    padding: 8px;
`;

export const H1 = styled.h1`
    margin: 0px;
    padding: 0px;
    font-size: 1rem;
    font-family: Arial;
`;

export const P = styled.p`
    margin: 0px;
    padding: 0px;
    font-size: 12px;
    font-family: Arial;
`;

export const ImgContainer = styled.div`
    width: 100%;
    height: 225px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #eee;
    border-radius: 0 0 4px 4px;
`;