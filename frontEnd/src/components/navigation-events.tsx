"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = `${searchParams}`;

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;

    console.log(decodeURI(url));

    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  return (
    <>
      {params === "" ? (
        <div>noen</div>
      ) : (
        <div style={{ backgroundColor: "red", height: "500px" }}>INFO</div>
      )}
    </>
  );
}
