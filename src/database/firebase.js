import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = getFirestore();

export default db;
