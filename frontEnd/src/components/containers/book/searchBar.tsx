/* 구현사항
1. 검색어 입력하면 검색어에 맞는 작품들 업로드 -> 페이지 갈아끼워야함
2. 실시간 검색어 모달 창 
3. ? 구현사항 입력중일시 모달 창만 뜨고 , 관련 작품은 안뜨나?
   작가 작품 따로 분리 안하고 다 뜨나?
 */

"use client";
export default function SearchBar() {
  const onEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(e.target.value);
  };
  return (
    <div>
      <input placeholder="검색어를 입력해주세요" onChange={onEvent}></input>
    </div>
  );
}
