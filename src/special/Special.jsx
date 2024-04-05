import React from 'react';
import { Link } from 'react-router-dom';

const Special = () => {
  return (
    <div className="inner mt-2 px-4">
      <div className="position-relative">
        <div className="sticky header-special">
          <Link to={'/'}>
            <img
              src="https://ss-statics.saostar.vn/static/images/logo-saostar-tapchi.svg"
              alt=""
            />
          </Link>
          <Link to={'/tag/special'}>
            <img
              src="https://ss-statics.saostar.vn/static/images/logo-special.svg"
              className="header-special-center"
              width={150}
              height={30}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Special;
