import { useState, useEffect } from 'react';
import useFetch from './useFetch';

function useInfiniteScrollFetch() {
  const [newPage, setNewPage] = useState<number>(1);
  const { list, isLoading, error, total, page } = useFetch(newPage);

  const fetchMoreData = () => {
    setNewPage(prev => prev + 1);
  };

  return { list, isLoading, error, fetchMoreData, total, page };
}

export default useInfiniteScrollFetch;
