import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import PostItem from './PostItem';
import styles from '../styles/PostList.module.css';

const PostList = () => {
    const dispatch = useDispatch();
    const { posts, status, error } = useSelector((state) => state.posts);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.postList}>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
