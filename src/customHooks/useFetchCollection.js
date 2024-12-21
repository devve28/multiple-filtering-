import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";

const useFetchCollection = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCollection = useCallback(async () => {
    setLoading(true); 
    setError(null);   

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Ошибка при получении данных");
      }
      const allData = await response.json();
      setData(allData);
    } catch (error) {
      setError(error.message); 
      toast.error(error.message);
    } finally {
      setLoading(false); 
    }
  }, [url]);

  useEffect(() => {
    getCollection();
  }, [getCollection]);

  return { data, loading, error };
};

export default useFetchCollection;
