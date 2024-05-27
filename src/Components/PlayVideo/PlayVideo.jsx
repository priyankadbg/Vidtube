import React from "react";
import "./PlayVideo.css";
import video from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import save from "../../assets/save.png";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video} controls autoPlay muted></video>
      <h3>Best Youtube Channel to learn web development</h3>
      <div className="play-video-info">
        <p>1525 views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="like" />
            125
          </span>
          <span>
            <img src={dislike} alt="dislike" />
            25
          </span>
          <span>
            <img src={share} alt="share" />
            share
          </span>
          <span>
            <img src={save} alt="save" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="publisher" />
        <div>
          <p>greatstack</p>
          <span>1M subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe Greatstack to watch more tutorials</p>
        <hr />
        <h4>130 comments</h4>
        <div className="comment">
          <img src={user_profile} alt="user profile" />
          <div>
            <h3>
              Jack Nicholson <span> 1 day ago</span>
            </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>244</span>
              <img src={dislike} alt="dislike" />
              <img src={save} alt="save" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="user profile" />
          <div>
            <h3>
              Jack Nicholson <span> 1 day ago</span>
            </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>244</span>
              <img src={dislike} alt="dislike" />
              <img src={save} alt="save" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
