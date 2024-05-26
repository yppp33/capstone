"use client";
import React, { forwardRef } from "react";
import { BookItem, navItemType } from "@components/model/interfaceModel";
import Book from "@components/containers/book/book";
import styles from "@styles/detailInfo.module.css";
import RecommandList from "./RecommandList";

const DetailInfo = forwardRef(
  (props: navItemType, ref: React.ForwardedRef<HTMLElement[]>) => {
    const { idx, tagId, item, content, onClickBook } = props;

    return (
      <section
        ref={(currentRef: HTMLElement) => {
          if (
            ref !== null &&
            typeof ref !== "function" &&
            ref.current !== null
          ) {
            ref.current[idx] = currentRef;
          }
        }}
        id={tagId}
        className={styles.detail_section}
      >
        <div className={styles.detail_info_content}>
          <h2 className={styles.detail_title}>{item}</h2>
          {typeof content === "string" ? (
            content !== "" ? (
              <p className={styles.detail_text}>{content}</p>
            ) : (
              <p className={styles.detail_text}>설명이 없습니다.</p>
            )
          ) : (
            <RecommandList props={props} />
          )}
        </div>
      </section>
    );
  }
);

export default DetailInfo;
