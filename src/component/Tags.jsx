/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Tags = ({ tags, category, icon }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      {category ? (
        <div className="d-flex gap-2 align-items-center">
          <img src={icon ? icon : ''} alt="" />
          <h2 className="title-page mb-0">{category ? category : ''}</h2>
        </div>
      ) : (
        ''
      )}

      <div className="d-flex gap-1 align-items-center">
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
  );
};

export default Tags;
