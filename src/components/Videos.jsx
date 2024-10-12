import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

export default function Videos({ videos  }) {
  return (
    <div className='flex justify-start gap-4 mx-auto flex-wrap'>
       { videos.map((item, idx) => {
        return (
          <div key={idx}>
            { item.id.videoId && <VideoCard video={item} /> }
            { item.id.channelId && <ChannelCard channelDetail={item} /> }
          </div>
        )
       })}
    </div>
  )
}
