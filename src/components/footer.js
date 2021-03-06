import React from "react"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

const Footer = props => {
  const classes = useStyles()
  const { title } = props

  return (
    <footer className={classes.footer}>
      {title} © Keng {new Date().getFullYear()}.
    </footer>
  )
}

export default Footer
