import React, { useEffect, useState } from "react";
import { storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";

const Store = () => {
  const [fileUpload, setFileUpload] = useState(null);

  const uploadFile = async () => {
    if (!fileUpload) return;
    const fileFolderRef = ref(storage, `imageFiles/${fileUpload.name}`);
    try {
      await uploadBytes(fileFolderRef, fileUpload);
      alert("File Uploaded Successfully");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
      <button onClick={uploadFile}>Upload File</button>
    </div>
  );
};

export default Store;
