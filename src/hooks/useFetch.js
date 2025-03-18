import { useState, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error fetching data");
      const result = await response.json();
      setData(result);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return [data, fetchData, isLoading, hasError];
};

export default useFetch;
