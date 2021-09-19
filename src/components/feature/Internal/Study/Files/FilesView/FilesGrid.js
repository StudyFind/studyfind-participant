import { useDetectDevice } from "hooks";
import { SimpleGrid } from "@chakra-ui/react";

import FileCard from "./FileCard";

function FilesGrid({ files, handleOpen, handleDelete }) {
  const { responsive } = useDetectDevice();

  return (
    <SimpleGrid spacing="20px" columns={responsive([1, 3, 4])}>
      {files.map((file, i) => (
        <FileCard key={i} file={file} handleOpen={handleOpen} handleDelete={handleDelete} />
      ))}
    </SimpleGrid>
  );
}

export default FilesGrid;
