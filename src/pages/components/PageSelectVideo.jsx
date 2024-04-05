/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import VideoSelectWatch from '../../component/VideoSelectWatch';

const PageSelectVideo = ({ data }) => {
  return (
    <div className="rounded-4">
      <div className="select-video-title d-flex justify-content-between align-items-center">
        <h3 className="fw-bold d-flex gap-2 align-items-center">
          <img
            src="https://ss-statics.saostar.vn/static/images/hotvideo-icon.svg"
            alt=""
          />
          HOT VIDEO
        </h3>
      </div>
      <div className="mt-4 bg-secondary bg-opacity-10 ">
        <VideoSelectWatch listVideo={data} screen={'screen-mobile'} />
      </div>
    </div>
  );
};

export default PageSelectVideo;
