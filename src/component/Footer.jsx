import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="inner px-4">
        <div>
          <Link>
            <img
              src="https://ss-statics.saostar.vn/static/images/logo-saostar-tapchi-white.svg"
              alt=""
            />
          </Link>
        </div>
        <p className="mb-2">www.saostar.vn</p>
        <p className="mb-1 text-sm">Thuộc Hội Người Mẫu Việt Nam</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-sm">
            Giấy phép Tạp chí điện tử Saostar số: 13/GP-BTTTT do Bộ Thông tin &
            Truyền Thông cấp ngày 11/01/2016
          </span>
          <div className="d-flex gap-2 align-item-center">
            <Link to={'https://www.saostar.vn/'} className="nav-link">
              Saostar.vn
            </Link>
            <Link to={'https://www.facebook.com/saostar.vn/'}>
              <img
                src="https://ss-statics.saostar.vn/static/images/fb.svg"
                alt="icon"
              />
            </Link>
            <Link
              to={'https://www.youtube.com/channel/UCjAXQLPHm6XBNtxknzv_4OQ'}
            >
              <img
                src="https://ss-statics.saostar.vn/static/images/yt.svg"
                alt="icon"
              />
            </Link>
            <Link to={'https://www.tiktok.com/@saostarofficial'}>
              <img
                src="https://ss-statics.saostar.vn/static/images/tiktok.svg"
                alt="icon"
              />
            </Link>
            <Link
              to={'https://instagram.com/saostar.official?igshid=YmMyMTA2M2Y='}
            >
              <img
                src="https://ss-statics.saostar.vn/static/images/insta.svg"
                alt="icon"
              />
            </Link>
          </div>
        </div>
        <hr style={{ background: 'white' }} />
        <div className="d-flex">
          <div className="col d-flex justify-content-between">
            <div className="col">
              <p className="mb-1 text-sm">Tổng biên tập</p>
              <h6>Nguyễn Quang Minh</h6>
            </div>
            <div className="col">
              <p className="mb-1 text-sm">Thư ký tòa soạn</p>
              <h6>Nguyễn Quỳnh Hoa</h6>
            </div>
          </div>
          <div className="col d-flex justify-content-end">
            <Link className="btn-ads d-flex align-items-center">
              Báo giá quảng cáo
            </Link>
          </div>
        </div>
        <hr style={{ background: 'white', height: '4px' }} />
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center">
            <span>
              <img
                src="https://ss-statics.saostar.vn/static/images/ico-footer-location.svg"
                alt="icons"
              />
            </span>
            <div className="d-flex flex-column">
              <span className="mb-0">Trụ sở TP. Hồ Chí Minh</span>
              <span className="text-sm">
                5B Nguyễn Đình Chiểu, Phường Đa Kao, Quận 1
              </span>
            </div>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <span>
              <img
                src="https://ss-statics.saostar.vn/static/images/ico-footer-hotline.svg"
                alt="icons"
              />
            </span>
            <div className="d-flex flex-column">
              <span className="mb-0">Hotline</span>
              <span className="text-sm">0938 305 588</span>
            </div>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <span>
              <img
                src="https://ss-statics.saostar.vn/static/images/ico-footer-contact.svg"
                alt="icons"
              />
            </span>
            <div className="d-flex flex-column">
              <span className="mb-0">Hợp tác nội dung</span>
              <span className="text-sm">info@saostar.vn</span>
            </div>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <span>
              <img
                src="https://ss-statics.saostar.vn/static/images/ico-footer-tag.svg"
                alt="icons"
              />
            </span>
            <div className="d-flex flex-column">
              <span className="mb-0">Hợp tác quảng cáo</span>
              <span className="text-sm">marketing@saostar.vn</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
