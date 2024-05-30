import { useEffect, useState } from "react";
import AboutBookWrapper from "@components/containers/aboutBook/AboutBookWrapper";
import AboutBook from "@components/containers/aboutBook/AboutBook";
import { BookItem } from "@components/model/interfaceModel";
import LoadingComponent from "./LoadingComponent";

export default function AboutBookTemplate({
  selectedBook,
  clickEvent,
}: {
  selectedBook: BookItem;
  clickEvent: () => void;
}) {
  const [currentBook, setBook] = useState<BookItem>(selectedBook);

  return (
    <>
      <AboutBookWrapper>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={clickEvent}
        ></button>
        {currentBook ? (
          <>
            <AboutBook
              bookData={currentBook}
              changeBook={(bookItem: BookItem) => {
                setBook(bookItem);
              }}
            />
          </>
        ) : (
          <LoadingComponent />
        )}
      </AboutBookWrapper>
    </>
  );
}
