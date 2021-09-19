import { Grid } from "@chakra-ui/react";
import { SortableContainer } from "react-sortable-hoc";

import QuestionItem from "./QuestionItem";

export default SortableContainer(({ values, errors, updateQuestion, deleteQuestion }) => (
  <Grid gap="10px">
    {values.map((_, i) => (
      <QuestionItem
        key={i}
        index={i}
        i={i}
        value={values[i]}
        error={errors[i]}
        updateQuestion={updateQuestion}
        deleteQuestion={deleteQuestion}
      />
    ))}
  </Grid>
));
