import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCEHB9jS3t8J8P_SlLwU-e0YWa7-3Ffrl4",
    authDomain: "swarovski-2799a.firebaseapp.com",
    projectId: "swarovski-2799a",
    storageBucket: "swarovski-2799a.appspot.com",
    messagingSenderId: "254812280918",
    appId: "1:254812280918:web:80c340175ddfcf690c43f7"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);

export const categoryCollection = collection(db, "categories");
export const productsCollection = collection(db, "products");
export const ordersCollection = collection(db, "orders");

const provider = new GoogleAuthProvider();
export const LogIn = () => signInWithPopup(auth, provider);
export const LogOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

export const onCategoriesLoad = (callback) =>
  onSnapshot(categoryCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onProductsLoad = (callback) =>
  onSnapshot(productsCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onOrdersLoad = (callback) =>
  onSnapshot(ordersCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );

export const uploadProductPhoto = (file) => {
  const storageRef = ref(storage,`products/${file.name}`);
  return uploadBytes(storageRef, file)
    .then(() => {
      return getDownloadURL(storageRef);
    })
    .catch((error) => {
      console.log("Failed to upload product photo:", error);
    });
};