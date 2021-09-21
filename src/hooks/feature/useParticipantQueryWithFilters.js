import { useState } from "react";
import { usePagination } from "hooks";
import { firestore } from "database/firebase";
import { compute } from "utils";

function useParticipantQueryWithFilters(study) {
  const initialFilters = {
    status: ["interested", "screened", "consented", "accepted", "rejected"],
    sort: "eligibility",
  };

  const [filters, setFilters] = useState(initialFilters);
  const [toggleFilters, setToggleFilters] = useState(false);

  const areFiltersApplied = JSON.stringify(initialFilters) !== JSON.stringify(filters);

  const participantsQuery = firestore
    .collection("studies")
    .doc(study.id)
    .collection("participants")
    .where("status", "in", filters.status);

  const { documents, loading, error, loadingMore, handleLoadMore, fetchedAll } = usePagination(
    participantsQuery,
    10
  );

  const participants = documents.map((document) => {
    return { ...document, score: compute.eligibilityScore(study.questions, document.responses) };
  });

  const handleChangeFilter = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
  };

  return {
    participants,
    loading,
    error,
    loadingMore,
    handleLoadMore,
    fetchedAll,
    filters,
    toggleFilters,
    setToggleFilters,
    handleChangeFilter,
    handleClearFilters,
    areFiltersApplied,
  };
}

export default useParticipantQueryWithFilters;
