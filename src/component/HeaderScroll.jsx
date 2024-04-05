import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

const menu = [
  {
    path: 'nguoi-mau-hoa-hau',
    title: 'Người mẫu & hoa hậu',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/hoahau.svg',
  },
  {
    path: 'thoi-trang',
    title: 'Thời trang',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/fashion.svg',
  },
  {
    path: 'dep',
    title: 'Đẹp',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/dep-360.svg',
  },
  {
    path: 'giai-tri',
    title: 'Giải trí',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/giaitri.svg',
  },
  {
    path: 'am-nhac',
    title: 'Âm nhạc',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/amnhac.svg',
  },
  {
    path: '',
    title: 'Phim ảnh',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/phimanh.svg',
  },
  {
    path: '',
    title: 'Sao & đời sống',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/saodoisong.svg',
  },
  {
    path: '',
    title: 'Thể thao',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/thethao.svg',
  },
  {
    path: '',
    title: 'Sắc màu cuộc sống',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/xahoi.svg',
  },
  {
    path: '',
    title: 'Sắc màu cuộc sống',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/nguoitre.svg',
  },
  {
    path: '',
    title: 'Vòng quanh thế giới',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/thegioi.svg',
  },
  {
    path: '',
    title: 'Sức khỏe',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/suc-khoe.svg',
  },
  {
    path: '',
    title: 'Gương mặt thương hiệu',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/ico_theface.svg',
  },
  {
    path: '',
    title: 'Kinh doanh',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/kinhdoanh.svg',
  },
  {
    path: '',
    title: 'Tiêu dùng',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/tieudung.svg',
  },
  {
    path: '',
    title: 'Công nghệ',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/congnghe.svg',
  },
  {
    path: '',
    title: 'Học đường',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/hocduong.svg',
  },
  {
    path: '',
    title: 'Ăn - Chơi - Khám phá',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/khampha.svg',
  },
  {
    path: '',
    title: 'Special',
    icons: 'https://ss-statics.saostar.vn/static/fonts/ss/special-menu.svg',
  },
  {
    path: '',
    title: 'Hội Người Mẫu Việt Nam',
    icons: '',
  },
];

const HeaderScroll = () => {
  const [show, setShow] = useState(false);
  const [headerSticky, setHeaderSticky] = useState(false);
  const [param, setParams] = useState('');

  const params = useParams();

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setHeaderSticky(true);
    } else {
      setHeaderSticky(false);
    }
  });

  useEffect(() => {
    setParams(params.category);
    console.log(param);
  }, [params.category]);

  return (
    <div className={`sticky-top ${headerSticky ? 'border-sticky' : ''} `}>
      <div className="inner mt-3 px-4 position-relative">
        <div
          className={`py-1 ${
            headerSticky
              ? 'bg-white rounded-0 border-sticky-sm'
              : 'bg-red rounded-pill'
          }`}
        >
          <nav
            className={`d-flex ${
              headerSticky
                ? ' justify-content-between'
                : 'justify-content-center'
            }`}
          >
            {headerSticky ? (
              <Link to="/">
                <img
                  src="https://ss-statics.saostar.vn/static/images/logo-saostar-tapchi.svg"
                  width={108}
                  alt=""
                />
              </Link>
            ) : (
              ''
            )}
            <ul
              className={`nav flex-nowrap align-items-center ${
                headerSticky ? 'flex-1 justify-content-evenly' : ''
              }`}
            >
              {menu.slice(0, 9).map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className={`nav-link uppercase title-nav ${
                      param === item.path ? 'active-nav' : ''
                    } ${
                      headerSticky
                        ? 'p-0 py-1 px-2 text-black active-stick'
                        : 'text-white'
                    }`}
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li
                className={`cursor-pointer ${
                  headerSticky ? 'text-mcolor' : 'text-white'
                }`}
                onClick={() => setShow(!show)}
              >
                {!show ? (
                  <MdOutlineMoreHoriz size={28} />
                ) : (
                  <IoClose size={28} />
                )}
              </li>
            </ul>
          </nav>
        </div>
        {show ? (
          <div className="position-absolute sub-menu px-4 py-4">
            <div className="d-flex flex-wrap">
              {menu.map((item) => (
                <div className="col-3 mb-4 mt-1" key={item.path}>
                  <Link
                    className="d-flex gap-2 align-items-center sub-nav-title nav-link"
                    to={item.path}
                  >
                    {item.icons ? (
                      <span>
                        <img src={item.icons} alt="icons" />
                      </span>
                    ) : (
                      ''
                    )}
                    <span>{item.title}</span>
                  </Link>
                </div>
              ))}
            </div>
            <hr />
            <div>
              <div className="d-flex mt-4">
                <Link
                  className="col-3 d-flex gap-2 align-items-center sub-nav-title nav-link"
                  to={'https://www.cattiensa.com/baogia/saostar-baogia2023.pdf'}
                >
                  <span>
                    <img
                      src="https://ss-statics.saostar.vn/static/fonts/ss/ad.svg"
                      alt="icons"
                    />
                  </span>
                  <span>Liên hệ quảng cáo</span>
                </Link>
                <Link
                  className="col-3 d-flex gap-2 align-items-center sub-nav-title nav-link"
                  to={'https://www.cattiensa.com/baogia/saostar-baogia2023.pdf'}
                >
                  <span>
                    <img
                      src="https://ss-statics.saostar.vn/static/fonts/ss/contact.svg"
                      alt="icons"
                    />
                  </span>
                  <span>Hợp tác nội dung</span>
                </Link>
                <Link
                  className="col-3 d-flex gap-2 align-items-center sub-nav-title nav-link"
                  to={'https://www.saostar.vn/cai-chinh/'}
                >
                  <span>Thông tin cải chính</span>
                </Link>
                <div className="col-3 d-flex gap-2 align-items-center sub-nav-title nav-link">
                  <span>Kết nối với chúng tôi</span>
                  <Link to={'https://facebook.com'}>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03Ni44LC03Ni44KSBzY2FsZSgxLjYsMS42KSI+PGcgZmlsbD0iIzVkNjQ3MCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSgzLjU1NTU2LDMuNTU1NTYpIj48cGF0aCBkPSJNNDUuMDQ5LDE0YzEyLjAxMSwwIDEyLjk1MSwwLjk0IDEyLjk1MSwxMi45NTF2MTguMDk4YzAsMTIuMDExIC0wLjk0LDEyLjk1MSAtMTIuOTUxLDEyLjk1MWgtMi4yOTh2LTE2LjAxOGg1LjY0N2wwLjg4OCwtNi4zNDdoLTYuNTM1YzAsMCAtMC4wMSwtMy43MTYgMCwtNC42NDNjMC4wMTksLTEuODE0IDEuNTMzLC0yLjczMiAyLjgzNSwtMi43MThjMS4zMDIsMC4wMTMgMy45OTgsMC4wMDQgMy45OTgsMC4wMDR2LTUuODQ5YzAsMCAtMi4zMzUsLTAuMzAyIC00Ljc4NCwtMC4zMjhjLTIuMDU4LC0wLjAyMSAtNC4zMzEsMC41MzUgLTYuMTY1LDIuMzg0Yy0xLjg2NSwxLjg4IC0yLjE2LDQuNjc5IC0yLjE5NSw4LjFjLTAuMDEsMC45ODkgMCwzLjA0OSAwLDMuMDQ5aC01LjUyNnY2LjM0N2g1LjUyNnYxNi4wMTloLTkuNDg5Yy0xMi4wMTEsMCAtMTIuOTUxLC0wLjk0IC0xMi45NTEsLTEyLjk1MXYtMTguMDk4YzAsLTEyLjAxMSAwLjk0LC0xMi45NTEgMTIuOTUxLC0xMi45NTF6Ij48L3BhdGg+PC9nPjwvZz48L2c+Cjwvc3ZnPg=="
                      alt=""
                    />
                  </Link>
                  <Link to={'https://youtube.com'}>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOS4yLC0xOS4yKSBzY2FsZSgxLjE1LDEuMTUpIj48ZyBmaWxsPSIjNWQ2NDcwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48ZyB0cmFuc2Zvcm09InNjYWxlKDUuMTIsNS4xMikiPjxwYXRoIGQ9Ik05LDRjLTIuNzYsMCAtNSwyLjI0IC01LDV2MzJjMCwyLjc2IDIuMjQsNSA1LDVoMzJjMi43NiwwIDUsLTIuMjQgNSwtNXYtMzJjMCwtMi43NiAtMi4yNCwtNSAtNSwtNXpNMTUsOGgyLjQwMDM5bDEuNTk5NjEsNGwxLjU5OTYxLC00aDIuNDAwMzlsLTMsN3Y0aC0ydi00LjAwOTc3Yy0wLjYsLTEuNjEgLTIuNTksLTUuOTgwMjMgLTMsLTYuOTkwMjN6TTI1LDExYzAuODksMCAxLjc3MDA4LDAuMjY5MjIgMi4zMzAwOCwwLjk0OTIyYzAuNDMsMC40OSAwLjY2OTkyLDEuMjgwMzEgMC42Njk5MiwyLjMyMDMxdjEuNDYwOTRjMCwxLjA0IC0wLjE5OTE0LDEuNzYgLTAuNjE5MTQsMi4yNWMtMC41NiwwLjY3IC0xLjQ5MDg2LDEuMDE5NTMgLTIuMzgwODYsMS4wMTk1M2MtMC44OSwwIC0xLjc5OTM4LC0wLjM0OTUzIC0yLjM1OTM3LC0xLjAxOTUzYy0wLjQzLC0wLjQ5IC0wLjY0MDYyLC0xLjIxIC0wLjY0MDYyLC0yLjI1di0xLjQ1MTE3YzAsLTEuMDQgMC4yMjk5MiwtMS44NDAwOCAwLjY2OTkyLC0yLjMzMDA4YzAuNTYsLTAuNjggMS4zMjAwOCwtMC45NDkyMiAyLjMzMDA4LC0wLjk0OTIyek0yOSwxMWgydjZjMC4wNSwwLjI3IDAuMzM5MzgsMC4zOTA2MyAwLjYwOTM4LDAuMzkwNjNjMC40MSwwIDAuOTMwNjIsLTAuNDc5NzcgMS4zOTA2MywtMS4wMDk3N3YtNS4zODA4NmgydjhoLTJ2LTEuMzgwODZjLTAuODEsMC43OSAtMS41MDAxNiwxLjM4MTU2IC0yLjQxMDE2LDEuMzUxNTZjLTAuNjYsLTAuMDIgLTEuMTE5NjEsLTAuMjYwMjMgLTEuMzQ5NjEsLTAuNzQwMjNjLTAuMTQsLTAuMjggLTAuMjQwMjMsLTAuNzMwNjIgLTAuMjQwMjMsLTEuMzkwNjJ6TTI1LDEyLjYxOTE0Yy0wLjEzNzUsMCAtMC4yNjkxNCwwLjAzMDE2IC0wLjM4ODY3LDAuMDgyMDNjLTAuMTE5NTMsMC4wNTE4OCAtMC4yMjc3MywwLjEyNjI1IC0wLjMxODM2LDAuMjE4NzVjLTAuMDkwNjIsMC4wOTI1IC0wLjE2NDA2LDAuMjAyMzQgLTAuMjE0ODQsMC4zMjQyMmMtMC4wNTA3OCwwLjEyMTg3IC0wLjA3ODEyLDAuMjU2NDggLTAuMDc4MTIsMC4zOTY0OHYyLjgwODU5YzAsMC4yOCAwLjExMTcyLDAuNTM1NyAwLjI5Mjk3LDAuNzIwN2MwLjA5MDYyLDAuMDkyNSAwLjE5ODgzLDAuMTY2ODggMC4zMTgzNiwwLjIxODc1YzAuMTE5NTMsMC4wNTE4NyAwLjI1MTE3LDAuMDgyMDMgMC4zODg2NywwLjA4MjAzYzAuMTM3NSwwIDAuMjY5MTQsLTAuMDMwMTYgMC4zODg2NywtMC4wODIwM2MwLjM1ODU5LC0wLjE1NTYzIDAuNjExMzMsLTAuNTE5NDUgMC42MTEzMywtMC45Mzk0NXYtMi44MDg1OWMwLC0wLjU2IC0wLjQ1LC0xLjAyMTQ4IC0xLC0xLjAyMTQ4ek0yNC45OTAyMywyMmgwLjAxOTUzYzAsMCA2LjcwOTQ1LDAuMDAwMzEgMTEuMTg5NDUsMC4zMjAzMWMwLjYzLDAuMDcgMS45OTA5NCwwLjA4MDA4IDMuMjEwOTQsMS4zMzAwOGMwLjk2LDAuOTQgMS4yNjk1MywzLjA5OTYxIDEuMjY5NTMsMy4wOTk2MWMwLDAgMC4zMjAzMSwxLjUzMDU1IDAuMzIwMzEsNC4wNjA1NXYyLjM2OTE0YzAsMi41MyAtMC4zMjAzMSw0LjA2MDU1IC0wLjMyMDMxLDQuMDYwNTVjMCwwIC0wLjMwOTUzLDIuMTU5NjEgLTEuMjY5NTMsMy4wOTk2MWMtMS4yMiwxLjI1IC0yLjU4MDk0LDEuMjYwMDggLTMuMjEwOTQsMS4zMzAwOGMtNC40OCwwLjMyIC0xMS4xOTkyMiwwLjMzMDA4IC0xMS4xOTkyMiwwLjMzMDA4YzAsMCAtOC4zMjA4NiwtMC4wODAzMSAtMTAuODgwODYsLTAuMzIwMzFjLTAuNzEsLTAuMTMgLTIuMzA5MywtMC4wOTAwOCAtMy41MjkzLC0xLjMzMDA4Yy0wLjk2LC0wLjk1IC0xLjI2OTUzLC0zLjEwOTM3IC0xLjI2OTUzLC0zLjEwOTM3YzAsMCAtMC4zMjAzMSwtMS41MzA1NSAtMC4zMjAzMSwtNC4wNjA1NXYtMi4zNjkxNGMwLC0yLjUzIDAuMzIwMzEsLTQuMDYwNTUgMC4zMjAzMSwtNC4wNjA1NWMwLDAgMC4zMDk1MywtMi4xNTk2MSAxLjI2OTUzLC0zLjA5OTYxYzEuMjIsLTEuMjUgMi41ODA5NCwtMS4yNjAwOCAzLjIxMDk0LC0xLjMzMDA4YzQuNDgsLTAuMzIgMTEuMTg5NDUsLTAuMzIwMzEgMTEuMTg5NDUsLTAuMzIwMzF6TTEyLDI2djEuOTc4NTJoMnYxMC4wMjE0OGgydi0xMC4wMjE0OGgydi0xLjk3ODUyek0yNSwyNnYxMmgydi0xLjI1YzAuNjMxLDAuNzgxIDEuNDUzLDEuMjUgMi4xMjUsMS4yNWMwLjc1MiwwIDEuNDA4MTYsLTAuNDA0NjkgMS42NjAxNiwtMS4xNzk2OWMwLjExOSwtMC40MTkgMC4yMDY4NCwtMC44MTAzMSAwLjIxNDg0LC0xLjY5NTMxdi0yLjc1YzAsLTAuOTg4IC0wLjEzMzc3LC0xLjczMjM0IC0wLjI1OTc3LC0yLjE1MjM0Yy0wLjI1MiwtMC43ODEgLTAuODYyMjMsLTEuMjE3NjYgLTEuNjE1MjMsLTEuMjIyNjZjLTAuOTgsLTAuMDA3IC0xLjM3NSwwLjUgLTIuMTI1LDEuMzc1di00LjM3NXpNMTgsMjl2Ni42ODU1NWMwLDAuNzIyIDAuMTAwNDcsMS4yMDY0NCAwLjIzMDQ3LDEuNTIzNDRjMC4yMiwwLjUxNCAwLjY2ODU5LDAuNzkxMDIgMS4zMDg1OSwwLjc5MTAyYzAuNzMsMCAxLjY3MDk0LC0wLjUxNDIzIDIuNDYwOTQsLTEuMzY1MjN2MS4zNjUyM2gydi05aC0ydjYuMjY5NTNjLTAuNDQsMC41ODQgLTEuMDgwNDcsMS4wMTk1MyAtMS40ODA0NywxLjAxOTUzYy0wLjI2LDAgLTAuNDY5NTMsLTAuMTA5NDggLTAuNTE5NTMsLTAuMzk2NDh2LTYuODkyNTh6TTM1LjAyOTMsMjljLTEuMDA4LDAgLTEuNzk1MjMsMC4zMTcwMiAtMi4zNjUyMywwLjkxNjAyYy0wLjQyLDAuNDQyIC0wLjY2NDA2LDEuMTY0NTYgLTAuNjY0MDYsMi4xMDE1NnYzLjA2NjQxYzAsMC45MzEgMC4yNjg1LDEuNTgyNTMgMC42ODc1LDIuMDE5NTNjMC41NzEsMC41OTkgMS4zNTY2NywwLjg5NjQ4IDIuMzg4NjcsMC44OTY0OGMxLjAzMSwwIDEuODQyNjcsLTAuMzEzMjIgMi4zODg2NywtMC45NDkyMmMwLjI0LC0wLjI4MSAwLjM5Mzk0LC0wLjU5NzIyIDAuNDYwOTQsLTAuOTQ5MjJjMC4wMTgsLTAuMTU5IDAuMDc0MjIsLTAuNTkwNTYgMC4wNzQyMiwtMS4xMDE1NmgtMnYwLjc5ODgzYzAsMC40NjQgLTAuNDQ4LDAuODM5ODQgLTEsMC44Mzk4NGMtMC41NTIsMCAtMSwtMC4zNzY4NCAtMSwtMC44Mzk4NHYtMS43OTg4M2g0di0wLjU3NjE3di0xLjQ0NTMxYzAsLTAuOTM1IC0wLjIyOTU4LC0xLjYxOTUgLTAuNjQyNTgsLTIuMDYyNWMtMC41NTMsLTAuNTk5IC0xLjMzODEyLC0wLjkxNjAyIC0yLjMyODEyLC0wLjkxNjAyek0zNSwzMC40NDcyN2MwLjU1MiwwIDEsMC4zNzY4NCAxLDAuODM5ODR2MS4zMjgxM2gtMnYtMS4zMjgxMmMwLC0wLjQ2NCAwLjQ0OCwtMC44Mzk4NCAxLC0wLjgzOTg0ek0yOC4yMjA3LDMwLjc0NjA5YzAuNTQ1LDAgMC43NzkzLDAuMzM0OTEgMC43NzkzLDEuMzc4OTF2Mi43NWMwLDEuMDQ0IC0wLjIzNDMsMS40MDQzIC0wLjc3OTMsMS40MDQzYy0wLjMxMSwwIC0wLjkwNDcsLTAuMjEzMyAtMS4yMjA3LC0wLjUyOTN2LTQuMzc1YzAuMzE2LC0wLjMxMiAwLjkwOTcsLTAuNjI4OTEgMS4yMjA3LC0wLjYyODkxeiI+PC9wYXRoPjwvZz48L2c+PC9nPgo8L3N2Zz4="
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default HeaderScroll;
