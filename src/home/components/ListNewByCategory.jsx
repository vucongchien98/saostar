import React from 'react';
import CategoryPost from '../../component/CategoryPost';

const dataNguoiMau = {
  title: 'Người mẫu - hoa hậu',
  slug: 'nguoi-mau-hoa-hau',
  icon: 'https://ss-statics.saostar.vn/static/fonts/ss/hoahau.svg',
  content: [
    {
      title:
        "MC Mai Ngọc diễn thời trang, thần thái 'chặt' đẹp như mẫu chuyên nghiệp",
      thumb:
        'https://ss-images.saostar.vn/wwebp400/2024/4/4/pc/1712205790672/jyvse3pt6h1-qz80xbcfzo2-gys2vbwzml3.jpeg',
      subtitle: '',
      time: '03/04/2023',
      haveVideo: false,
      slug: 'mc-mai-ngoc-dien-thoi-trang-than-thai-chat-đep-nhu-mau-chuyen-nghiep',
    },
    {
      title: "Chân dung Á hậu Vbiz được mệnh danh 'đẹp từ trong trứng nước'",
      thumb:
        'https://ss-images.saostar.vn/wwebp400/2024/4/3/pc/1712142658616/h61aaw5lit1-0ario77su82-b9gti4xqt33.jpeg',
      subtitle: '',
      time: '02/04/2023',
      haveVideo: false,
      slug: 'chan-dung-a-hau-vbiz-đuoc-menh-danh-đep-tu-trong-trung-nuoc',
    },
    {
      title:
        'Tài khoản Lê Ngọc Như là giả, còn tự nhận được cử đi thi Miss Supranational?',
      thumb:
        'https://ss-images.saostar.vn/wwebp400/2024/4/4/pc/1712205219868/pje56ak8tx1-dnv6lrae8d2-8j9nor4f1p3.png',
      subtitle: '',
      time: '03/04/2023',
      haveVideo: false,
      slug: 'tai-khoan-le-ngoc-nhu-la-gia-con-tu-nhan-đuoc-cu-đi-thi-miss-supranational',
    },
  ],
};

const dataThoitrang = {
  title: 'Thời trang',
  slug: 'thoi-trang',
  icon: 'https://ss-statics.saostar.vn/static/fonts/ss/fashion.svg',
  content: [
    {
      title: "Hồ Ngọc Hà đăng ảnh 'mát mẻ' gây phản cảm, ai xem cũng nhức mắt",
      thumb:
        'https://ss-images.saostar.vn/wwebp400/2024/4/4/pc/1712221326870/ah037occb51-ln02211dfz2-m02b41ya2h3.png',
      subtitle: '',
      time: '2 giờ trước',
      haveVideo: false,
      slug: 'ho-ngoc-ha-đang-anh-mat-me-gay-phan-cam-ai-xem-cung-nhuc-mat',
    },
    {
      title: 'MC Mai Ngọc xinh đẹp từ trường quay đến cuộc sống thường nhật',
      thumb:
        'https://ss-images.saostar.vn/wwebp400/2024/4/4/pc/1712186751833/skhqe8n6op1-b6zhumraof2-5rnxnn65yo3.jpg',
      subtitle: '',
      time: '02/04/2023',
      haveVideo: false,
      slug: 'mc-mai-ngoc-xinh-đep-tu-truong-quay-đen-cuoc-song-thuong-nhat',
    },
    {
      title: 'Ngọc Trinh diện áo dài, tay trong tay xuống phố cùng bạn trai',
      thumb:
        'https://ss-images.saostar.vn/wwebp400/2024/4/3/pc/1712163284116/l540hphkwc1-v8o7gnldoh2-jynglzs11a3.jpg',
      subtitle: '',
      time: '03/04/2023',
      haveVideo: false,
      slug: 'ngoc-trinh-dien-ao-dai,-tay-trong-tay-xuong-pho-cung-ban-trai',
    },
  ],
};

const dataDep = {
  title: 'Đẹp',
  slug: 'dep',
  icon: 'https://ss-statics.saostar.vn/static/fonts/ss/dep-360.svg',
  content: [
    {
      title:
        'Nhan sắc xinh đẹp của cựu siêu mẫu Việt lấy chồng một năm đã qua Mỹ làm lao công',
      thumb:
        'https://ss-images.saostar.vn/wwebp400/2024/4/3/pc/1712144141951/m05nipkcgo1-fsjwg3awcq2-q4wne6uvim3.jpg',
      subtitle: '',
      time: '2 giờ trước',
      haveVideo: false,
      slug: 'nhan-sac-xinh-đep-cua-cuu-sieu-mau-viet-lay-chong-mot-nam-đa-qua-my-lam-lao-cong',
    },
    {
      title: "Nhan sắc 'một chín một mười' của Doãn Hải My và mẹ ruột",
      thumb:
        'https://ss-images.saostar.vn/wwebp400/2024/4/4/pc/1712198686877/ndwrs23hwc1-j1dngqlei22-gn7a3mzx813.jpeg',
      subtitle: '',
      time: '02/04/2023',
      haveVideo: false,
      slug: 'nhan-sac-mot-chin-mot-muoi-cua-doan-hai-my-va-me-ruot',
    },
    {
      title: "TikToker Nam 'đẹp trai' có… đẹp trai?",
      thumb:
        'https://ss-images.saostar.vn/wwebp400/2024/4/3/pc/1712116971744/oqtv9dus7o1-f8now5u28a2-lsvu3nz5dv3.png',
      subtitle: '',
      time: '03/04/2023',
      haveVideo: false,
      slug: 'tiktoker-nam-đep-trai-co-đep-trai',
    },
  ],
};

const ListNewByCategory = () => {
  return (
    <div>
      <hr className="hr-grey" />
      <div className="d-flex justify-content-between gap-5">
        <CategoryPost data={dataNguoiMau} />
        <CategoryPost data={dataThoitrang} />
        <CategoryPost data={dataDep} />
      </div>
      <hr className="hr-grey" />
      <div className="d-flex justify-content-between gap-5">
        <CategoryPost data={dataNguoiMau} />
        <CategoryPost data={dataThoitrang} />
        <CategoryPost data={dataDep} />
      </div>
      <hr className="hr-grey" />

      <div className="d-flex justify-content-between gap-5">
        <CategoryPost data={dataNguoiMau} />
        <CategoryPost data={dataThoitrang} />
        <CategoryPost data={dataDep} />
      </div>
      <hr className="hr-grey" />

      <div className="d-flex justify-content-between gap-5">
        <CategoryPost data={dataNguoiMau} />
        <CategoryPost data={dataThoitrang} />
        <CategoryPost data={dataDep} />
      </div>
    </div>
  );
};

export default ListNewByCategory;
