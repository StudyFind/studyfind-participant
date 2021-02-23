import { useState, useEffect } from "react";
import { useDocument as useFirestoreDocument } from "react-firebase-hooks/firestore";

function useDocument(query, options) {
  const [document, setDocument] = useState();
  const [snapshot, loading, error] = useFirestoreDocument(query, options);

  const transformData = (snapshot) => {
    return { id: snapshot.id, ...snapshot.data() };
  };

  useEffect(() => {
    if (snapshot) {
      const data = transformData(snapshot);
      setDocument(data);
    }
  }, [snapshot]);

  return [document, loading, error];
}

export default useDocument;
