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

export default function HeaderWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  const [click, setClicked] = useState(false);
  const onClick = () => {
    setClicked(!click);
  };
  console.log("Header Wrap Reder");
  return (
    <div className="header_wrapper">
      <nav className={`header`} style={{ height: HEADER_HEIGHT }}>
        <div className="d-flex text-white flex-row justify-content-between">
          <Link className="p-3 navbar-brand" href={"/"}>
            HOME
          </Link>
          {/* <ul className="ms-auto">
            <Link onClick={onClick} className="p-3 nav-link" href="/loginPage">
              Login
            </Link>
            <Link className=" p-3 pr-3 nav-link" href="#">
              Profile
            </Link>
          </ul> */}
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
      <footer className="footer">Footer</footer>
    </div>
  );
}
