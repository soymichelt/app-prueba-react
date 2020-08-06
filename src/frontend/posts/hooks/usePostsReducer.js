import {useEffect, useReducer,} from 'react';

export const LOADING_DATA = 'loading';
export const SUCCESS_DATA = 'success';
export const ERROR_DATA = 'error';

const reducer = (state, action) => {
    switch(action.type) {
        case LOADING_DATA: return {
            ...state,
            status: LOADING_DATA,
        };
        case SUCCESS_DATA: return {
            ...state,
            status: SUCCESS_DATA,
            posts: action.payload.posts,
        };
        case ERROR_DATA: return {
            ...state,
            status: ERROR_DATA,
            error: action.payload.error,
        };
    }
};

const initialState = {
    posts: [],
    status: LOADING_DATA,
};

export const usePostsReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if(state.status === LOADING_DATA) {
            fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch({
                    type: SUCCESS_DATA,
                    payload: {posts: data.results},
                })
            })
            .catch(error => dispatch({
                type: ERROR_DATA,
                payload: {error: error},
            }));
        }
    }, [state.status]);

    console.log(`${state.status}`);

    return [state, dispatch];
};