import { useQuery } from 'react-query';

// Fetch function to get posts data
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const PostsComponent = () => {
  // Using useQuery to fetch posts with error and loading states
  const { data: posts, isError, isLoading, refetch } = useQuery('posts', fetchPosts);

  // Loading state
  if (isLoading) return <div>Loading...</div>;

  // Error state
  if (isError) return <div>Error loading data</div>;

  // Display fetched posts
  return (
    <div>
      <button onClick={refetch}>Refetch Data</button>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
