import React, { useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header"
import Main from "./Main/Main";
import HomeBanner from "./Slider/Slider";
import { Modal, makeStyles } from '@material-ui/core'
import Services from "./Services";
import TopBar from "./Header/TopBar";

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
      transform: 'translate(-50%, -50%)',
      width: '41rem',
      borderRadius: 16,
      boxShadow: '0 0 50px 0 #444',
      display: 'flex',
      textAlign: 'center',
      backgroundPosition: '60% center',
      backgroundSize: 'cover',
      backgroundImage: 'url(https://oswork.indiantradebird.com/content/L2021_New/images/newsletter-popup.jpg)',
      height: 380,
      maxWidth: '90%',
      [theme.breakpoints.down('sm')]: {
        backgroundPosition: '0 0',
      },
    },
  }));

const Home = () => {

    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState({
      top: '50%', left: '50%',
      transform: '-50% -50%',
  });
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
      setTimeout(handleOpen, 3000)
  },[])

    const body = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      );    

    return (
        <React.Fragment>
            <Header />
            <HomeBanner/>
            <Services/>
            <Main />
            <Footer/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </React.Fragment>
    )
}


export default Home;