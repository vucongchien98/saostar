import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoSelectWatch from '../../component/VideoSelectWatch';

const listVideo = [
  {
    id: 1,
    linkyt: 'https://www.youtube.com/embed/GL4VOXmP7xU?si=Rs2Agz_rdLecYdC5',
    title:
      'Nữ sinh trầm cảm suốt 2 năm vì nghĩ mình là nguyên nhân khiến ba mẹ ly hôn | Thiếu Niên Tỏa Sáng',
    thumb: 'https://i.ytimg.com/vi/GL4VOXmP7xU/hqdefault.jpg',
    time: '02/04/2024 - 19:00',
  },
  {
    id: 2,
    linkyt: 'https://www.youtube.com/embed/XD8QLmBogEU?si=C80mNJhbjJ7Dif9C',
    title:
      'Dù không phải con ruột nhưng vẫn hết lòng yêu thương con #shorts #thieunientoasang',
    thumb: 'https://i.ytimg.com/vi/XD8QLmBogEU/hqdefault.jpg',
    time: '03/04/2024 - 9:00',
  },
  {
    id: 3,
    linkyt: 'https://www.youtube.com/embed/GL4VOXmP7xU?si=Rs2Agz_rdLecYdC5',
    title:
      'Dù không phải con ruột, nhưng Bác vẫn luôn dành sự uư tiên hàng đầu cho con!',
    thumb: 'https://i.ytimg.com/vi/GL4VOXmP7xU/hqdefault.jpg',
    time: '02/04/2024 - 19:00',
  },
  {
    id: 4,
    linkyt: 'https://www.youtube.com/embed/iKZWT2zmy8o?si=xjbj8bRwiz2wE35t',
    title:
      'Nữ sinh lên bục dũng khí mong muốn hóa giải hiểu lầm #shorts #thieunientoasang',
    thumb: 'https://i.ytimg.com/vi/iKZWT2zmy8o/hqdefault.jpg',
    time: '02/04/2024 - 19:00',
  },
  {
    id: 5,
    linkyt: 'https://www.youtube.com/embed/fcRpGQCAhbM?si=gBo-PBAydWzFwqTx',
    title: 'Chị gái bật khóc "bốc phốt" em trai #shorts #thieunientoasang',
    thumb: 'https://i.ytimg.com/vi/fcRpGQCAhbM/hqdefault.jpg',
    time: '02/04/2024 - 19:00',
  },
  {
    id: 6,
    linkyt: 'https://www.youtube.com/embed/GL4VOXmP7xU?si=Rs2Agz_rdLecYdC5',
    title:
      'Nữ sinh trầm cảm suốt 2 năm vì nghĩ mình là nguyên nhân khiến ba mẹ ly hôn | Thiếu Niên Tỏa Sáng',
    thumb: 'https://i.ytimg.com/vi/GL4VOXmP7xU/hqdefault.jpg',
    time: '02/04/2024 - 19:00',
  },
  {
    id: 7,
    linkyt: 'https://www.youtube.com/embed/XD8QLmBogEU?si=C80mNJhbjJ7Dif9C',
    title:
      'Dù không phải con ruột nhưng vẫn hết lòng yêu thương con #shorts #thieunientoasang',
    thumb: 'https://i.ytimg.com/vi/XD8QLmBogEU/hqdefault.jpg',
    time: '03/04/2024 - 9:00',
  },
  {
    id: 8,
    linkyt: 'https://www.youtube.com/embed/GL4VOXmP7xU?si=Rs2Agz_rdLecYdC5',
    title:
      'Dù không phải con ruột, nhưng Bác vẫn luôn dành sự uư tiên hàng đầu cho con!',
    thumb: 'https://i.ytimg.com/vi/GL4VOXmP7xU/hqdefault.jpg',
    time: '02/04/2024 - 19:00',
  },
  {
    id: 9,
    linkyt: 'https://www.youtube.com/embed/iKZWT2zmy8o?si=xjbj8bRwiz2wE35t',
    title:
      'Nữ sinh lên bục dũng khí mong muốn hóa giải hiểu lầm #shorts #thieunientoasang',
    thumb: 'https://i.ytimg.com/vi/iKZWT2zmy8o/hqdefault.jpg',
    time: '02/04/2024 - 19:00',
  },
  {
    id: 10,
    linkyt: 'https://www.youtube.com/embed/fcRpGQCAhbM?si=gBo-PBAydWzFwqTx',
    title: 'Chị gái bật khóc "bốc phốt" em trai #shorts #thieunientoasang',
    thumb: 'https://i.ytimg.com/vi/fcRpGQCAhbM/hqdefault.jpg',
    time: '02/04/2024 - 19:00',
  },
  {
    id: 11,
    linkyt: 'https://www.youtube.com/embed/GL4VOXmP7xU?si=Rs2Agz_rdLecYdC5',
    title:
      'Nữ sinh trầm cảm suốt 2 năm vì nghĩ mình là nguyên nhân khiến ba mẹ ly hôn | Thiếu Niên Tỏa Sáng',
    thumb: 'https://i.ytimg.com/vi/GL4VOXmP7xU/hqdefault.jpg',
    time: '02/04/2024 - 19:00',
  },
  {
    id: 12,
    linkyt: 'https://www.youtube.com/embed/GL4VOXmP7xU?si=Rs2Agz_rdLecYdC5',
    title:
      'Nữ sinh trầm cảm suốt 2 năm vì nghĩ mình là nguyên nhân khiến ba mẹ ly hôn | Thiếu Niên Tỏa Sáng',
    thumb: 'https://i.ytimg.com/vi/GL4VOXmP7xU/hqdefault.jpg',
    time: '02/04/2024 - 19:00',
  },
];

const SectionSelectVideos = () => {
  return (
    <div className="bg-secondary bg-opacity-10 p-4 rounded-4">
      <div className="select-video-title d-flex justify-content-between align-items-center">
        <span>
          <img
            src="https://ss-statics.saostar.vn/static/images/ico_saoseries.svg"
            alt=""
          />
        </span>
        <Link to={'https://www.youtube.com/c/VIVAShows'}>
          <span className="mx-2">Xem video trên</span>
          <img
            src="https://ss-statics.saostar.vn/static/images/icon_viva.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="mt-4">
        <VideoSelectWatch listVideo={listVideo} />
      </div>
    </div>
  );
};

export default SectionSelectVideos;
