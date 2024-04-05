import React from 'react';
import { Link } from 'react-router-dom';

const listVideos = [
  {
    slug: '',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/1/pc/1711932664837/dbpn0o2cba1-cpd10ffisx2-vnid47uoyz3.jpeg',
    title: 'Phạm Thoại nói gì khi bị nghi ngờ giới tính, có phải LGBT?',
    videos: 'https://www.youtube.com/embed/Ry-IaDjzLic?si=rMM63wZ0Jg9u3baD',
  },
  {
    slug: '',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/1/pc/1711932664837/dbpn0o2cba1-cpd10ffisx2-vnid47uoyz3.jpeg',
    title: 'Phạm Thoại nói gì khi bị nghi ngờ giới tính, có phải LGBT?',
    videos: 'https://www.youtube.com/embed/Ry-IaDjzLic?si=rMM63wZ0Jg9u3baD',
  },
  {
    slug: '',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/1/pc/1711932664837/dbpn0o2cba1-cpd10ffisx2-vnid47uoyz3.jpeg',
    title: 'Phạm Thoại nói gì khi bị nghi ngờ giới tính, có phải LGBT?',
    videos: 'https://www.youtube.com/embed/Ry-IaDjzLic?si=rMM63wZ0Jg9u3baD',
  },
  {
    slug: '',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/1/pc/1711932664837/dbpn0o2cba1-cpd10ffisx2-vnid47uoyz3.jpeg',
    title: 'Phạm Thoại nói gì khi bị nghi ngờ giới tính, có phải LGBT?',
    videos: 'https://www.youtube.com/embed/Ry-IaDjzLic?si=rMM63wZ0Jg9u3baD',
  },
  {
    slug: '',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/1/pc/1711932664837/dbpn0o2cba1-cpd10ffisx2-vnid47uoyz3.jpeg',
    title: 'Phạm Thoại nói gì khi bị nghi ngờ giới tính, có phải LGBT?',
    videos: 'https://www.youtube.com/embed/Ry-IaDjzLic?si=rMM63wZ0Jg9u3baD',
  },
  {
    slug: '',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/1/pc/1711932664837/dbpn0o2cba1-cpd10ffisx2-vnid47uoyz3.jpeg',
    title: 'Phạm Thoại nói gì khi bị nghi ngờ giới tính, có phải LGBT?',
    videos: 'https://www.youtube.com/embed/Ry-IaDjzLic?si=rMM63wZ0Jg9u3baD',
  },
  {
    slug: '',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/1/pc/1711932664837/dbpn0o2cba1-cpd10ffisx2-vnid47uoyz3.jpeg',
    title: 'Phạm Thoại nói gì khi bị nghi ngờ giới tính, có phải LGBT?',
    videos: 'https://www.youtube.com/embed/Ry-IaDjzLic?si=rMM63wZ0Jg9u3baD',
  },
  {
    slug: '',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/1/pc/1711932664837/dbpn0o2cba1-cpd10ffisx2-vnid47uoyz3.jpeg',
    title: 'Phạm Thoại nói gì khi bị nghi ngờ giới tính, có phải LGBT?',
    videos: 'https://www.youtube.com/embed/Ry-IaDjzLic?si=rMM63wZ0Jg9u3baD',
  },
  {
    slug: '',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/1/pc/1711932664837/dbpn0o2cba1-cpd10ffisx2-vnid47uoyz3.jpeg',
    title: 'Phạm Thoại nói gì khi bị nghi ngờ giới tính, có phải LGBT?',
    videos: 'https://www.youtube.com/embed/Ry-IaDjzLic?si=rMM63wZ0Jg9u3baD',
  },
  {
    slug: '',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/1/pc/1711932664837/dbpn0o2cba1-cpd10ffisx2-vnid47uoyz3.jpeg',
    title: 'Phạm Thoại nói gì khi bị nghi ngờ giới tính, có phải LGBT?',
    videos: 'https://www.youtube.com/embed/Ry-IaDjzLic?si=rMM63wZ0Jg9u3baD',
  },
  {
    slug: '',
    thumb:
      'https://ss-images.saostar.vn/wwebp400/2024/4/1/pc/1711932664837/dbpn0o2cba1-cpd10ffisx2-vnid47uoyz3.jpeg',
    title: 'Phạm Thoại nói gì khi bị nghi ngờ giới tính, có phải LGBT?',
    videos: 'https://www.youtube.com/embed/Ry-IaDjzLic?si=rMM63wZ0Jg9u3baD',
  },
];

const SectionVideoVertical = () => {
  return (
    <div className="sec-videos p-4 bg-secondary bg-opacity-10 rounded-4">
      <div className="scroll-img">
        <div className="sv-top">
          <div className="sv-top-logo">
            <img
              src="https://ss-statics.saostar.vn/static/images/logo-saotv-marquee.svg"
              alt=""
            />
          </div>
          <div className="sv-top-logo">
            <img
              src="https://ss-statics.saostar.vn/static/images/logo-saotv-marquee.svg"
              alt=""
            />
          </div>
          <div className="sv-top-logo">
            <img
              src="https://ss-statics.saostar.vn/static/images/logo-saotv-marquee.svg"
              alt=""
            />
          </div>
          <div className="sv-top-logo">
            <img
              src="https://ss-statics.saostar.vn/static/images/logo-saotv-marquee.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="video-area mt-3">
        <div>
          <iframe
            className="iframe-youtube"
            src="https://www.youtube.com/embed/Ry-IaDjzLic?si=rMM63wZ0Jg9u3baD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="title-video">
            <h4 className="mt-2">
              Phạm Thoại nói gì khi bị nghi ngờ giới tính, có phải LGBT?
            </h4>
            <p className="card-text">01/04/2024 - 10:10 (GMT+7)</p>
          </div>
        </div>
        <hr />
        <div className="list-videos-youtube">
          {listVideos.map((item, index) => (
            <div key={index} className="video-show">
              <Link to={item.slug} className="title-card">
                <img src={item.thumb} alt="" width={160} />
                <h5 className="card-text limited-lines hover-red">
                  {item.title}
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionVideoVertical;
