import { Children } from "react";

export default function SearchBoxWrapper({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles: any;
}) {
  return (
    <div className={styles.introHeader}>
      <h2> It's Header Area </h2>
      <div className="d-flex justify-content-center flex-row" id="search_bar">
        {children}
      </div>
    </div>
  );
}
