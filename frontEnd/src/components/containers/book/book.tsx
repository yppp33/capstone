"use client";

import { BookItem } from "@components/model/interfaceModel";
import styles from "@styles/book.module.css";
import { useDummy } from "@data/const";
import noImage from "@public/images/noImage.png";

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
  const { title, author, cover, publisher }: BookItem = bookInfo;
  //데이터 구조

  const authors = author.split(",");
  const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = noImage.src;
  };

  return (
    <div
      className={styles.book_item}
      onClick={() => {
        clickEvent(bookInfo);
        window.scrollTo(0, 0);
      }}
    >
      <div id={styles.book_cover}>
        <img src={cover} alt={title} onError={onErrorImg} />
      </div>

      <div id={styles.title} className="fw-bold" style={{ fontSize: "1.5rem" }}>
        <p>{title}</p>
      </div>

      <div>
        <span id={styles.book_author}>
          {authors.length > 1
            ? `${authors[0]}외 ${authors.length - 1}명`
            : authors[0]}
        </span>
      </div>

      <div className="mt-1" style={{ fontSize: "0.9rem", color: "		#9F9F9F" }}>
        {publisher}
      </div>
    </div>
  );
}
