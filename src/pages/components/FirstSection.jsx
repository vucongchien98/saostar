/* eslint-disable react/prop-types */
import React from 'react';
import CardVerticalPage from '../../component/CardVerticalPage';
import { Link } from 'react-router-dom';

const titleShow = [
  {
    title:
      'Top 5 Hoa hậu Hoàn vũ Việt Nam giữ quan hệ tốt với tất cả bạn trai cũ',
    slug: 'top-5-hoa-hau-hoan-vu',
  },
  {
    title:
      "'Gương mặt đẹp nhất' Hoa hậu Hoàn vũ Việt Nam 2022 nói về chuyện người đẹp gây ồn ào MXH",
    slug: 'guong-mat-dep-nhat-hoa-hau-hoan-vu',
  },
];

const FirstSection = ({ data }) => {
  return (
    <div className="d-flex gap-4">
      <div className="col">
        <div>
          <CardVerticalPage data={data[0]} showsubtitle={true} />
        </div>
        <hr />
        <div>
          {titleShow.map((item) => (
            <Link
              to={`${item.slug}`}
              key={item.slug}
              className="link-redirt mb-2"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="col-4">
        <div>
          <CardVerticalPage
            data={data[1]}
            showsubtitle={false}
            titleSub={'fs-md'}
          />
        </div>
        <div className="mt-3">
          <CardVerticalPage
            data={data[2]}
            showsubtitle={false}
            titleSub={'fs-md'}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
