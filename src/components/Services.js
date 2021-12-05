import React from 'react'
import ShippingIcon from '@material-ui/icons/LocalShipping'
import SupportIcon from '@material-ui/icons/ContactSupport'
import SecurePaymentIcon from '@material-ui/icons/Security'
import classes from './services.module.css';

export default function Services() {
  return (
    <div className={classes.service_container}>
      <div className={classes.service_item}>
        <div className={classes.icon_wrapper}>
          <ShippingIcon fontSize="large" />
        </div>
        <div>
          <div className={classes.title}>Free Shipping & Return</div>
          <div className={classes.subtitle}>Free shipping on orders over $99</div>
        </div>
      </div>
      <div className={classes.service_item}>
        <div className={classes.icon_wrapper}>
          <SupportIcon  fontSize="large" />
        </div>
        <div>
          <div className={classes.title}>Customer Support 24/7</div>
          <div className={classes.subtitle}>Instant access to perfect support</div>
        </div>
      </div>
      <div className={classes.service_item}>
        <div className={classes.icon_wrapper}>
          <SecurePaymentIcon  fontSize="large" />
        </div>
        <div>
          <div className={classes.title}>Free Shipping & Return</div>
          <div className={classes.subtitle}>We ensure secure payment!</div>
        </div>
      </div>
    </div>
  )
}
