/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import SectionAds from '../component/SectionAds';
import { CiLink } from 'react-icons/ci';
import { FaFacebookF } from 'react-icons/fa';
import { BsTag } from 'react-icons/bs';
import SectionHotNews from '../pages/components/SectionHotNews';
import CardHorizontal from '../component/CardHorizontal';

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

const htmlContent = `
<p>Trứ danh siêu mẫu Việt đình đám thập niên 2010,&nbsp;<a href="https://www.saostar.vn/nguoi-mau-hoa-hau/sieu-mau-minh-tu-muon-khach-moi-mung-tien-cuoi-124-trieu-202404021038398658.html" rel="noopener noreferrer" target="_blank" style="color: rgb(232, 18, 27);"><strong>Minh Tú</strong></a>&nbsp;chụp hình cưới chẳng khác gì bộ hình thời trang trên một tờ tạp chí!</p><p class="ql-align-center"><img src="https://tracking.saostar.vn/pixel.png?type=ads_request&amp;track=request&amp;name=PC_Article-Normal_Inread_Inread" alt="tracking"></p><p><span style="background-color: rgb(245, 246, 246);"><img src="https://ss-images.saostar.vn/wp700/2024/4/4/pc/1712201393955/cpi9tr4jc51-1l17gq6oij2-yh7qls3l9n3.jpeg" alt="Ảnh cưới Minh Tú và chồng ngoại quốc: Ngỡ đâu chụp bìa tạp chí! Ảnh 1" height="100%" width="100%"></span></p><p><em>Theo đuổi hình tượng quyến rũ từ xưa đến nay, Minh Tú tiếp tục "trưng dụng" thế mạnh này vào bộ ảnh cưới. Nữ siêu mẫu chọn layout màu đen ấn tượng, bắt mắt. Mẫu váy cưới của Minh Tú cũng được kết hợp giữa áo corset cùng chân váy xuyên thấu, xẻ cao tà. Thiết kế này giúp nữ siêu mẫu khoe trọn hình thể thon gọn, vòng nào ra vòng đó cùng đôi chân dài nuột nà, thẳng tắp. Để tổng thế không quá cứng nhắc, Minh tú còn kết hợp với dây chuyền và vòng tay ngọc trai.</em></p><p><span style="background-color: rgb(245, 246, 246);"><img src="https://ss-images.saostar.vn/wp700/2024/4/4/pc/1712201393955/1ebflng0mo1-dea1j5iu852-6rqqkgzjo23.jpeg" alt="Ảnh cưới Minh Tú và chồng ngoại quốc: Ngỡ đâu chụp bìa tạp chí! Ảnh 2" height="100%" width="100%"></span></p><p><em>Trong "layout" đen này, tạo dáng của Minh Tú và "nửa kia" khiến người hâm mộ liên tưởng đến một tờ bìa tạp chí thời trang. Chồng Tây của nữ siêu mẫu diện nguyên cây vest đen, "bùng nổ" visual điển trai, nam tính.</em></p><p class="ql-align-center"><img src="https://tracking.saostar.vn/pixel.png?type=ads_request&amp;track=request&amp;name=PC_Article-Normal_Inread2_Inread" alt="tracking"></p><p><span style="background-color: rgb(245, 246, 246);"><img src="https://ss-images.saostar.vn/wp700/2024/4/4/pc/1712201393955/mymjnquwy21-9y95vtkuvf2-6i9uyopcmv3.jpeg" alt="Ảnh cưới Minh Tú và chồng ngoại quốc: Ngỡ đâu chụp bìa tạp chí! Ảnh 3" height="100%" width="100%"></span></p><p><em>Bộ ảnh cưới màu trắng của Minh Tú cũng theo đuổi phong cách sexy. Mẫu váy cưới được Minh Tú chọn lựa cũng xẻ cao tả, khoe khéo đôi chân dài và tạo điểm nhấn bởi những lớp vải ren để lộ lấp ló body, làn da nâu khỏe khoắn. Ở tạo hình này, nữ siêu mẫu chọn kiểu tóc búi gọn gàng.</em></p><p><span style="background-color: rgb(245, 246, 246);"><img src="https://ss-images.saostar.vn/wp700/2024/4/4/pc/1712201393955/t78r5nkcbd1-1uff6qvz2r2-uh0tmexs463.jpeg" alt="Ảnh cưới Minh Tú và chồng ngoại quốc: Ngỡ đâu chụp bìa tạp chí! Ảnh 4" height="100%" width="100%"></span></p><p><em>Ngoài những tạo dáng gãy, đậm chất thời trang cao cấp, Minh Tú và chồng Tây còn tạo dáng nắm tay ngọt ngào, tươi cười rạng rỡ.</em></p><p><img src="https://ss-images.saostar.vn/wp700/2024/4/4/pc/1712201393955/jgdbwc2pb01-0l40hacw742-2kw5x6my8c3.jpeg" alt="Ảnh cưới Minh Tú và chồng ngoại quốc: Ngỡ đâu chụp bìa tạp chí! Ảnh 5" height="100%" width="100%"></p><p><em>Ngoài những tạo hình sexy, Minh Tú còn hoá thân vào hình ảnh quý cô ngọt ngào, sang trọng. Nữ siêu mẫu diện mẫu váy cưới trễ vai, vải trơn bóng màu trắng kết hợp cùng kiểu tóc đuôi ngựa truyền thống.</em></p><p><span style="background-color: rgb(245, 246, 246);"><img src="https://ss-images.saostar.vn/wp700/2024/4/4/pc/1712201393955/qmj5utx34q1-ryr9opcm212-i3h91nk0on3.jpeg" alt="Ảnh cưới Minh Tú và chồng ngoại quốc: Ngỡ đâu chụp bìa tạp chí! Ảnh 6" height="100%" width="100%"></span></p><p><em>Trong một khoảnh khắc khác, Minh Tú gây ấn tượng với nhan sắc và tạo hình như nữ thần. Thiết kế váy cưới được nữ siêu mẫu diện cũng gây ấn tượng với những họa tiết cầu kỳ, chi tiết.</em></p><p><span style="background-color: rgb(245, 246, 246);"><img src="https://ss-images.saostar.vn/wp700/2024/4/4/pc/1712201393955/4y8oqyi5tb1-cmvou75q012-ngwxy1oi0y3.jpeg" alt="Ảnh cưới Minh Tú và chồng ngoại quốc: Ngỡ đâu chụp bìa tạp chí! Ảnh 7" height="100%" width="100%"></span></p><p><em>Minh Tú tươi rói, cười rạng rỡ khi được chồng Tây trao nụ hôn trên má.</em></p>
`;
const Detail = () => {
  return (
    <div className="inner mt-4 px-4 mb-5">
      <div className="d-flex gap-30 px-4">
        <div className="article-size">
          <div className="my-3">
            <Link className="detail-category">Thời trang</Link>
            <span className="detail-time">05/04/2024 - 16:37 (GMT+7)</span>
          </div>

          <h2 className="detail-title">
            Ảnh cưới Minh Tú và chồng ngoại quốc: Ngỡ đâu chụp bìa tạp chí!
          </h2>

          <div className="d-flex justify-content-between align-items-center">
            <span className="detail-author">Tie Nguyên</span>
            <div className="d-flex align-items-center gap-2">
              <button className="detail-btn btn-copy">
                <CiLink />
                Copy Link
              </button>
              <button className="detail-btn btn-share">
                <FaFacebookF />
                Chia sẻ
              </button>
            </div>
          </div>

          <h5 className="mt-3 detail-title-seo">
            Minh Tú tận dụng thế mạnh về hình thể lẫn biểu cảm quyến rũ vào bộ
            ảnh cưới với chồng Tây.
          </h5>

          <div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <button className="detail-btn btn-copy">Copy Link</button>
              <button className="detail-btn btn-share">Chia sẻ</button>
            </div>
            <div>
              <span>Bài viết:</span>
              <p className="fw-bold mb-0">Tie Nguyên</p>
            </div>
          </div>
          <hr />
          <div className="mt-3">
            <h6>Tin liên quan</h6>
            <div className="d-flex gap-4">
              <div className="position-relative col-2 thumb-hori">
                <img
                  src="https://ss-images.saostar.vn/wwebp400/2024/4/5/pc/1712303896764/vyk0015c8s1-edeehrmtps2-2mo60nm6tk3.jpg"
                  alt=""
                />
                <p className="icon-yt">
                  <span className="triangle d-block"></span>
                </p>
              </div>
              <Link className="col-10 detail-title-relate">
                Showbiz 5/4: Ngập tràn 'tin vui', Nam Em bị mỉa mai lấy tiền fan
                tặng nuôi trai
              </Link>
            </div>
            <hr />
            <div className="d-flex gap-4">
              <div className="position-relative col-2 thumb-hori">
                <img
                  src="https://ss-images.saostar.vn/wwebp400/2024/4/5/pc/1712303896764/vyk0015c8s1-edeehrmtps2-2mo60nm6tk3.jpg"
                  alt=""
                />
                <p className="icon-yt">
                  <span className="triangle d-block"></span>
                </p>
              </div>
              <Link className="col-10 detail-title-relate">
                Showbiz 5/4: Ngập tràn 'tin vui', Nam Em bị mỉa mai lấy tiền fan
                tặng nuôi trai
              </Link>
            </div>
            <hr />
            <div className="d-flex gap-4">
              <div className="position-relative col-2 thumb-hori">
                <img
                  src="https://ss-images.saostar.vn/wwebp400/2024/4/5/pc/1712303896764/vyk0015c8s1-edeehrmtps2-2mo60nm6tk3.jpg"
                  alt=""
                />
                <p className="icon-yt">
                  <span className="triangle d-block"></span>
                </p>
              </div>
              <Link className="col-10 detail-title-relate">
                Showbiz 5/4: Ngập tràn 'tin vui', Nam Em bị mỉa mai lấy tiền fan
                tặng nuôi trai
              </Link>
            </div>
          </div>

          <div className="mt-5 d-flex gap-2 align-items-center">
            <span>
              <BsTag />
            </span>
            <span className="detail-tag">Minh tú</span>
            <span className="detail-tag">ảnh cưới minh tú</span>
            <span className="detail-tag">Minh tú sexy</span>
            <span className="detail-tag">body minh tú</span>
          </div>
        </div>
        <div className="section-ads w-300">
          <SectionAds />
        </div>
      </div>
      <div className="mt-4 px-4">
        <SectionHotNews />
      </div>
      <div className="mt-4 d-flex gap-30 px-4">
        <div className="article-size">
          <div className="news-latest">
            <h6>Tin mới nhất</h6>
          </div>
          <div className="d-flex flex-column flex-grow-1 mt-4">
            {dataHorizontal.map((item, index) => (
              <div key={index}>
                <CardHorizontal data={item} showCategory={true} />
                <hr className="my-4" />
              </div>
            ))}
          </div>
          <div className="page-seemore">Xem thêm</div>
        </div>
        <div className="section-ads w-300">
          <SectionAds />
        </div>
      </div>
    </div>
  );
};

export default Detail;
