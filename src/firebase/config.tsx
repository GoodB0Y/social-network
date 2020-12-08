import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDTwoaQJiqc41BgLH1kwcLlA3fsGWl6XT4',
  authDomain: 'social-network-e19cb.firebaseapp.com',
  databaseURL: 'https://social-network-e19cb.firebaseio.com',
  projectId: 'social-network-e19cb',
  storageBucket: 'social-network-e19cb.appspot.com',
  messagingSenderId: '517225750823',
  appId: '1:517225750823:web:6fec7ea7f13123cd52c902',
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
