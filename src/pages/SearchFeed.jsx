import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { $api } from '../utils';
import Loader from '../components/Loader';
import { Videos } from '../components';

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchData()
  }, [searchTerm])

  const fetchData = async () => {
    try {
      const response = await $api.get(`/search?part=snippet&q=${searchTerm}/&maxResults=50`)
      setVideos(response.data.items);
      setLoading(false);
    }
    catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  
  if (loading) {
    return (
      <div className="flex bg-black justify-center items-center h-screen">
        <Loader />
      </div>
    )
  }
  return (
    <div className=" min-h-[92vh] bg-black">
      <div className="p-4 flex mx-auto w-full px-4 lg:px-[100px]">
        <Videos videos={videos} />
      </div>
    </div>
  )
}
