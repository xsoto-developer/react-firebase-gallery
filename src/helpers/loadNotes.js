import firebase from "firebase/compat/app";
import { collection, doc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async (uid = '') => {
    if (!uid) throw new Error('El UID del usuario no existe');
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
    const docs = await getDocs(collectionRef);
        
    const notes = [];
    docs.forEach(doc => {
        // console.log(doc.data())
        notes.push({ id: doc.id, ...doc.data() })
    });
    //console.log(docs)
    // console.log('NOTASS')
    
    // console.log(notes)
    return notes;
}