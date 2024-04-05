/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VideoSelectWatch = ({ listVideo, screen }) => {
  const [activeVideo, setActiveVideo] = useState(listVideo[0]);
  const [activeId, setActiveId] = useState(listVideo[0].id);

  const handleSelectVideo = (item) => {
    setActiveId(item.id);
    // let videoSelect = listVideo.find((item) => item.id === id);
    setActiveVideo(item);
  };
  return (
    <div className="d-flex justify-content-between gap-3 sec-select-video">
      <div className={`w-67 flex-shrink-0 ${screen}`}>
        <iframe
          className={`iframe-youtube ${screen}`}
          src={activeVideo.linkyt}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {!screen ? (
          <div>
            <Link to={'/'}>
              <h3 className="card-title">{activeVideo.title}</h3>
            </Link>
            <p className="mt-2 mb-0 text-muted">{activeVideo.time}</p>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="d-flex flex-column gap-2 w-27 scroll-list">
        {listVideo.map((video) => (
          <div
            className="videos-item d-flex gap-2 align-items-start"
            key={video.id}
            onClick={() => handleSelectVideo(video)}
          >
            <span className="overflow-hidden flex-shrink-0 position-relative">
              <img src={video.thumb} width={140} height={78} alt="" />
              {activeId === video.id ? (
                <small className="playing">Đang phát</small>
              ) : (
                ''
              )}
            </span>
            <h5 className="card-title mt-0 limited-lines">{video.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSelectWatch;
