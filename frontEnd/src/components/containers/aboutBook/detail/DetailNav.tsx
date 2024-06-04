"use client";

import { navItemType } from "@components/model/interfaceModel";
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
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const navRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (navIndex !== null) {
      scrollRef.current[navIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      navRef.current.forEach((ref) => {
        if (ref.classList.contains("active")) {
          ref.classList.remove("active");
        }
      });

      navRef.current[navIndex].classList.add("active");
    }
  }, [navIndex]);

  useEffect(() => {
    const option = {
      threshold: 0,
      rootMargin: `-${window.innerHeight / 2 - 1}px 0px`,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elem = entry.target as HTMLElement;
          const index = scrollRef.current.indexOf(elem);
          setActiveIndex(index);
          console.log(index);
        }
      });
    }, option);

    if (scrollRef.current.length > 0) {
      scrollRef.current.forEach((elem) => observer.observe(elem));
    }

    return () => {
      if (scrollRef.current.length > 0) {
        scrollRef.current.forEach((elem) => {
          if (elem !== null) {
            observer.unobserve(elem);
          }
        });
      }
    };
  }, [scrollRef]);

  useEffect(() => {
    if (activeIndex !== null) {
      navRef.current.forEach((ref) => {
        if (ref.classList.contains("active")) {
          ref.classList.remove("active");
        }
      });

      navRef.current[activeIndex].classList.add("active");
    }
  }, [activeIndex]);

  // useEffect(() => {
  //   if (window.innerWidth <= 389) {
  //     console.log("hui");
  //     document.getElementById("aboutBook_tab")?.classList.add("nav-pills");
  //   } else {
  //     document.getElementById("aboutBook_tab")?.classList.remove("nav-pills");
  //     document
  //       .getElementById("aboutBook_tab")
  //       ?.classList.remove("nav-justified");
  //   }
  // });
  return (
    <nav style={{ position: "sticky", top: HEADER_HEIGHT, zIndex: 1 }}>
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
    </nav>
  );
}
