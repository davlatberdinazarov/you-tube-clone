import axios from 'axios';
import React, { useEffect } from 'react'

export default function JsonPlaceholder() {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response => setPosts(response.data))
     .catch(error => console.error(error));
  }, []);

  console.log(posts);


  return (
    <div className='grid grid-cols-4 gap-3'>
        {posts.map(post => (
          <div className='col-span-1 rounded-lg shadow-md bg-blue-gray-100 p-3' key={post.id}>
            <h2 className=' font-semibold mb-4'>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  )
}
