import React from 'react';
import {
    ItemStyle,
    Header,
    H1,
    P,
    Img,
    ImgContainer,
} from './styles';

export const Item = (props) => {
    const {
        name,
        status,
        image,
    } = props;
    return(
        <ItemStyle>
            <Header>
                <H1>{name}</H1>
                <P>{status}</P>
            </Header>
            <ImgContainer>
                <Img alt={name} src={image} />
            </ImgContainer>
        </ItemStyle>
    );
};