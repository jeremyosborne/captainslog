import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      height: '100%',
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}))

export const Logform = () => {
  const classes = useStyles()
  const [content, setContent] = React.useState('')

  const handleChange = event => {
    setContent(event.target.value)
  }

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField
          id='standard-multiline-flexible'
          label='What'
          multiline
          onChange={handleChange}
          rows='4'
          rowsMax='4'
          value={content}
        />
      </div>
      <div>
        <Button fullWidth variant='contained' color='primary'>
          Save
        </Button>
      </div>
    </form>
  )
}

export default Logform
