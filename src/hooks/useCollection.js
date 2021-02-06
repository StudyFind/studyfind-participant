import { useState, useEffect } from "react";
import { useCollection as useFirestoreCollection } from "react-firebase-hooks/firestore";

function useCollection(query, options) {
  const [collection, setCollection] = useState();
  const [snapshot, loading, error] = useFirestoreCollection(query, options);

  const transformData = (snapshot) => {
    const documents = [];
    snapshot.forEach((doc) => documents.push({ id: doc.id, ...doc.data() }));
    return documents;
  };

  useEffect(() => {
    if (snapshot) {
      const data = transformData(snapshot);
      setCollection(data);
    }
  }, [snapshot]);

  return [collection, loading, error];
}

export default useCollection;
