import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../store/menuSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchVideo = () => {
    const videoContent = useSelector((state) => state.menu.watchVideoContent);
    console.log('videoContent', videoContent);
    const [searchParams] = useSearchParams();

    const searchQuery = searchParams.get('v');
    console.log('searchQuery', searchQuery);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    }, [dispatch]);

  return (
      <div className='flex flex-col p-5'>
        <div>
        <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
            <CommentsContainer />
        </div>
      </div>
  )
}

export default WatchVideo
