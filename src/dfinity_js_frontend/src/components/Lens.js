import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { getMyLens } from "../utils/lensCanister";
import DotSpinner from './DotSpinner';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getMyFirebase } from "../utils/firebaseCanister";
import { v4 } from 'uuid';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Lens() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 1) {
        toast.error('Please choose only one image at a time.');
      } else {
        const file = acceptedFiles[0];
        checkIfImage(file);
      }
    },
  });

  const removeFile = async (e) => {
    e.stopPropagation();
    setUploadedFile(null);
  };

  const firebaseUpload = async (storage) => {
    if (uploadedFile == null) return;
    const imageRef = ref(storage, uploadedFile.file.name + v4());
    try {
      await uploadBytes(imageRef, uploadedFile.file);
      const url = await getDownloadURL(imageRef);
      return url;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  const handleUpload = async () => {
     try {
       if (uploadedFile) {
         setUploading(true);
         const firebaseConfig =  await getMyFirebase();
         const firebaseConfigParsed = JSON.parse(firebaseConfig);
         const app = initializeApp(firebaseConfigParsed);
         const storage = getStorage(app);
         const uploadedFileUrl = await firebaseUpload(storage);
         const data = await getMyLens(uploadedFileUrl);
         const state = data;
         navigate("/answers", { state });
       } else {
         toast.error("No file to upload");
       }
     } catch (error) {
       console.error('Error uploading file:', error);
       toast.error("An error occurred during file upload");
     } finally {
       setUploading(false);
     }
   };

  const checkIfImage = async (file) => {
     const reader = new FileReader();
 
     reader.onload = (event) => {
       const img = new Image();
       img.src = event.target.result;
       img.onload = () => {
         setUploadedFile({
           file,
           preview: URL.createObjectURL(file),
         });
       };
       img.onerror = () => {
         toast.error('Invalid file type. Please upload an image.');
       };
     };
     reader.readAsDataURL(file);
   };

   return (
    <>
      {uploading ? (
        <DotSpinner />
      ) : (
        <>
        <Navigation />
        <Header />
        <div id="lens" className="wrapper">
          <div className="container">
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <p>
                Drag and drop a file here or click to browse.
              </p>
              {uploadedFile && (
                <div className="file-item">
                  <img
                    src={uploadedFile.preview}
                    alt="Preview"
                  />
                  <br />
                  <span>{uploadedFile.file.name}</span>
                  <span className="remove-icon" onClick={(e) => removeFile(e)}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </div>
              )}
            </div>

            <div className="bottom-container">
              <button className="next-button" onClick={handleUpload}>
                Next
              </button>
            </div>
          </div>
        </div>
        <Footer />
        </>
      )}
    </>
  );
}
