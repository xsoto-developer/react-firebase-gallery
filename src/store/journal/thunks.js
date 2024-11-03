//import firebase from "firebase/compat/app";

import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNotes, setSaving, updateNote } from "./";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote());
        //        console.log(getState())
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            imageUrls: [],
            date: new Date().getTime(),
        }
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);
        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote));
        // dispatch(savingNewNote());
        dispatch(setActiveNote(newNote))
        // console.log('Despues del dispatch')
        //   console.log(getState())
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe');
        const arrayNotes = await loadNotes(uid)

        // console.log('Antes  del dispatch')
        // console.log(arrayNotes)
        // console.log(getState())
        dispatch(setNotes(arrayNotes))
        //console.log('Despues del dispatch')
        // console.log(getState())
    }
}

export const startSavenote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());
        const { uid } = getState().auth;
        const { active: note } = getState().journal;
        const noteToFireStore = { ...note }
        delete noteToFireStore.id;
        //console.log(noteToFireStore)

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true });
        dispatch(updateNote(note));

    }
}


export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving());
        // await fileUpload(files[0])
        // console.log(files);
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file))
        }

        const photosUrls = await Promise.all(fileUploadPromises)
        console.log(photosUrls);
        dispatch(setPhotosToActiveNotes(photosUrls));

    }
}

export const startDeletenote = ()=>{
    return async (dispatch, getState) => {
        
        const {uid} = getState().auth;
        const {active: note} = getState().journal;
        console.log({uid, note})
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);
        dispatch (deleteNoteById(note.id));

    }
}