import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { useDetectDevice } from "hooks";

function FilesLoading() {
  const { responsive } = useDetectDevice();

  return (
    <SimpleGrid spacing="20px" columns={responsive([1, 3, 4])}>
      <Skeleton rounded="md" h="120px" />
      <Skeleton rounded="md" h="120px" />
      <Skeleton rounded="md" h="120px" />
      <Skeleton rounded="md" h="120px" />
      <Skeleton rounded="md" h="120px" />
      <Skeleton rounded="md" h="120px" />
      <Skeleton rounded="md" h="120px" />
      <Skeleton rounded="md" h="120px" />
    </SimpleGrid>
  );
}

export default FilesLoading;
