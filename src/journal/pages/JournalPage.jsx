import { useDispatch, useSelector } from "react-redux"
import { IconButton, Typography } from "@mui/material"
import { AddOutlined, MailOutline } from "@mui/icons-material"

import { JournalLAyout } from "../layout/JournalLAyout"
import { NoteView, NothingSelectedView } from "../view"
import { startNewNote } from "../../store/journal"
//import { ImageGalery } from "../component"

export const JournalPage = () => {
  const dispatch = useDispatch()

  const { isSaving } = useSelector(state => state.journal)
  const { active } = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }
  // dispatch(savingNewNote());

  return (
    <JournalLAyout>

      {/* <Typography>
        Aliquip cillum nisi exercitation minim adipisicing. Nulla pariatur non voluptate cupidatat excepteur tempor ipsum. Quis dolor amet elit non consectetur esse ad Lorem occaecat est nulla elit laborum. Ut duis aute dolor mollit. Ullamco occaecat eu Lorem do id est elit non. Exercitation qui tempor in ullamco do quis pariatur anim enim irure amet.
      </Typography> */}

      {/* <NothingSelectedView /> */}
      {/* <NoteView /> */}
      {/* {active === null ? <NothingSelectedView /> : <NoteView />} */}
      {!!active ? <NoteView /> : <NothingSelectedView />}
      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50

        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

      {/* <Typography variant='h1'>JournalPage</Typography>
      <MailOutline /> */}
    </JournalLAyout>
  )
}
