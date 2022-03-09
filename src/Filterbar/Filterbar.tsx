import React, { useContext } from 'react';
import VideosContext from '../../context/VideosContext';
import {VideoI} from "../videos/types"

interface Props {
  videos: VideoI[]
}

const Filterbar: React.FC<Props> = ()=> {
  const {videos, setVideos} = useContext(VideosContext)

  return(
    <div>
      {`<Filterbar />`}
    </div>
  )
}
export default Filterbar