import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Config";

async function checkDocument() {
  const docRef = doc(db, "cars","Lambo");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

// Call the async function
checkDocument();
