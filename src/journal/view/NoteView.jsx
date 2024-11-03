import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../component"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { useEffect, useMemo } from "react"
import { setActiveNote, startDeletenote, startSavenote, startUploadingFiles } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css';
import { useRef } from "react"


export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note);
    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date])

    const fileInputRef = useRef();


    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])


    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSavenote());
    }

    const onDeleteNote = () => {
        dispatch(startDeletenote());
    }

    const onFileInputChange = ({ target }) => {
        console.log(target.files);
        if (target.files === 0) return;
        console.log('Subiendo Archivos')
        dispatch(startUploadingFiles(target.files));
    }

    return (

        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            // spacing={0}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            // justifyContent="center"
            // sx={{ mb: 1 }}> 
            sx={{ minHeight: 'calc(100vh - 110px)', borderRadius: 3 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'> {dateString} </Typography>
            </Grid>
            <Grid item>
                <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                />

                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined />
                </IconButton>
                <Button
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color="primary" sx={{ padding: 2 }} >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label='titulo'
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="?Qu paso hoy¿"
                    // label='titulo'
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />

            </Grid>

            <Button
                //disabled={isSaving}
                onClick={onDeleteNote}
                color="error" sx={{ padding: 2 }} >
                <DeleteOutline sx={{ fontSize: 30, mr: 1 }} />
                Borrar

            </Button>

            <ImageGalery images={note.imageUrls} />

        </Grid>
    )
}
