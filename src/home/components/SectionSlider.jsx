import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import SliderList from '../../component/SliderList';

const SectionSlider = () => {
  const dataSlider = [
    {
      slug: '',
      thumb:
        'https://ss-images.saostar.vn/wwebp800/2024/4/1/pc/1711967992318/lv7v8r8v691-rjiv8gx9i92-hn1ymolx5h3.jpg',
      title:
        'Qua tấm ảnh trắng đen, chàng trai Mỹ quyết định đến Việt Nam tìm người cha bỏ rơi mình',
      time: '20/03/2024',
    },
    {
      slug: '',
      thumb:
        'https://ss-images.saostar.vn/wwebp800/2024/3/24/pc/1711264013376/otf6vzzdiw1-yi2dzhtu0e2-h1dfi0kti53.jpg',
      title:
        "Xuân Lan: 'Chồng tôi ghét những người đàn ông đến trước đã làm tôi ám ảnh'",
      time: '21/03/2024',
    },
    {
      slug: '',
      thumb:
        'https://ss-images.saostar.vn/wwebp800/2024/3/26/pc/1711418339076/0dc4isttsr1-co5dimdf7o2-3lno9xpgl53.jpg',
      title:
        "Lý Nhã Kỳ: 'Tuổi 20, tôi mộng mơ khi yêu nghệ sĩ, cứ ngỡ chuyện cổ tích lọ lem và hoàng tử'",
      time: '22/03/2024',
    },
    {
      slug: '',
      thumb:
        'https://ss-images.saostar.vn/wwebp800/2024/3/12/pc/1710234189448/7r5r6tjv5q1-r8x73zi7312-1jv3bof3hu3.jpg',
      title:
        "Diễn viên Thanh Hương: 'Mỗi sáng thức dậy không còn là bận tâm đầu tiên, chúng tôi chia tay'",
      time: '25/03/2024',
    },
  ];

  const category = {
    thumb: 'https://ss-statics.saostar.vn/static/images/ico_special_new.svg',
    slug: '/specical',
  };

  return (
    <div className="section-slider mt-5">
      <div className="d-flex justify-content-between slider-title align-items-center mb-3">
        <h2 className="fw-bold fs-2 d-flex align-items-center ">
          <img src={category.thumb ? category.thumb : ''} alt="" />
          {category.title ? category.title : ''}
        </h2>
        <Link to={`/videos/${category.slug}`} className="btn-seemore">
          Xem thêm <FaArrowRight />
        </Link>
      </div>
      <SliderList data={dataSlider} category={category} />
    </div>
  );
};

export default SectionSlider;
