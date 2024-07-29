import React, { useEffect } from 'react'
import { Sidebar, Videos } from '../components'
import axios from 'axios';


export default function Feed() {
  const [selectedCategory, setSelectedCategory] = React.useState('New');
  const [videos, setVideos] = React.useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://youtube-v31.p.rapidapi.com/search?part=snippet&q=Cooking&maxResults=50`, {
        headers: {
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
          'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA'
        }
      })
      if (response.status === 200) {
        setVideos(response.data.items);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  console.log(videos);


  return (
    <div className=' bg-black h-[90vh] w-full text-white flex gap-5'>
      <div>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>

      <div>
        <h1 className='text-4xl font-bold mb-3'>{selectedCategory} <span className='text-cherry'>videos</span></h1>
        <Videos />
      </div>
    </div>
  )
}
