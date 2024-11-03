import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { useActionData } from 'react-router-dom'
import { setActiveNote } from '../../store/journal'
import { useDispatch } from 'react-redux'

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNote({ title, body, id, date, imageUrls }))
         //console.log('Despues del dispatch')
       // console.log(getState())
    }

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title;
    }, [title]);



    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText
                        primary={newTitle} />
                    {/* <ListItemText secondary={'Deserunt commodo elit deserunt sunt. Ad incididunt pariatur deserunt duis ex culpa aliqua magna. '} /> */}
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
