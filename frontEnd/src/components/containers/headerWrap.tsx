/**
 * header
 * 제목 login logout profile 으로 구성되어있습니다.
 *
 *
 * 사이즈에 따라 달라질 예정이다
 */
"use client";
import { HEADER_HEIGHT } from "@data/const";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import React from "react";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";

export default function HeaderWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  const [click, setClicked] = useState(false);
  const [reEnter, setReEnter] = useState(false);
  const onClick = () => {
    setClicked(!click);
  };

  const pathname = usePathname();
  let pathCheck = pathname.substr(1, pathname.length) === "";
  console.log(pathCheck);

  return (
    <div className="header_wrapper">
      <nav className={`header`} style={{ height: HEADER_HEIGHT }}>
        <div className="d-flex text-white flex-row justify-content-between">
          <Link className="p-3 navbar-brand" href="#">
            독서하냥
          </Link>
          <ul className="ms-auto">
            {
              pathCheck ? (
                <></>
              ) : (
                <>
                  <Link className=" p-3 pr-3 nav-link" href={"/"}>
                    정보 재입력하기
                  </Link>
                </>
              )

              /* <Link onClick={onClick} className="p-3 nav-link" href="/loginPage">
            Login
          </Link> */
            }
          </ul>
        </div>
      </nav>
      <div
        className="main_content_area"
        style={{
          paddingTop: `${HEADER_HEIGHT}`,
          paddingBottom: HEADER_HEIGHT,
        }}
      >
        {children}
      </div>
      <hr />
      <footer className="footer mt-auto py-3 ">
        <div className="container">
          <div className="text-body-secondary">
            <Link href="https://github.com/yppp33/capstone" target="_blank">
              Github
            </Link>
            <span id="bar">|</span>
            <span id="copy-right">&copy; 2024.</span>
          </div>
        </div>
      </footer>

      {/* <div className="dropdown position-fixed top-4 end-0 mb-3 me-3 bd-mode-toggle">
        <button
          className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="Toggle theme (auto)"
        >
          <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
            <use href="#circle-half"></use>
          </svg>
          <span className="visually-hidden" id="bd-theme-text">
            Toggle theme
          </span>
        </button>
      </div> */}
    </div>
  );
}
