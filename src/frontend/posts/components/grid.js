import React from 'react';
import {GridStyle} from './styles';

export const Grid = (props) => {

    const {data,renderItem,} = props;

    return (
        <GridStyle>
            {data && data.map(item => <React.Fragment key={item.name}>{renderItem(item)}</React.Fragment>)}
        </GridStyle>
    );
};