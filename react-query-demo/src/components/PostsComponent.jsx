import React, { useState } from 'react';
import { useQuery } from 'react-query';

const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    const { data: posts, error, isLoading, refetch } = useQuery('posts', fetchData, {
        staleTime: 30000, // Cache data for 30 seconds
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;

    return (
        <div>
            <button onClick={() => refetch()}>Refetch Posts</button>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

const App = () => {
    const [showPosts, setShowPosts] = useState(true);

    return (
        <div>
            <button onClick={() => setShowPosts(!showPosts)}>
                {showPosts ? 'Hide' : 'Show'} Posts
            </button>
            {showPosts && <PostsComponent />}
        </div>
    );
};

export default App;
