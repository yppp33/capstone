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
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className=" btn-close p-4 "
            aria-label="Close"
            onClick={clickEvent}
          ></button>
        </div>
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
