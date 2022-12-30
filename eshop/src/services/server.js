import { db } from "../firestore";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { collection, getDocs, getDoc, deleteDoc } from "firebase/firestore";

const generateItems = () => {
  const products = [];

  const tshirts = ["StressBury", "Roadster", "H&M", "Mayra"];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  tshirts.forEach((tshirt) => {
    products.push({
      Name: tshirt,
      price: (Math.random() * 100).toFixed(2),
      variants: sizes,
      quantities: sizes.reduce((acc, size) => {
        acc[size] = Math.floor(Math.random() * 100);
        return acc;
      }, {}),
      image: `/src/assets/${tshirt}.jpeg`,
      favourite: false,
    });
  });

  return products;
};

export const seedProducts = async () => {
  const collectionRef = collection(db, "products");

  const data = await getDocs(collectionRef);

  if (data.empty) {
    console.log("Seeding products");
    const seedData = generateItems();

    const addPromises = seedData.map(async (item) => {
      return await addDoc(collectionRef, item);
    });

    await Promise.all(addPromises);
  }
};

export const favProduct = async (productId, bool) => {
  const docRef = doc(db, "products", productId);
  await setDoc(docRef, { favourite: bool }, { merge: true });
};

//Reading data
export const getStoreItems = async () => {
  //Specify which collection
  const collectionRef = collection(db, "products");

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
  const collectionRef = collection(db, "cart");

  const documents = await getDocs(collectionRef);

  const data = documents.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return data;
};

//Add to cart
export const addToCart = async (product, variant) => {
  const collectionRef = collection(db, "cart");
  const { id, quantities, ...info } = product;

  const available = await reduceInventory(id, variant);
  if (available) {
    const docRef = doc(db, "cart", id);

    let cartProd = (await getDoc(docRef)).data();

    //let cartProd = (await collectionRef.doc(id).get()).data();

    cartProd
      ? (cartProd.quantities[variant] += 1)
      : (cartProd = {
          ...info,
          quantities: product.variants.reduce((acc, size) => {
            size === variant ? (acc[size] = 1) : (acc[size] = 0);
            return acc;
          }, {}),
        });

    await setDoc(docRef, cartProd);
  } else {
    console.log("Stock unavailable");
  }
};

export const reduceInventory = async (productId, variant) => {
  const docRef = doc(db, "products", productId);
  const data = (await getDoc(docRef)).data();

  const newInv = { ...data["quantities"] };
  if (newInv[variant] > 0) {
    newInv[variant] -= 1;
    await setDoc(docRef, { quantities: newInv }, { merge: true });

    console.log("Updated doc:", (await getDoc(docRef)).data());
    return true;
  } else {
    return false;
  }
};

export const incrInventory = async (productId, variant, amount) => {
  const docRef = doc(db, "products", productId);
  const data = (await getDoc(docRef)).data();

  const newInv = { ...data["quantities"] };
  newInv[variant] += amount;
  await setDoc(docRef, { quantities: newInv }, { merge: true });
  console.log(
    "Updated data added 1 to",
    variant,
    (await getDoc(docRef)).data()
  );
};

export const reduceCart = async (productId, variant, amount) => {
  const docRef = doc(db, "cart", productId);
  const data = (await getDoc(docRef)).data();
  console.log("Attempting to reduce cart for", data);
  const newQuant = { ...data["quantities"] };
  if (newQuant[variant] > 0) {
    newQuant[variant] -= amount;
    await setDoc(docRef, { quantities: newQuant }, { merge: true });
    console.log("Updated cart item:", (await getDoc(docRef)).data());
    await incrInventory(productId, variant, amount);
  }
  const remainingItems = Object.entries(newQuant).filter(
    ([size, quant]) => quant > 0
  );
  if (remainingItems.length === 0) {
    await rmFromCart(productId);
    console.log("Item removed from cart");
  }
};

export const rmFromCart = async (productId) => {
  const docRef = doc(db, "cart", productId);
  await deleteDoc(docRef);
};
