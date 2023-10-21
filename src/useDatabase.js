import { useState, useEffect } from "react";

function useGet(url) {
  const [data, setData] = useState(null);
  const [showLoading, setShowLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error(res.statusText);
          }
          return res.json();
        })
        .then((data) => {
          setShowLoading(false);
          setData(data);
          setErrorMessage(null);
        })
        .catch((err) => {
          if (err.name !== 'AbortError') {
            setShowLoading(false);
            setErrorMessage(err.message);
          }
        });
    }, 5000);

    return () => abortCont.abort();
  }, [url]);

  return { data, showLoading, errorMessage };
}

export default useGet;