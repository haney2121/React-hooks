import { useEffect, useState, useRef } from 'react';

export const useFetch = url => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true
  });

  useEffect(() => {
    return () => {
      //called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch(url);
      let response = await data.text();
      if (isCurrent.current) {
        setState(prevState => ({
          ...prevState,
          data: response,
          loading: false
        }));
      }
    };
    fetchData();
  }, [url, setState]);

  return state;
};
