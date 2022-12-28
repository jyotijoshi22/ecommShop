import { db } from "../firestore";
import { collection, doc, setDoc } from "firebase/firestore";

export const favProduct = async (productId, bool) => {
    const docRef = doc(db, "react-shop-tshirt", productId);
	await setDoc(docRef, { favourite: bool }, {merge: true});
};