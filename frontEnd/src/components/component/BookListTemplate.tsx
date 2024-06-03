"use client";

import React, { useEffect, useState } from "react";
import ShowBooks from "@components/containers/book/showBooks";
import { Data } from "@components/model/interfaceModel";

export default function BookListTemplate({ dataList }: { dataList: Data[] }) {
  return (
    <>
      <ShowBooks dataList={dataList} />
    </>
  );
}
