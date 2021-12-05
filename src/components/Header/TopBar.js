import React from 'react'
import { Grid } from '@material-ui/core'
import LocationIcon from '@material-ui/icons/RoomOutlined'
import UserIcon from '@material-ui/icons/PersonOutlineOutlined';
import HelpIcon from '@material-ui/icons/InfoOutlined'
import classes from './topbar.module.css';

export default function TopBar() {
  return (
    <div className={classes.topbar}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <span>Welcome to Indian Trade Bird</span>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <LocationIcon fontSize="small" />
                </Grid>
                <Grid item>Contact</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item><HelpIcon fontSize="small"/></Grid>
                <Grid item>Need Help</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item><UserIcon fontSize="small"/></Grid>
                <Grid item>
                  <span><a>Sign In</a> / <a>Register</a></span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
