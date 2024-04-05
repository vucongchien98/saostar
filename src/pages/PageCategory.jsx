import React, { useEffect, useState } from 'react';
import Tags from '../component/Tags';
import SectionAds from '../component/SectionAds';
import FirstSection from './components/FirstSection';

import { useParams } from 'react-router-dom';
import CardHorizontal from '../component/CardHorizontal';
import PageSelectVideo from './components/PageSelectVideo';
import SectionHotNews from './components/SectionHotNews';

const masterdata = [
  {
    title: 'Người mẫu - hoa hậu',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/hoahau.svg',
    listNews: [
      {
        slug: 'bui-quynh-hoa-lot-top-xu-huong-tim-kiem-tren-google-ly-do-la-gi',
        thumb:
          'https://ss-images.saostar.vn/wwebp800/2024/4/5/pc/1712287849637/j5pe1l0ucr1-yb9g7w8c762-f72jqyxb3y3.jpg',
        title:
          'Bùi Quỳnh Hoa lọt top xu hướng tìm kiếm trên Google, lý do là gì?',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: true,
        time: '5 giờ trước',
      },
      {
        slug: 'vu-thuy-quynh-toi-buon-truoc-nhung-phat-ngon-khong-hay-cua-mot-so-nguoi-đep',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/3/25/pc/1711362956200/hnoo3ikm3m1-nlzqz8mviq2-gpgrkct03p3.jpg',
        title:
          "Vũ Thúy Quỳnh: 'Tôi buồn trước những phát ngôn không hay của một số người đẹp'",
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: false,
        time: '3 giờ trước',
      },
      {
        slug: 'nam-em-bi-noi-lay-tien-fan-tang-nuoi-trai',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/5/pc/1712282747683/yfqeymf5q71-34z8ja0gkg2-tctt42rl9c3.jpeg',
        title: 'Nam Em bị nói lấy tiền fan tặng nuôi trai',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: true,
        time: '6 giờ trước',
      },
      {
        slug: 'nam-em-bi-noi-lay-tien-fan-tang-nuoi-trai',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/5/pc/1712282747683/yfqeymf5q71-34z8ja0gkg2-tctt42rl9c3.jpeg',
        title: 'Nam Em bị nói lấy tiền fan tặng nuôi trai',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: false,
        time: '6 giờ trước',
      },
      {
        slug: 'nam-em-bi-noi-lay-tien-fan-tang-nuoi-trai',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/5/pc/1712282747683/yfqeymf5q71-34z8ja0gkg2-tctt42rl9c3.jpeg',
        title: 'Nam Em bị nói lấy tiền fan tặng nuôi trai',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: false,
        time: '6 giờ trước',
      },
      {
        slug: 'nam-em-bi-noi-lay-tien-fan-tang-nuoi-trai',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/5/pc/1712282747683/yfqeymf5q71-34z8ja0gkg2-tctt42rl9c3.jpeg',
        title: 'Nam Em bị nói lấy tiền fan tặng nuôi trai',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: true,
        time: '6 giờ trước',
      },
      {
        slug: 'nam-em-bi-noi-lay-tien-fan-tang-nuoi-trai',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/5/pc/1712282747683/yfqeymf5q71-34z8ja0gkg2-tctt42rl9c3.jpeg',
        title: 'Nam Em bị nói lấy tiền fan tặng nuôi trai',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: false,
        time: '6 giờ trước',
      },
      {
        slug: 'nam-em-bi-noi-lay-tien-fan-tang-nuoi-trai',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/5/pc/1712282747683/yfqeymf5q71-34z8ja0gkg2-tctt42rl9c3.jpeg',
        title: 'Nam Em bị nói lấy tiền fan tặng nuôi trai',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: false,
        time: '6 giờ trước',
      },
      {
        slug: 'nam-em-bi-noi-lay-tien-fan-tang-nuoi-trai',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/5/pc/1712282747683/yfqeymf5q71-34z8ja0gkg2-tctt42rl9c3.jpeg',
        title: 'Nam Em bị nói lấy tiền fan tặng nuôi trai',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: true,
        time: '6 giờ trước',
      },
    ],
    tags: [
      { title: 'hoa hậu', slug: 'hoa-hau' },
      { title: 'hoa hậu hoàn vũ', slug: 'hoa-hau-hoan-vu' },
      { title: 'miss universe', slug: 'miss-universe' },
      { title: 'miss universe việt nam', slug: 'miss-universe-viet-nam' },
    ],
    slug: 'nguoi-mau-hoa-hau',
    listVideos: [
      {
        id: 1,
        linkyt: 'https://www.youtube.com/embed/kQHNf4FsGdM',
        title: 'Ninh Dương gây náo loạn trung tâm thương mại',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/3/28/pc/1711634309461/qli7nolivs1-nwd4e3qhvf2-7klysk2d0c3.jpeg',
        time: '02/04/2024 - 19:00',
      },
      {
        id: 2,
        linkyt: 'https://www.youtube.com/embed/mU9QiwrTm40',
        title: 'Lý Nhã Kỳ đếm kim cương vì buồn chứ không phải khoe',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/1/pc/1711933401638/1i9lzswcwn1-dxtwepig7z2-32hqodt7jb3.jpeg',
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
    ],
    listHotNews: [],
  },
  {
    title: 'Thời trang',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/hoahau.svg',
    listNews: [
      {
        slug: 'ho-ngoc-ha-đang-anh-mat-me-gay-phan-cam-ai-xem-cung-nhuc-mat',
        thumb:
          'https://ss-images.saostar.vn/wwebp800/2024/4/4/pc/1712221326870/ah037occb51-ln02211dfz2-m02b41ya2h3.png',
        title:
          "Hồ Ngọc Hà đăng ảnh 'mát mẻ' gây phản cảm, ai xem cũng nhức mắt",
        subtitle: 'Hồ Ngọc Hà vừa đăng loạt ảnh nóng bỏng đến mức... phản cảm.',
        haveVideo: true,
        time: '22 giờ trước',
      },
      {
        slug: 'mc-mai-ngoc-xinh-đep-tu-truong-quay-đen-cuoc-song-thuong-nhat',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/4/pc/1712186751833/skhqe8n6op1-b6zhumraof2-5rnxnn65yo3.jpg',
        title: 'MC Mai Ngọc xinh đẹp từ trường quay đến cuộc sống thường nhật',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: false,
        time: '04/04/2024 - 22:30',
      },
      {
        slug: 'ngoc-trinh-dien-ao-dai-tay-trong-tay-xuong-pho-cung-ban-trai',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/3/pc/1712163284116/l540hphkwc1-v8o7gnldoh2-jynglzs11a3.jpg',
        title: 'Ngọc Trinh diện áo dài, tay trong tay xuống phố cùng bạn trai',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: false,
        time: '03/04/2024 - 10:30',
      },
    ],
    tags: [
      { title: 'hoa hậu', slug: 'hoa-hau' },
      { title: 'hoa hậu hoàn vũ', slug: 'hoa-hau-hoan-vu' },
      { title: 'miss universe', slug: 'miss-universe' },
      { title: 'miss universe việt nam', slug: 'miss-universe-viet-nam' },
    ],
    slug: 'thoi-trang',
    listVideos: [
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
    ],
    listHotNews: [],
  },
  {
    title: 'Đẹp',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/dep-360.svg',
    listNews: [
      {
        slug: 'ho-ngoc-ha-đang-anh-mat-me-gay-phan-cam-ai-xem-cung-nhuc-mat',
        thumb:
          'https://ss-images.saostar.vn/wwebp800/2024/4/4/pc/1712221326870/ah037occb51-ln02211dfz2-m02b41ya2h3.png',
        title:
          "Hồ Ngọc Hà đăng ảnh 'mát mẻ' gây phản cảm, ai xem cũng nhức mắt",
        subtitle: 'Hồ Ngọc Hà vừa đăng loạt ảnh nóng bỏng đến mức... phản cảm.',
        haveVideo: 'link video',
        time: '22 giờ trước',
      },
      {
        slug: 'mc-mai-ngoc-xinh-đep-tu-truong-quay-đen-cuoc-song-thuong-nhat',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/4/pc/1712186751833/skhqe8n6op1-b6zhumraof2-5rnxnn65yo3.jpg',
        title: 'MC Mai Ngọc xinh đẹp từ trường quay đến cuộc sống thường nhật',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: 'link video',
        time: '04/04/2024 - 22:30',
      },
      {
        slug: 'mc-mai-ngoc-xinh-đep-tu-truong-quay-đen-cuoc-song-thuong-nhat',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/4/pc/1712186751833/skhqe8n6op1-b6zhumraof2-5rnxnn65yo3.jpg',
        title: 'MC Mai Ngọc xinh đẹp từ trường quay đến cuộc sống thường nhật',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: 'link video',
        time: '04/04/2024 - 22:30',
      },
    ],
    tags: [
      { title: 'hoa hậu', slug: 'hoa-hau' },
      { title: 'hoa hậu hoàn vũ', slug: 'hoa-hau-hoan-vu' },
      { title: 'miss universe', slug: 'miss-universe' },
      { title: 'miss universe việt nam', slug: 'miss-universe-viet-nam' },
    ],
    slug: 'dep',
    listVideos: [
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
    ],
    listHotNews: [],
  },
  {
    title: 'Giải trí',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/giaitri.svg',
    listNews: [
      {
        slug: 'ho-ngoc-ha-đang-anh-mat-me-gay-phan-cam-ai-xem-cung-nhuc-mat',
        thumb:
          'https://ss-images.saostar.vn/wwebp800/2024/4/4/pc/1712221326870/ah037occb51-ln02211dfz2-m02b41ya2h3.png',
        title:
          "Hồ Ngọc Hà đăng ảnh 'mát mẻ' gây phản cảm, ai xem cũng nhức mắt",
        subtitle: 'Hồ Ngọc Hà vừa đăng loạt ảnh nóng bỏng đến mức... phản cảm.',
        haveVideo: 'link video',
        time: '22 giờ trước',
      },
      {
        slug: 'mc-mai-ngoc-xinh-đep-tu-truong-quay-đen-cuoc-song-thuong-nhat',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/4/pc/1712186751833/skhqe8n6op1-b6zhumraof2-5rnxnn65yo3.jpg',
        title: 'MC Mai Ngọc xinh đẹp từ trường quay đến cuộc sống thường nhật',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: 'link video',
        time: '04/04/2024 - 22:30',
      },
      {
        slug: 'mc-mai-ngoc-xinh-đep-tu-truong-quay-đen-cuoc-song-thuong-nhat',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/4/pc/1712186751833/skhqe8n6op1-b6zhumraof2-5rnxnn65yo3.jpg',
        title: 'MC Mai Ngọc xinh đẹp từ trường quay đến cuộc sống thường nhật',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: 'link video',
        time: '04/04/2024 - 22:30',
      },
    ],
    tags: [
      { title: 'hoa hậu', slug: 'hoa-hau' },
      { title: 'hoa hậu hoàn vũ', slug: 'hoa-hau-hoan-vu' },
      { title: 'miss universe', slug: 'miss-universe' },
      { title: 'miss universe việt nam', slug: 'miss-universe-viet-nam' },
    ],
    slug: 'giai-tri',
    listVideos: [
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
    ],
    listHotNews: [],
  },
  {
    title: 'Âm nhạc',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/amnhac.svg',
    listNews: [
      {
        slug: 'ho-ngoc-ha-đang-anh-mat-me-gay-phan-cam-ai-xem-cung-nhuc-mat',
        thumb:
          'https://ss-images.saostar.vn/wwebp800/2024/4/4/pc/1712221326870/ah037occb51-ln02211dfz2-m02b41ya2h3.png',
        title:
          "Hồ Ngọc Hà đăng ảnh 'mát mẻ' gây phản cảm, ai xem cũng nhức mắt",
        subtitle: 'Hồ Ngọc Hà vừa đăng loạt ảnh nóng bỏng đến mức... phản cảm.',
        haveVideo: 'link video',
        time: '22 giờ trước',
      },
      {
        slug: 'mc-mai-ngoc-xinh-đep-tu-truong-quay-đen-cuoc-song-thuong-nhat',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/4/pc/1712186751833/skhqe8n6op1-b6zhumraof2-5rnxnn65yo3.jpg',
        title: 'MC Mai Ngọc xinh đẹp từ trường quay đến cuộc sống thường nhật',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: 'link video',
        time: '04/04/2024 - 22:30',
      },
      {
        slug: 'mc-mai-ngoc-xinh-đep-tu-truong-quay-đen-cuoc-song-thuong-nhat',
        thumb:
          'https://ss-images.saostar.vn/wwebp400/2024/4/4/pc/1712186751833/skhqe8n6op1-b6zhumraof2-5rnxnn65yo3.jpg',
        title: 'MC Mai Ngọc xinh đẹp từ trường quay đến cuộc sống thường nhật',
        subtitle:
          'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
        haveVideo: 'link video',
        time: '04/04/2024 - 22:30',
      },
    ],
    tags: [
      { title: 'hoa hậu', slug: 'hoa-hau' },
      { title: 'hoa hậu hoàn vũ', slug: 'hoa-hau-hoan-vu' },
      { title: 'miss universe', slug: 'miss-universe' },
      { title: 'miss universe việt nam', slug: 'miss-universe-viet-nam' },
    ],
    slug: 'am-nhac',
    listVideos: [
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
    ],
    listHotNews: [],
  },
];

const PageCategory = () => {
  const [dataCategory, setDataCategory] = useState(null);
  const [firstThree, setFirstThree] = useState(null);

  const params = useParams();

  useEffect(() => {
    const category = masterdata.find(
      (category) => category.slug === params.category
    );
    setDataCategory(category);
    if (category.listNews.length > 3) {
      setFirstThree(category.listNews.slice(0, 3));
    } else {
      setFirstThree(category.listNews);
    }
    console.log(firstThree);
  }, [params.category]);

  if (!dataCategory) {
    return <div className="inner mt-4 px-4">Loading...</div>;
  }

  return (
    <div className="inner mt-4 px-4">
      <Tags
        tags={dataCategory.tags}
        category={dataCategory.title}
        icon={dataCategory.icons}
      />
      <div className="my-4">
        <div className="d-flex gap-30">
          <div className="article-size">
            <FirstSection
              data={firstThree ? firstThree : dataCategory.listNews}
            />
            <hr className="hr-red" />
            <div className="d-flex flex-column flex-grow-1">
              {dataCategory.listNews.map((item, index) => (
                <div key={index}>
                  <CardHorizontal data={item} />
                  <hr className="my-4" />
                </div>
              ))}
            </div>
            <div>
              <PageSelectVideo data={dataCategory.listVideos} />
            </div>
            <div className="mt-5 d-flex flex-column flex-grow-1">
              {dataCategory.listNews.map((item, index) => (
                <div key={index}>
                  <CardHorizontal data={item} />
                  <hr className="my-4" />
                </div>
              ))}
            </div>
          </div>

          <div className="section-ads w-300">
            <SectionAds />
          </div>
        </div>
      </div>
      <div className="my-4">
        <SectionHotNews />
      </div>
      <div className="my-4">
        <div className="d-flex gap-30">
          <div className="article-size">
            <div className="mt-5 d-flex flex-column flex-grow-1">
              {dataCategory.listNews.map((item, index) => (
                <div key={index}>
                  <CardHorizontal data={item} />
                  <hr className="my-4" />
                </div>
              ))}
              <div className="page-seemore">Xem thêm</div>
            </div>
          </div>

          <div className="section-ads w-300">
            <SectionAds />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCategory;
