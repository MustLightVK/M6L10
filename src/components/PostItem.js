import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/PostItem.module.css';

const PostItem = ({ post }) => {
    return (
        <div className={styles.postItem}>
        <Link to={`/posts/${post.id}`}>
            <h2 className={styles.postTitle}>{post.id}</h2>
            <p className={styles.postBody}>{post.body}</p>
        </Link>
        </div>
    );
};

export default PostItem;
