import { useQuery } from 'react-query';

// Fetch function to get posts data
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const PostsComponent = () => {
  // Using useQuery to fetch posts with additional configuration options
  const { data: posts, isError, isLoading, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5, // Cache for 5 minutes
    staleTime: 1000 * 60 * 1, // Data considered fresh for 1 minute
    refetchOnWindowFocus: true, // Refetch data when window regains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  // Loading state
  if (isLoading) return <div>Loading...</div>;

  // Error state
  if (isError) return <div>Error {error.message}</div>;

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
