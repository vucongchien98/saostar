import React from 'react';
import { TiMessages } from 'react-icons/ti';
import { IoIosSearch } from 'react-icons/io';
const HeaderTop = () => {
  return (
    <div>
      <div className="inner d-flex justify-content-between pt-3 px-4">
        <a href="/">
          <img
            src="https://ss-statics.saostar.vn/static/images/logo-saostar-tapchi.svg"
            width={136}
            alt=""
          />
        </a>
        <div className="d-flex gap-4">
          <button className="btn btn-custom btn-special text-white">
            Special
          </button>
          <button className="btn btn-custom btn-soft-secondary">
            <TiMessages />
            Liên hệ
          </button>
          <button className="btn btn-custom btn-soft-secondary">
            <IoIosSearch />
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
