import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../../../firebase/config';

// хук для работы с FireBase
// используется для сохранения фото из файловой системы в Storage и Cloud Firestore
// и предоставления url для последующих запросов при добавлении новых фото
type Error = null | Record<string, unknown>;
type Url = null | string;
interface StorageObject {
  url: Url;
  error: Error;
}

const useStorage = (file: File): StorageObject => {
  const [error, setError] = useState<Error>(null);
  const [url, setUrl] = useState<Url>(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    storageRef
      .put(file)
      .then(async () => {
        const downloadedUrl: string = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url: downloadedUrl, createdAt });
        setUrl(downloadedUrl);
      })
      .catch((err) => setError(err));
  }, [file]);
  return { url, error };
};

export default useStorage;
