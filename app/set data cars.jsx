import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase/Config";
import { collection } from "firebase/firestore"; 

async function setCarsData() {

const carsRef = collection(db, "cars");

await setDoc(doc(carsRef, "Lambo"), {
    describtion: "lambo des", title: "lambo title", price: "$50000",
    image: "https://i.imgur.com/nXx5A8j.jpg" });
await setDoc(doc(carsRef, "Bentelly"), {
    describtion: "Bentelly des", title: "Bentelly title", price: "$90000",
    image: "https://i.imgur.com/s65EstO.jpg" });
await setDoc(doc(carsRef, "BMW"), {
    describtion: "BMW description", title: "BMW title", price: "$30000",
    image: "https://i.imgur.com/VP14MCN.jpg"});
await setDoc(doc(carsRef, "Ferrari"), {
    describtion: "Ferrari des", title: "Ferrari title", price: "$150000",
    image: "https://i.imgur.com/Hez9tjE.jpg" });
await setDoc(doc(carsRef, "Mini Coper"), {
    describtion: "Mini Coper", title: "Mini Coper title", price: "$250000",
    image: "https://i.imgur.com/zKM5WyL.jpg" });
}
setCarsData();
