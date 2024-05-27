import React from "react";
import { BookItem } from "@components/model/interfaceModel";
import styles from "@styles/aboutBook.module.css";

export default function BookBasicInfo({ bookData }: { bookData: BookItem }) {
  const { title, author, publisher, cover } = bookData;

  return (
    <div className={styles.top_component}>
      <div id="book_cover" className={styles.book_image}>
        <img src={cover} alt="책 표지" />
      </div>
      <div className={styles.basic_info_detail}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.author}>{author}</h2>
        <h3 className={styles.publisher}>{publisher}</h3>
      </div>
    </div>
  );
}
