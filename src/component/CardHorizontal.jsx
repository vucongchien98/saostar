/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const CardHorizontal = ({ data, category, showCategory }) => {
  return (
    <>
      <div className="card card-horizontal">
        <div className="g-0 row">
          <div className="col-md-4 position-relative">
            <Link to={`${data.slug}`}>
              <img className="card-img img-fluid" src={data.thumb} />
              {data.haveVideo ? (
                <p className="icon-yt">
                  <span className="triangle d-block"></span>
                </p>
              ) : (
                ''
              )}
            </Link>
          </div>
          <div className="col-md-8">
            <div className="card-body pt-0">
              <h3>
                <Link to={`${data.slug}`} className="card-title">
                  {data.title}
                </Link>
              </h3>
              <p className="card-text">
                {showCategory ? (
                  <Link to={`/${data.slugCategory}`} className="card-category">
                    {data.category}
                  </Link>
                ) : (
                  ''
                )}
                <small className="text-muted">{data.time}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHorizontal;
