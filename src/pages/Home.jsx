import React from 'react';
import { Link } from 'react-router-dom';

const tags = [
  { title: 'Miss world 2023', slug: 'miss-world-2023' },
  { title: 'Nữ hoàng thảm đỏ', slug: 'nu-hoang-tham-do' },
  { title: 'Đẹp chuẩn idol', slug: 'dep-chuan-idol' },
];

const Home = () => {
  return (
    <main className="">
      <div className="inner mt-4 px-4">
        <div className="d-flex gap-3 align-items-center">
          <Link to={'#'} className="d-flex">
            <img
              src="https://ss-statics.saostar.vn/static/fonts/ss/ico_trending_new.svg"
              alt=""
            />
          </Link>
          {tags.map((item, index) => (
            <Link to={`tag/${item.slug}`} key={index} className="tag-item">
              <span className="text-red">#</span>
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
