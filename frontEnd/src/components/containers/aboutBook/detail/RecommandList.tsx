import Book from "@components/containers/book/book";
import { navItemType } from "@components/model/interfaceModel";
import styles from "@styles/detailInfo.module.css";
import { BookItem } from "@components/model/interfaceModel";
import { List } from "postcss/lib/list";

export default function RecommandList({ props }: { props: navItemType }) {
  const { idx, tagId, item, content, onClickBook } = props;
  const contentList = content as BookItem[];

  return (
    <div className={styles.book_list_container}>
      <div className={styles.book_list}>
        {contentList.map((e, idx) => (
          <Book
            bookInfo={e}
            key={idx}
            clickEvent={
              onClickBook !== null ? onClickBook : (bookItem: BookItem) => {}
            }
          />
        ))}
      </div>
    </div>
  );
}
