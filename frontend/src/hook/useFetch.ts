import { IProductItem } from '@/components/ItemProduct';
import { useState, useEffect } from 'react';

function useFetch(newPage: number) {
  const url = `/product?offset=${newPage}`;
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState<IProductItem[]>([]);
  const [error, setError] = useState<Error | unknown>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
  
      try {
        if (!isLoading) {
          setIsLoading(true);

          const response = await fetch(url);
          const [data, totalData] = await response.json();    
          
          setPage(newPage);
          setList(prevList => [...prevList, ...data]);
          setTotal(totalData);

        }
      } catch (error) {
        console.error('Error useFetch', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }  
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newPage]);

  return { list, isLoading, error, total, page };
}

export default useFetch;
