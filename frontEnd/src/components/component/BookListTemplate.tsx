"use client";

import React, { useEffect, useState } from "react";
import ShowBooks from "@components/containers/book/showBooks";
import styles from "@styles/book.module.css";
import { Data } from "@components/model/interfaceModel";

export default function BookListTamplate({ dataList }: { dataList: Data[] }) {
  /* [{item: [{title: "", link:""}]}, {item : []}] 을 받아온다 */

  return (
    <div className={styles.BooksDiv}>
      <ShowBooks dataList={dataList} />
    </div>
  );
}
