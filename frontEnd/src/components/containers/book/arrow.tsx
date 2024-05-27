// import "../../../../public/images/leftArrow.png";
import leftArrow from "../../../../public/images/leftArrow.png";
import rightArrow from "../../../../public/images/rightArrow.png";
import { MouseEventHandler } from "react";

export default function ArrowComponet({
  onClick,
  leftDir,
}: {
  onClick: MouseEventHandler;
  leftDir: boolean;
}) {
  return (
    // <div onClick={onClick}>
    <img
      onClick={onClick}
      src={`${leftDir ? leftArrow.src : rightArrow.src}`}
      // src={` ${leftArrow.src}`}
    ></img>
    // </div>
  );
}
