import { useState } from "react";
import { datetime } from "utils";
import { storage } from "database/firebase";

function useFiles(studyID) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploadStatus, setUploadStatus] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(null);

  const handleFetch = async () => {
    const { items } = await storage.ref(`study/${studyID}`).listAll();

    const studyFiles = await Promise.all(
      items.map(async (ref) => {
        const meta = await ref.getMetadata();

        return {
          ref,
          name: ref.name,
          date: datetime.getFriendlyDate(meta.timeCreated),
        };
      })
    );

    setFiles(studyFiles);
    setLoading(false);
  };

  const handleOpen = async (file) => {
    const url = await file.ref.getDownloadURL();
    window.open(url, "_newtab");
  };

  const handleDelete = async (file) => {
    return storage
      .ref(`study/${studyID}/${file.name}`)
      .delete()
      .then(() => handleFetch());
  };

  const handleUpload = (name, file) =>
    new Promise((resolve, reject) => {
      setUploading(true);
      const ref = storage.ref(`study/${studyID}/${name}`);
      const task = ref.put(file);

      task.on(
        "state_changed",
        (snapshot) => {
          const filesize = snapshot.totalBytes;
          const uploaded = snapshot.bytesTransferred;
          const percent = Math.round((100 * uploaded) / filesize);
          setUploadStatus(percent);
        },
        (error) => {
          setUploading(false);
          setUploadSuccess(false);
          setUploadError(error.message);
          reject(error.message);
        },
        () => {
          setUploading(false);
          setUploadSuccess(true);
          handleFetch();
          resolve();
        }
      );
    });

  return {
    files,
    loading,
    uploadError,
    uploadStatus,
    uploadSuccess,
    uploading,
    handleFetch,
    handleOpen,
    handleDelete,
    handleUpload,
  };
}

export default useFiles;
