/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const CardVertical = ({ classPropsName, titleSub, data }) => {
  return (
    <div className={`card ${classPropsName}`}>
      <Link
        to={`${data.slugCategory}/${data.slug}`}
        className="position-relative"
      >
        <img
          className="card-img-top img-fluid rounded-2"
          src={data.thumb}
          alt={data.title}
        />
        {data.haveVideo ? (
          <p className="icon-yt">
            <span className="triangle d-block"></span>
          </p>
        ) : (
          ''
        )}
      </Link>
      <div className="card-body p-0 mt-0">
        <Link
          to={`${data.slugCategory}/${data.slug}`}
          className={`card-title limited-lines ${titleSub}`}
        >
          {data.title}
        </Link>
        {data.subtitle ? (
          <p className="card-text limited-lines">{data.subtitle}</p>
        ) : (
          ''
        )}
        {data.time ? <p className="card-text px-3 pb-3">{data.time}</p> : ''}
      </div>
    </div>
  );
};

export default CardVertical;
