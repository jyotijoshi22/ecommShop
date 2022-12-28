import { db } from "../firestore";
import { collection, getDocs } from "firebase/firestore";

export const getStoreItems = async () => {
  //Specify which collection
  const collectionRef = collection(db, "react-shop-tshirt");

  const proData = await getDocs(collectionRef);

  proData.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};
