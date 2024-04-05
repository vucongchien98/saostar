import React from 'react';
import SliderList from '../../component/SliderList';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const SectionSliderSm = () => {
  const dataSlider = [
    {
      slug: '',
      thumb:
        'https://ss-images.saostar.vn/w400/2024/3/28/pc/1711619163590/k3046bujij1-f69tyovw0q2-npptda1v2z3.png',
      title:
        'Ninh Anh Bùi - Nguyễn Tùng Dương để lộ nhẫn đính hôn, ngày trọng đại đang đến rất gần?',
      time: '20/03/2024',
    },
    {
      slug: '',
      thumb:
        'https://ss-images.saostar.vn/gif/2024/3/29/pc/1711696637048/7hfhrhs2cb1-7m6tgd0cf52-mmlk3cij363.gif',
      title:
        "Không còn là đồn đoán, Phạm Thoại chính thức trở thành 'chồng người ta''",
      time: '21/03/2024',
    },
    {
      slug: '',
      thumb:
        'https://ss-images.saostar.vn/w400/2024/3/29/pc/1711680124362/g17mor4rms1-1tluiajulk2-658jos18t23.jpg',
      title: 'Danh tính cô gái chụp ảnh cưới cùng TikToker Phạm Thoại?',
      time: '22/03/2024',
    },
    {
      slug: '',
      thumb:
        'https://ss-images.saostar.vn/w400/2024/3/28/pc/1711631068322/7yf7eqzhfn1-xiajap2sl22-3fi3cj74q43.jpg',
      title:
        'TikToker Phạm Thoại lấy vợ, gửi thiệp mời và khoe cả rạp cưới nhưng bạn bè chẳng ai tin',
      time: '25/03/2024',
    },
  ];

  const category = {
    thumb: 'https://ss-statics.saostar.vn/static/images/social-icon.svg',
    title: 'SOCIAL ICON',
    slug: '/specical',
  };
  return (
    <div className="section-slider bg-pink sec-videos mt-5">
      <div className="d-flex justify-content-between slider-title align-items-center mb-3">
        <h2 className="fw-bold fs-2 d-flex align-items-center ">
          <img src={category.thumb ? category.thumb : ''} alt="" />
          {category.title ? category.title : ''}
        </h2>
        <Link to={`/videos/${category.slug}`} className="btn-seemore">
          Xem thêm <FaArrowRight />
        </Link>
      </div>
      <SliderList data={dataSlider} />
    </div>
  );
};

export default SectionSliderSm;
