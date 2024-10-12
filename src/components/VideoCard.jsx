import React from 'react'
import { CiCircleCheck } from "react-icons/ci";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constant"
import { Link } from 'react-router-dom'
import { Typography } from '@material-tailwind/react'

export default function VideoCard({ video: { id: { videoId }, snippet } }) {
  return (
    <div className='w-full sm:w-[358px] md:w-[320px] shadow-none rounded-none'>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
          className='h-[190px] w-full sm:w-[358px] object-cover'
        />
      </Link>
      <div className='bg-[#1E1E1E] h-[106px] px-3'>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          <Typography className=' line-clamp-2 mb-4' variant="subtitle1" color="white">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <Typography className=' flex items-center gap-4' variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CiCircleCheck className='text-sm text-gray-500 ml-2'/>
          </Typography>
        </Link>
      </div>
    </div>
  )
}
