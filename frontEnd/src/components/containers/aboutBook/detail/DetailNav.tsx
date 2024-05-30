"use client";

import { navItemType } from "@components/model/interfaceModel";
import { type } from "os";
import { useState } from "react";
import { useRef, useEffect } from "react";
import { HEADER_HEIGHT } from "@data/const";

export default function DetailNav({
  scrollRef,
  navItemList,
}: {
  scrollRef: React.MutableRefObject<HTMLElement[]>;
  navItemList: navItemType[];
}) {
  const [navIndex, setNavIndex] = useState<null | number>(null);

  const navRef = useRef<HTMLElement[]>([]);

  /**
   * click 시
   * navIndex가 navItemList의 인덱스로 설정된다.
   */

  useEffect(() => {
    if (navIndex !== null) {
      scrollRef.current[navIndex]?.scrollIntoView({ behavior: "smooth" });

      navRef.current.forEach((ref) => {
        if (ref.classList.contains("active")) {
          ref.classList.remove("active");
        }

        console.log(ref);
      });

      navRef.current[navIndex].classList.add("active");
    }

    //초기화
  }, [navIndex]);

  // 현재 스크롤 위치에 따라 NavBar 버튼 스타일이 바뀌도록 클래스명을 지정한다.
  useEffect(() => {
    const changeNavBtnStyle = () => {
      scrollRef.current.forEach((ref, idx) => {
        if (
          ref.offsetTop <= window.scrollY &&
          window.scrollY < ref.offsetTop + ref.clientHeight
        ) {
          navRef.current.forEach((ref) => {
            if (ref.classList.contains("active")) {
              ref.classList.remove("active");
            }
          });

          // setNavIndex(idx);

          // if (!navRef.current[idx].classList.contains("active")) {
          //   console.log(navRef.current[idx]);
          //   navRef.current[idx].classList.add("active");
          // }
          // css repaint 방지
          // setNavIndex(idx)코드 제거
          // -> 왜냐면  클릭시 useEffect가 다시 일어난다!!
        }
      });
    };

    window.addEventListener("scroll", changeNavBtnStyle);

    return () => {
      // 왜 해제하지?
      // 해제되는 시점을 모르겠다.
      window.removeEventListener("scroll", changeNavBtnStyle);
    };
  }, [scrollRef]);

  return (
    <div style={{ position: "sticky", top: HEADER_HEIGHT }}>
      <ul id="aboutBook_tab" className="nav nav-tabs bg-white ">
        {navItemList.map((elem, idx) => (
          <li
            onClick={() => {
              setNavIndex(idx);
            }}
            key={idx}
            className={`nav-item`}
          >
            <a
              className={`nav-link`} // 클릭된 탭이면 active 클래스 부여
              aria-current="page"
              ref={(ref) => {
                if (ref) {
                  navRef.current[idx] = ref;
                }
              }}
            >
              {elem.item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
