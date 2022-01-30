import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState, useEffect } from "react";
import { db, storage } from "./firebase";

export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) =>
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
      (err) => setError(err),
      async () => setUrl(await getDownloadURL(uploadTask.snapshot.ref))
    );
  }, [file]);

  return { progress, url, error };
};

export const useWriteToDatabase = (url, desc) => {
  useEffect(() => {
    const addData = async (url, desc) => {
      if (url) {
        const doc = await addDoc(collection(db, "pictures"), {
          url: url,
          desc: desc,
          timestamp: serverTimestamp(),
        });
        console.log("saved to db !!");
      }
    };
    addData(url, desc);
  }, [url]);
};

export const useDatabase = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImgs = async () => {
      const _images = [];
      const querySnapshot = await getDocs(collection(db, "pictures"));
      querySnapshot.forEach((doc) =>
        _images.push({ ...doc.data(), id: doc.id })
      );
      setImages(_images);
    };
    getImgs();
  }, [images]);
  return { images };
};
