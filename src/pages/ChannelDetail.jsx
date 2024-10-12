import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChannelCard from "../components/ChannelCard";
import { Videos } from "../components";
import Loader from "../components/Loader";
import { $api } from "../utils";



const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      fetchChannelDetail();
      fetchData();
    };
    fetchResults();
  }, [id]);
  const fetchChannelDetail = async () => {
    try {
      const response = await $api.get(`/channels?part=snippet&id=${id}`)
      if (response.status === 200) {
        setChannelDetail(response.data?.items[0]);
        setLoading(false);
      }
    }
    catch (err) {
      console.log(err);
    }
  }
  const fetchData = async () => {
    try {
      const response = await $api.get(`/search?channelId=${id}&part=snippet%2Cid&order=date`)
      if (response.status === 200) {
        setVideos(response.data.items);
        setLoading(false);
      }
    }
    catch (err) {
      console.log(err);
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
      <div>
        <div className="h-[300px] custom-gradient z-10" />
        <div className=" relative -top-32">
          <ChannelCard channelDetail={channelDetail} />
        </div>
      </div>
      <div className="p-4 flex mx-auto w-full relative -top-32 px-4 lg:px-[100px]">
        {loading ? <Loader /> : <Videos videos={videos} />}
      </div>
    </div>
  );
};

export default ChannelDetail;