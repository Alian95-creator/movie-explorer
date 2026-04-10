import { db } from "../services/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const saveWishlist = async (userId: string, list: any[]) => {
  await setDoc(doc(db, "wishlists", userId), {
    movies: list,
  });
};

export const getWishlist = async (userId: string) => {
  const docRef = doc(db, "wishlists", userId);
  const snap = await getDoc(docRef);

  return snap.exists() ? snap.data().movies : [];
};