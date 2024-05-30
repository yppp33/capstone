//  bookList/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Data, serverBook } from "@components/model/interfaceModel";
import BookListTamplate from "@components/component/BookListTemplate";
import LoadingComponent from "@components/component/LoadingComponent";
import { serverBookToData } from "@components/model/interfaceModel";
import { useDummy } from "@data/const";
import { dummyData } from "@data/dummyData";

// const dummyApiUrl = `https://bc87b101-4a86-4419-a9e4-2648ec0bde58.mock.pstmn.io/getBookInfo`;
const localApiUrl = `http://localhost:8080/books/recommend`;

// const apiURL = "https://www.aladin.co.kr/ttb/api";
const local = `http://localhost:3000/bookList`;
const requestBaseUrl = localApiUrl;

const BookList = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [datalist, setData] = useState<Data[]>([]);

  /**
   * 처음 렌더링될때 한번만 API 호출를 호출한다.
   */
  // useEffect(() => {
  //   const gender = searchParams.get("gender") || "defaultGender";
  //   const patronType = searchParams.get("patron_type") || "0";  // patron_type 기본값 "0"
  //   const birthdate = searchParams.get("birthdate") || "defaultBirthdate";
  //   const department = searchParams.get("department") || "defaultDepartment";
  //
  //   // 로그를 추가하여 매개변수 값 확인
  //   console.log("gender:", gender);
  //   console.log("patron_type:", patronType);
  //   console.log("birthdate:", birthdate);
  //   console.log("department:", department);
  //
  //   const params = new URLSearchParams({
  //     gender,
  //     patron_type: patronType,
  //     birthdate,
  //     department,
  //   });
  //
  //   if (useDummy) {
  //     const bookData = dummyData;
  //     const convertedDataList: Data[] = serverBookToData(bookData);
  //     setData(convertedDataList);
  //     return;
  //   }
  //
  //   fetch(`${requestBaseUrl}?${params.toString()}`)  // 수정된 부분
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         return response.json();
  //       })
  //       .then((bookData: serverBook[]) => {
  //         console.log(bookData); // JSON 데이터를 로깅
  //         const convertedDataList: Data[] = serverBookToData(bookData);
  //         setData(convertedDataList);
  //       })
  //       .catch((error) => {
  //         console.log("들어오는 데이터 형식 맞지 않음");
  //         console.log("서버 출력 데이터 수정 필요");
  //         console.log(error);
  //       });
  // }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      const gender = searchParams.get("gender") || "defaultGender";
      const patronType = searchParams.get("patron_type") || "0";  // patron_type 기본값 "0"
      const birthdate = searchParams.get("birthdate") || "defaultBirthdate";
      const department = searchParams.get("department") || "defaultDepartment";

      // 로그를 추가하여 매개변수 값 확인
      console.log("gender:", gender);
      console.log("patron_type:", patronType);
      console.log("birthdate:", birthdate);
      console.log("department:", department);

      const params = new URLSearchParams({
        gender,
        patron_type: patronType,
        birthdate,
        department,
      });

      if (useDummy) {
        const bookData = dummyData;
        const convertedDataList: Data[] = serverBookToData(bookData);
        setData(convertedDataList);
        return;
      }

      try {
        const response = await fetch(`${requestBaseUrl}?${params.toString()}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const bookData: serverBook[] = await response.json();
        console.log(bookData); // JSON 데이터를 로깅
        const convertedDataList: Data[] = serverBookToData(bookData);
        setData(convertedDataList);
      } catch (error) {
        console.log("들어오는 데이터 형식 맞지 않음");
        console.log("서버 출력 데이터 수정 필요");
        console.log(error);
      }
    };

    fetchData();
  }, []);  // 빈 배열을 의존성 배열로 전달하여 한 번만 실행되도록 설정

  return (
      <div>
        {datalist[0] ? (
            <BookListTamplate dataList={datalist} />
        ) : (
            <LoadingComponent />
        )}
      </div>
  );
};

export default BookList;
