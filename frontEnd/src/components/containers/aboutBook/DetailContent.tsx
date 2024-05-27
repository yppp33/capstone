import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { BookItem } from "@components/model/interfaceModel";
import { navItemType } from "@components/model/interfaceModel";
import DetailInfo from "./detail/DetailInfo";
import DetailNav from "./detail/DetailNav";

export default function DetailContent({
  bookData,
  recommandBookList,
  changeBook,
}: {
  bookData: BookItem;
  recommandBookList: BookItem[];
  changeBook: (bookItem: BookItem) => void;
}) {
  // const scrollRef = useRef<HTMLElement[]>([]);
  // scrollRef.current : []
  const scrollRef = useRef<HTMLElement[]>([]); // <- DetailReview1, DetailReview2, DetailReview3

  const [test, setTest] = useState(false);

  const { description, categoryName } = bookData;

  // 4개의 객체를  담을 Ref배열
  // DOM을 건들기 위해 사용

  useEffect(() => {
    console.log("DetailContent reRendering");
  }, [test]);
  const onClick = () => {
    setTest(!test);
  };

  /**
   * navItem content
   * DetailReview 에 들어갈 content이다.
   */
  const navItemList: navItemType[] = [
    {
      idx: 0,
      tagId: "description",
      item: "책 소개",
      content: description,
      onClickBook: null,
    },
    {
      idx: 1,
      tagId: "category",
      item: "카테고리",
      content: categoryName,
      onClickBook: null,
    },
    {
      idx: 2,
      tagId: "bookRecommendations",
      item: "책 추천 리스트",
      content: recommandBookList,
      onClickBook: changeBook,
    },
  ];

  return (
    <div onClick={onClick}>
      <DetailNav navItemList={navItemList} scrollRef={scrollRef} />
      {navItemList.map((elem, idx) => (
        <DetailInfo key={idx} {...elem} ref={scrollRef} />
      ))}
    </div>
  );
}
