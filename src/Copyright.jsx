import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import React from 'react'

export const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://jeremyosborne.com/'>
        Jeremy Osborne
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
