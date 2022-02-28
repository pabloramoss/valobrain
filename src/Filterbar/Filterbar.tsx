import React, { useContext } from 'react';
import VideosContext from '../../context/VideosContext';
import {Video} from "../videos/types"

interface Props {
  videos: Video[]
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