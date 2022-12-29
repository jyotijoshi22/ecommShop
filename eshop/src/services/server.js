import { db } from "../firestore";
import { doc, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
export const favProduct = async (productId, bool) => {
  const docRef = doc(db, "react-shop-tshirt", productId);
  await setDoc(docRef, { favourite: bool }, { merge: true });
};

export const getStoreItems = async () => {
  //Specify which collection
  const collectionRef = collection(db, "react-shop-tshirt");

  const querySnapshot = await getDocs(collectionRef);

  const data = querySnapshot.docs.map((doc) => {
    const id = doc.id;
    const restOfData = doc.data();

    return { id, ...restOfData };
  });

  return data;
};
