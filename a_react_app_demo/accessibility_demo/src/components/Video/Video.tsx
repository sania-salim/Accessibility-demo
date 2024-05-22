import { StyledVideo } from './Video.style'
import whaleVdo from '../../assets/Against all odds - The threats to whales.mp4'
import vdoCaptions from '../../assets/captions.vtt'

const Video = () => {
  return (
    <StyledVideo controls >
          <source src={whaleVdo} type="video/mp4"/>
          <track
                label="English"
                kind="subtitles"
                src={vdoCaptions}
                default />
            Video on a whale's hardships, sorry your browser does not support playing videos.
    </StyledVideo>
  )
}

export default Video;