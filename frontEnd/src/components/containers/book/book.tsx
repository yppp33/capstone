"use client";

import { BookItem } from "@components/model/interfaceModel";
import styles from "@styles/book.module.css";
import { Data } from "@components/model/interfaceModel";

/**
 *
 * @param param0 bookInfo: Data; clickEvent: (bookItem: BookItem) => void;
 * @returns BookList 보여주는 페이지의 singleBook
 */

export default function Book({
  bookInfo,
  clickEvent,
}: {
  bookInfo: BookItem;
  clickEvent: (bookItem: BookItem) => void;
}) {
  const { title, author, publisher, cover }: BookItem = bookInfo;
  //데이터 구조

  const titles = title.split("-");
  const words = author.split(",");

  return (
    <div
      className={styles.book_item}
      onClick={() => {
        clickEvent(bookInfo);
        window.scrollTo(0, 0);
      }}
    >
      <div id={styles.book_cover}>
        <img src={cover} alt={titles[0]} />
      </div>

      <div className="fw-bold" style={{ fontSize: "1.5rem" }}>
        <p>{titles[0]}</p>
      </div>
      <p>{titles[1]}</p>
      <div className="d-flex flex-row w-100">
        <span className="pe-3">{words[0]}</span>
        <span>{words[1]}</span>
      </div>
      {/* </Link> */}
    </div>
  );
}
