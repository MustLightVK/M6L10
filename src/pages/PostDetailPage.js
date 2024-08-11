import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostById } from '../features/posts/postsSlice';
import { useParams } from 'react-router-dom';
import styles from '../styles/PostDetailPage.module.css'; 

const PostDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedPost, status, error } = useSelector((state) => state.posts);

    useEffect(() => {
        if (!selectedPost || selectedPost.id !== parseInt(id, 10)) {
            dispatch(fetchPostById(id));
        }
    }, [id, dispatch, selectedPost]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.postDetail}>
            {selectedPost ? (
                <>
                    <h1>{selectedPost.title}</h1>
                    <p>{selectedPost.body}</p>
                </>
            ) : (
                <p>Post not found</p>
            )}
        </div>
    );
};

export default PostDetailPage;
