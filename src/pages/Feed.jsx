import React, { useEffect } from 'react'
import { Sidebar, Videos } from '../components'
import Loader from '../components/Loader';
import { $api } from '../utils';


export default function Feed() {
  const [selectedCategory, setSelectedCategory] = React.useState('New');
  const [videos, setVideos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  const fetchData = async () => {
    try {
      const response = await $api.get(`/search?part=snippet&q=${selectedCategory}&maxResults=50`)
      if (response.status === 200) {
        setVideos(response.data.items);
        setLoading(false);
      }
    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <div className=' bg-black h-[90vh] w-full text-white flex flex-col lg:flex-row gap-5'>
      <div>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>

      <div className='h-[90vh] overflow-y-scroll w-full px-4'>
        <h1 className='text-4xl font-bold mb-3'>{selectedCategory} <span className='text-cherry'>videos</span></h1>
        { loading ? <Loader/> : <Videos videos={videos}/>}
      </div>
    </div>
  )
}
