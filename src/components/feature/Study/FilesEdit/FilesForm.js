import { useFilesForm } from "hooks";
import { Button, Flex, Grid, Progress } from "@chakra-ui/react";
import { TextInput, FileInput, SecondaryButton } from "components";

function FilesForm({
  uploading,
  uploadError,
  uploadStatus,
  handleCancel,
  handleSubmit,
}) {
  const filesForm = useFilesForm();

  return (
    <>
      <Grid gap="16px" width="300px">
        {uploading ? (
          <Progress hasStripe value={uploadStatus} colorScheme="blue" />
        ) : (
          <>
            <FileInput
              label="File"
              name="file"
              error={filesForm.errors.file || uploadError}
              onChange={filesForm.selectFile}
              accept="application/pdf"
            />
            <TextInput
              label="Name"
              name="name"
              value={filesForm.values.name}
              error={filesForm.errors.name}
              onChange={filesForm.changeName}
            />
          </>
        )}
        <Flex gridGap="10px" justify="flex-end">
          <SecondaryButton onClick={handleCancel} isDisabled={uploading}>
            Cancel
          </SecondaryButton>
          <Button
            type="submit"
            colorScheme="blue"
            loadingText="Uploading"
            isLoading={uploading}
            onClick={() => handleSubmit(filesForm.values)}
          >
            Upload
          </Button>
        </Flex>
      </Grid>
    </>
  );
}

export default FilesForm;
