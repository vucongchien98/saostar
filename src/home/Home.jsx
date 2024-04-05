import React from 'react';
import { Link } from 'react-router-dom';
import CardVertical from '../component/CardVertical';
import FocusNew from './components/FocusNew';
import Tags from '../component/Tags';
import SliderList from '../component/SliderList';
import { FaArrowRight } from 'react-icons/fa6';
import SectionVideoVertical from './components/SectionVideoVertical';
import SectionAds from '../component/SectionAds';
import SectionSlider from './components/SectionSlider';
import SectionSliderSm from './components/SectionSliderSm';
import ListNewByCategory from './components/ListNewByCategory';
import SectionSelectVideos from './components/SectionSelectVideos';
import CardHorizontal from '../component/CardHorizontal';

const tags = [
  { title: 'Miss world 2023', slug: 'miss-world-2023' },
  { title: 'Nữ hoàng thảm đỏ', slug: 'nu-hoang-tham-do' },
  { title: 'Đẹp chuẩn idol', slug: 'dep-chuan-idol' },
];

const data = [
  {
    slug: 'bui-quynh-anh-lot-top-xu-huong-tim-kiem-tren-google-ly-do-la-gi',
    thumb:
      'https://ss-images.saostar.vn/wwebp800/2024/4/3/pc/1712135188753/4ojzzyy8b51-rdx78nfw0r2-wn9cynkunp3.jpeg',
    title: 'Bùi Quỳnh Hoa lọt top xu hướng tìm kiếm trên Google, lý do là gì?',
    subtitle:
      'Kể từ sau khi đăng quang, Hoa hậu Vbiz này liên tục vướng phải nhiều ồn ào.',
    haveVideo: true,
    slugCategory: 'nguoi-mau-hoa-hau',
  },
  {
    slug: 'quynh-kool-noi-gi-khi-vuong-nghi-van-hen-ho-voi-viet-anh',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/3/pc/1712129273328/hlqwurc7661-3qcyx2j0ct2-vq4mk7cx333.jpg',
    title: 'Quỳnh Kool nói gì khi vướng nghi vấn hẹn hò với Việt Anh?',
    subtitle: '',
    haveVideo: true,
    slugCategory: 'dep',
  },
  {
    slug: 'loat-hanh-đong-tinh-te-cua-ngo-kien-huy-danh-cho-me-bau-đong-nhi-chuan-ban-nha-nguoi-ta',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/3/pc/1712118949745/v3mgxyk7sk1-gdiucad9ms2-5jl61ix0a13.jpg',
    title:
      'Loạt hành động tinh tế của Ngô Kiến Huy dành cho mẹ bầu Đông Nhi: Chuẩn bạn nhà người ta!',
    subtitle: '',
    haveVideo: true,
    slugCategory: 'thoi-trang',
  },
];

const dataBot = [
  {
    slug: 'su-nghiep-cua-tieu-chien-bi-anh-huong-vi-ban-gai-kem-8-tuoi',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/3/pc/1712129272828/5kpo057mhh1-86kpaxwcdl2-zi0fvbiiuh3.jpg',
    title: 'Sự nghiệp của Tiêu Chiến bị ảnh hưởng vì bạn gái kém 8 tuổi',
    subtitle: '',
    haveVideo: true,
    slugCategory: 'thoi-trang',
  },
  {
    slug: 'vu-cat-tuong-bi-bat-gap-đi-du-lich-cung-ban-gai-ngoai-hinh-ca-hai-co-xung-đoi',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/3/pc/1712121275554/rohxgfvyj91-pz6w3hagke2-s8o0bozgea3.png',
    title:
      'Vũ Cát Tường bị bắt gặp đi du lịch cùng bạn gái: Ngoại hình cả hai có xứng đôi?',
    subtitle: '',
    haveVideo: true,
    slugCategory: 'thoi-trang',
  },
  {
    slug: 'ro-tin-ly-hon-nhung-chua-mot-lan-len-tieng-cuoc-song-cua-mc-diep-chi-gio-ra-sao',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/3/pc/1712131720032/j3v97s1ncj1-71nyfyzz8p2-4ew1ahhjdt3.jpg',
    title:
      'Rộ tin ly hôn nhưng chưa một lần lên tiếng, cuộc sống của MC Diệp Chi giờ ra sao?',
    subtitle: '',
    haveVideo: false,
    slugCategory: 'thoi-trang',
  },
  {
    slug: 'nguoi-chi-than-thiet-cua-co-ns-vu-linh-tiet-lo-thai-đo-cua-hong-loan-voi-tien-boi',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/3/pc/1712117891949/axnbc3bais1-omr74uqqsz2-aumh78x8303.jpg',
    title:
      'Người chị thân thiết của cố NS Vũ Linh tiết lộ thái độ của Hồng Loan với tiền bối',
    subtitle: '',
    haveVideo: false,
    slugCategory: 'thoi-trang',
  },
];
const dataHorizontal = [
  {
    slug: 'ho-ngoc-ha-đang-anh-mat-me-gay-phan-cam-ai-xem-cung-nhuc-mat',
    thumb:
      'https://ss-images.saostar.vn/wwebp800/2024/4/4/pc/1712221326870/ah037occb51-ln02211dfz2-m02b41ya2h3.png',
    title: "Hồ Ngọc Hà đăng ảnh 'mát mẻ' gây phản cảm, ai xem cũng nhức mắt",
    subtitle: 'Hồ Ngọc Hà vừa đăng loạt ảnh nóng bỏng đến mức... phản cảm.',
    haveVideo: true,
    time: '22 giờ trước',
    category: 'Thời trang',
    slugCategory: 'thoi-trang',
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
    category: 'Đẹp',
    slugCategory: 'dep',
  },
  {
    slug: 'ngoc-trinh-dien-ao-dai-tay-trong-tay-xuong-pho-cung-ban-trai',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/3/pc/1712163284116/l540hphkwc1-v8o7gnldoh2-jynglzs11a3.jpg',
    title: 'Ngọc Trinh diện áo dài, tay trong tay xuống phố cùng bạn trai',
    subtitle:
      'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
    haveVideo: true,
    time: '03/04/2024 - 10:30',
    category: 'Người mẫu - hoa hậu',
    slugCategory: 'thoi-trang',
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
    category: 'Giải trí',
    slugCategory: 'thoi-trang',
  },
  {
    slug: 'ngoc-trinh-dien-ao-dai-tay-trong-tay-xuong-pho-cung-ban-trai',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/3/pc/1712163284116/l540hphkwc1-v8o7gnldoh2-jynglzs11a3.jpg',
    title: 'Ngọc Trinh diện áo dài, tay trong tay xuống phố cùng bạn trai',
    subtitle:
      'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
    haveVideo: false,
    category: 'Âm nhạc',
    time: '1 giờ trước',
    slugCategory: 'am-nhac',
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
    category: 'Thể thao',
    slugCategory: 'the-thao',
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
    category: 'Thể thao',
    slugCategory: 'the-thao',
  },
  {
    slug: 'ngoc-trinh-dien-ao-dai-tay-trong-tay-xuong-pho-cung-ban-trai',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/3/pc/1712163284116/l540hphkwc1-v8o7gnldoh2-jynglzs11a3.jpg',
    title: 'Ngọc Trinh diện áo dài, tay trong tay xuống phố cùng bạn trai',
    subtitle:
      'Chia sẻ với SAOstar, Vũ Thúy Quỳnh cho rằng những phát ngôn không hay của một số người đẹp là vấn nạn của giới Hoa hậu.',
    haveVideo: true,
    time: '03/04/2024 - 10:30',
    category: 'Thể thao',
    slugCategory: 'the-thao',
  },
];

const Home = () => {
  return (
    <div className="inner mt-4 px-4">
      <Tags tags={tags} />
      <div className="mt-3">
        <div className="d-flex gap-4 justify-content-between align-items-stretch">
          <CardVertical classPropsName={'w-69-7'} data={data[0]} />
          <CardVertical classPropsName={'w-27-4'} data={data[1]} />
          <CardVertical classPropsName={'w-27-4'} data={data[2]} />
        </div>
      </div>
      <div className="mt-3">
        <div className="d-flex gap-4 justify-content-between">
          {dataBot.map((item, index) => (
            <CardVertical
              classPropsName={'col'}
              titleSub={'fs-md'}
              data={item}
              key={index}
            />
          ))}
        </div>
      </div>
      <hr className="hr-red" />
      <div className="my-4">
        <div className="d-flex gap-3">
          <div className="article-size">
            <div className="d-flex flex-column flex-grow-1">
              {dataHorizontal.map((item, index) => (
                <div key={index}>
                  <CardHorizontal data={item} showCategory={true} />
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
      <div className="mt-5">
        <FocusNew />
      </div>
      <div className="mb-4 mt-5">
        <div className="d-flex gap-3">
          <div className="article-size">
            <div className="d-flex flex-column flex-grow-1">
              {dataHorizontal.map((item, index) => (
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
      <div className="mb-4 mt-5">
        <SectionSlider />
      </div>
      <div className="my-5">
        <div className="d-flex gap-30">
          <div className="list-videos">
            <SectionVideoVertical />

            <SectionSliderSm />
          </div>
          <div className="section-ads w-300">
            <SectionAds />
          </div>
        </div>
      </div>
      <div className="mb-5 mt-5">
        <ListNewByCategory />
      </div>
      <div className="mb-5 mt-5">
        <SectionSelectVideos />
      </div>
    </div>
  );
};

export default Home;
