import { useState, useEffect } from "react";

function useRealtimePagination(ref, limit) {
  const [documents, setDocuments] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [fetchedAll, setFetchedAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [additionalLoading, setAdditionalLoading] = useState(false);
  const [error, setError] = useState(null);

  const transformData = (snapshot) => {
    const documents = [];
    snapshot.forEach((doc) => documents.push({ id: doc.id, ...doc.data() }));
    return documents;
  };

  //  <- new            old->
  //  0 1 2 3 4 5 6 7 8 9 ...

  useEffect(() => {
    const unsubscribe = ref.limit(limit).onSnapshot((snapshot) => {
      const count = snapshot.docs.length;

      setDocuments((prev) => {
        const next = transformData(snapshot);
        const match = prev.findIndex((d) => d.id === next[count - 1].id);
        return next.concat(prev.slice(match + 1));
      });

      if (!lastDoc) {
        setLoading(false);
        setLastDoc(snapshot.docs[count - 1]);
      }

      if (count < limit) {
        setFetchedAll(true);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleFetchAdditional = () => {
    setAdditionalLoading(true);
    ref
      .limit(limit)
      .startAfter(lastDoc)
      .get()
      .then((snapshot) => {
        const count = snapshot.docs.length;

        setDocuments((prev) => {
          const next = transformData(snapshot);
          return prev.concat(next);
        });

        if (count < limit) {
          setFetchedAll(true);
        }

        setLastDoc(snapshot.docs[count - 1]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setAdditionalLoading(false));
  };

  return [documents, loading, error, handleFetchAdditional, additionalLoading, fetchedAll];
}

export default useRealtimePagination;
