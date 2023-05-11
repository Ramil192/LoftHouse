import { FC, useState } from 'react';
import ReactPlayer from 'react-player';
import style from './Video.module.scss';

const Video: FC = () => {
  const [isShow, setIsShow] = useState(false);

  const changeShow = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <button className={style.play} onClick={changeShow}>
          <img src="/LoftHouse/img/video/play.svg" alt="play icon" />
        </button>
        {isShow && (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=bhJNL9JUsnY"
            className={style.player}
            playing={isShow}
            width="100%"
            height="100%"
            controls
          />
        )}
      </div>
    </section>
  );
};

export default Video;
