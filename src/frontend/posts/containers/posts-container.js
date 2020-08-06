import React from 'react';
import {usePostsReducer, LOADING_DATA} from './../hooks/usePostsReducer';
import {Posts,} from './../components';

export const PostsContainer = () => {

    const [postsState, postsDispatch] = usePostsReducer();
    const {status, posts,} = postsState;

    const handlePostsRefresh = () => postsDispatch({
        type: LOADING_DATA,
    });

    return(
        <Posts
            postData={posts}
            statusData={status}
            onPostsRefresh={handlePostsRefresh}
        />
    );
};