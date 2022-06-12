import { useState, useEffect } from "react";
import { useLocation } from "hooks";

function useSearchParams() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useState();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const object = {};

    for (let [key, value] of params) {
      object[key] = value;
    }

    setSearchParams(object);
  }, [location]);

  return searchParams;
}

export default useSearchParams;
