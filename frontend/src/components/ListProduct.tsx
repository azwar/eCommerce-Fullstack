'use client'

import React, { useEffect, useState } from "react"
import ItemProduct, { IProductItem } from "./ItemProduct"
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteScrollFetch from "@/hook/useInfiniteScrollFetch";

export default function ListProduct(): React.JSX.Element {
  const { list, isLoading, error, fetchMoreData, total, page } = useInfiniteScrollFetch();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="flex flex-col w-full" id="scrollable">
      <InfiniteScroll
        dataLength={list.length}
        next={fetchMoreData}
        hasMore={list.length < total}
        scrollThreshold={0.8}
        loader={<Loading loading={isLoading} />}
        endMessage={<NoMoreData listLength={list.length}/>}
      >
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 w-full">
          {list.map((item) => <ItemProduct data={item} key={item.id} />)}
        </div>
      </InfiniteScroll>
    </div>
  )
}

const NoMoreData = ({listLength} : {listLength: number}) => (
  (listLength > 0) ? <p className="py-5">No more data to load.</p> : <></>
)

const Loading = ({loading: isLoading}: {loading: boolean}) => (
  <p className="py-5 text-primary">Loading...</p> 
)