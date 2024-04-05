/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPost = ({ data }) => {
  return (
    <div className="px-2 pt-3">
      <div className="category-title">
        <Link className="d-flex align-items-center gap-2" to={data.slug}>
          <img src={data.icon} alt="" />
          <h3 className="mb-0">{data.title}</h3>
        </Link>
      </div>

      <div className="categorynews-list mt-3">
        <div className="categorynew-firstItem">
          <Link to={`${data.slug}/${data.content[0].slug}`}>
            <img src={data.content[0].thumb} alt="" />
          </Link>
          <Link to={`${data.slug}/${data.content[0].slug}`}>
            <h4 className="card-title mb-2">{data.content[0].title}</h4>
          </Link>
          <p className="text-muted mb-0 fs-sm">{data.content[0].time}</p>
        </div>
        <hr className="my-3" />
        <div className="categorynew-items d-flex gap-3 align-items-start">
          <Link to={`${data.slug}/${data.content[1].slug}`}>
            <img src={data.content[1].thumb} alt="" />
          </Link>
          <Link to={`${data.slug}/${data.content[1].slug}`}>
            <h5 className="card-title mt-0">{data.content[1].title}</h5>
          </Link>
        </div>
        <div className="categorynew-items d-flex gap-3 align-items-start mt-4">
          <Link to={`${data.slug}/${data.content[2].slug}`}>
            <img src={data.content[2].thumb} alt="" />
          </Link>
          <Link>
            <h5 className="card-title mt-0">{data.content[2].title}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPost;
