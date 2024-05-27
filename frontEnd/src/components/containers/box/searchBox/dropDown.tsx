interface dropDownItem {
  firstItem: string;
  clickEvent: React.MouseEventHandler<HTMLElement> | undefined;
}

export default function DropDown({ firstItem, clickEvent }: dropDownItem) {
  const categoryList = [
    { id: 0, item: firstItem },
    { id: 1, item: "메뉴2" },
    { id: 2, item: "메뉴3" },
    { id: 3, item: "메뉴4" },
  ];

  return (
    <>
      {categoryList.map((elem, index) => (
        <li className="dropDown_item" key={index} onClick={clickEvent}>
          {elem.item}
        </li>
      ))}
    </>
  );
}
