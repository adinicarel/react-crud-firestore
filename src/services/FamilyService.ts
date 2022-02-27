import { familyCollection } from './firestore';
import IFamily from '../types/FamilyType';

import { 
    addDoc,
    setDoc,
    doc,
    deleteDoc
} from "firebase/firestore";

  // Function to create new Member of Family
export const addMember = async ({name, age, description, type}:IFamily) => {
  await addDoc(familyCollection, {
    name: name,
    age: age,
    description: description,
    type: type,
  })
}

// Function to update a certain Member of Family
export const editMember = async ({id, name, age, description, type}:IFamily) => {
  const memberDocRef = doc(familyCollection, id)
  await setDoc(memberDocRef, {
    name: name,
    age: age,
    description: description,
    type: type
  })
}

// Function to delete a specific Member of Family
export const deleteMember = (id:any) => {
  const memberDocRef = doc(familyCollection, id)
  return deleteDoc(memberDocRef);
}
