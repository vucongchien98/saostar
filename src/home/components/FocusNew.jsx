import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const data = [
  {
    slug: '/video/1',
    title: 'Lý Nhã Kỳ bị đơ khi bị đồn hẹn hò Gil Lê',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/1/pc/1711932917251/pzeegb9v461-gx9ulr3rfd2-0ynz6pco523.png',
  },
  {
    slug: '/video/2',
    title: 'Lý Nhã Kỳ đếm kim cương vì buồn chứ không phải khoe',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/1/pc/1711933401638/dto9211wxj1-uzeaclhndz2-cjnc1kvdqv3.jpeg',
  },
  {
    slug: '/video/3',
    title: 'Đàm Vĩnh Hưng té ngửa khi nhận quà độc lạ từ fan',
    thumb:
      'https://ss-images.saostar.vn/w400/2024/3/29/pc/1711725342503/q3d7uazer21-xqpprprjhe2-bi003e0hf83.jpg',
  },
  {
    slug: '/video/4',
    title: 'Ninh Dương gây náo loạn trung tâm thương mại',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/3/28/pc/1711634309461/10cs4yuldj1-4qr6t9yrzf2-skks1ik1cb3.jpeg',
  },
  {
    slug: '/video/5',
    title:
      'Xuân Lan: Tuyệt đối không thỏa hiệp khi người đàn ông của mình có tiểu tam',
    thumb:
      'https://ss-images.saostar.vn/w400/2024/3/27/pc/1711514243632/zofdks5p7x1-guct8hcgr42-rdypgldqps3.jpeg',
  },
  {
    slug: '/video/6',
    title: "Siêu mẫu Xuân Lan: 'Đâu phải chỉ showbiz mới có tiểu tam!'",
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/3/27/pc/1711514458264/fwfh3o8u531-5eenpd7mof2-wx23zyt0u43.jpeg',
  },
  {
    slug: '/video/7',
    title: 'Xuân Lan: Tôi không đào tạo người mẫu ưỡn ẹo',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/3/27/pc/1711514362635/c6j4di299l1-eaxxdkpbup2-j7wvambqp53.jpeg',
  },
  {
    slug: '/video/8',
    title: 'Nghệ sĩ Hồng Vân khẳng định mẹ luôn là người thua hết',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/3/22/pc/1711105947795/1z29wth86u1-wv1d8o85c52-yax059ue3g3.jpeg',
  },
];

const FocusNew = () => {
  return (
    <div className="focus-news">
      <div className="focus-btn">
        <h2>Focus News</h2>
        <Link to="/videos" className="btn-seemore">
          Xem thêm <FaArrowRight />
        </Link>
      </div>
      <div className="focus-list mt-3">
        {data.map((item, index) => (
          <div key={index} className="focus-item">
            <Link to={item.slug} className="focus-link">
              <div className="video-thumb">
                <img src={item.thumb} alt="" width={250} height={400} />
              </div>
              <div className="focus-title">{item.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FocusNew;
