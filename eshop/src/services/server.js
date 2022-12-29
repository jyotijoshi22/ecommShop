import { db } from "../firestore";
import { doc, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

//Favourite
export const favProduct = async (productId, bool) => {
  const docRef = doc(db, "react-shop-tshirt", productId);
  await setDoc(docRef, { favourite: bool }, { merge: true });
};

//Reading data
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

//get information of cart
export const getCart = async () => {
  const collectionRef = collection("cart");

  const querySnap = await collectionRef.get();

  const documents = querySnap.docs;

  const data = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return data[0];
};

//Add to cart
export const addToCart = async (product) => {
  const collectionRef = collection("cart");
  const { id, quantities, ...info } = product;

  const available = await reduceInventory(id, variant);
  if (available) {
    let cartProd = (await collectionRef.doc(id).get()).data();

    cartProd
      ? (cartProd.quantities[variant] += 1)
      : (cartProd = {
          ...info,
          quantities: product.variants.reduce((acc, size) => {
            size === variant ? (acc[size] = 1) : (acc[size] = 0);
            return acc;
          }, {}),
        });

    await collectionRef.doc(product.id).set({ ...cartProd });
  } else {
    console.log("Stock unavailable");
  }
};
