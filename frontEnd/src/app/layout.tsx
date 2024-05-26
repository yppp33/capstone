import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import HeaderWrap from "@components/containers/headerWrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Suspense } from "react";
import NavigationEvents from "@components/navigation-events";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HYU book",
  description: "한양대 에리카 소속된 사람들에게 책을 추천해주는 사이트입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderWrap>{children}</HeaderWrap>

        {/* 네비게이션과 같이 url에 따라 바뀌거나, 고정 */}
        {/* <Suspense
          fallback={
            <div style={{ backgroundColor: "red", height: "500px" }}>
              Loading...
            </div>
          }
        >
          <NavigationEvents />
        </Suspense> */}
      </body>
    </html>
  );
}
