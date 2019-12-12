import React from 'react'
import Link from '@material-ui/core/Link'
import {makeStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from './Title'

// Generate Order Data
function createData (id, date, latLon, who, what) {
  return {id, date, latLon, who, what}
}

const rows = [
  createData(0, '16 Mar, 2019 14:01', '37, -121', 'L. Dawg', 'Kept swimming'),
  createData(1, '16 Mar, 2019 14:03', '37, -121.1', 'L. Dawg', "Didn't drown."),
  createData(2, '16 Mar, 2019 14:03', '37, -121.2', 'L. Dawg', 'Temperature: really cold (and wet)'),
  createData(3, '16 Mar, 2019 14:08', '37, -121.3', 'L. Dawg', 'Kept swimming'),
]

function preventDefault (event) {
  event.preventDefault()
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}))

export default function Journal () {
  const classes = useStyles()
  return (
    <>
      <Title>Log entries</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Where</TableCell>
            <TableCell>Who</TableCell>
            <TableCell>What</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.latLon}</TableCell>
              <TableCell>{row.who}</TableCell>
              <TableCell>{row.what}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color='primary' href='#' onClick={preventDefault}>
          See more items
        </Link>
      </div>
    </>
  )
}
