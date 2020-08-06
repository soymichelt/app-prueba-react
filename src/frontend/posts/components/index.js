import React from 'react';
import {Grid} from './grid';
import {Item} from './item';

import {
    LOADING_DATA,
    SUCCESS_DATA,
    ERROR_DATA,
} from './../hooks/usePostsReducer';

export const Posts = (props) => {
    const {
        postData,
        statusData,
        onPostsRefresh,
    } = props;

    return (
        <>
            <button onClick={onPostsRefresh}>Actualizar Listado</button>
            {statusData === LOADING_DATA && (
                <p>Espere por favor...</p>
            )}
            {statusData === ERROR_DATA && (
                <p>Ha ocurrido un error.</p>
            )}
            {postData && (
                <Grid
                    data={postData}
                    renderItem={(item) => {
                        return (
                            <Item
                                {...item}
                            />
                        );
                    }}
                />
            )}
        </>
    );
};