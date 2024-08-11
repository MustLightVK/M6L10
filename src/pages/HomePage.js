import React from 'react';
import PostList from '../components/PostList';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Post List</h1>
            <PostList />
        </div>
    );
};

export default HomePage;
