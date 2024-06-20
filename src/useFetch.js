import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState(null); // make it null initial change its value once data is fetch
  const [pending, setpending] = useState(true); //this to show loding while data get fetching on screen
  const [error, seterror] = useState(null);

  useEffect(() => {
    const abortfetch = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortfetch.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data ");
          }
          return res.json();
        })
        .then((data) => {
          //console.log(data);
          setdata(data);
          setpending(false);
          //if get data then set erroe to null as on refresh we may get data then not see error msg
          seterror(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            // console.log("Aborted");
            //seterror(err.message);
          } else {
            seterror(err.message);
            setpending(false);
            // console.log(err);
          }
        });
    }, 1000);

    return () => abortfetch.abort();
  }, [url]);

  return { data, pending, error };
};

export default useFetch;
