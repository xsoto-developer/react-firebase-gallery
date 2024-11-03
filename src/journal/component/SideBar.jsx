import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, List, ListItem, ListItemButton, Toolbar, Typography, ListItemIcon, Grid, ListItemText } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWith = 240 }) => {

    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);
    // console.log('xxxxxxxxxxxxxxxxxxxxxx')
    // console.log(notes);

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'//"temporary"
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWith }
                }}
            >

                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        {displayName}
                    </Typography>
                </Toolbar >
                <Divider />
                {/* <List>
                    {                       
                        notes[0].map(note => (
                            <SideBarItem key={note.id} note={note} />
                        ))
                    }
                </List> */}
                <List>
                    {notes.length > 0 ? (
                        notes[0].map(note => (
                            <SideBarItem key={note.id} {...note} />
                        ))
                    ) : (
                        // Aquí puedes mostrar un mensaje si no hay notas
                        <p>No hay notas para mostrar</p>
                    )}
                </List>

            </Drawer>


        </Box>
    )
}

