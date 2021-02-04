import { useState, useEffect } from "react";
import { useCollection as useFirestoreCollection } from "react-firebase-hooks/firestore";

function useCollection(query, options) {
  const [collection, setCollection] = useState();
  const [snapshot, loading, error] = useFirestoreCollection(query, options);

  useEffect(() => {
    if (snapshot) {
      const documents = [];
      snapshot.forEach((doc) => documents.push({ id: doc.id, ...doc.data() }));
      setCollection(documents);
    }
  }, [snapshot]);

  return [collection, loading, error];
}

export default useCollection;
