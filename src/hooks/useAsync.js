import { useState } from "react";

function useAsync(promise) {
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);

  const trigger = () => {
    return new Promise((resolve, reject) => {
      setLoading(true);

      return promise()
        .then((data) => {
          setSuccess(true);
          resolve(data);
        })
        .catch((err) => {
          setSuccess(false);
          reject(err);
        })
        .finally(() => setLoading(false));
    });
  };

  return [trigger, loading, success];
}

export default useAsync;
