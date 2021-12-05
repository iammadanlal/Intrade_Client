// import React from 'react';
// import classes from './Header.module.css';

// const Header = () => {
//     return (
//         <React.Fragment>
//             <header className={`${classes.header} `}>
//                 <nav className=" d-flex flex-row">
//                     <div className={classes['nav-left']}>
//                         <div>
//                             <img src="https://www.indiantradebird.com/Content/L2022/assets/images/icon/brand-logo/7.png" alt="Indiantradebird" />
//                         </div>
//                         <form className={classes['form-group']}>

//                             <input type="text" className={'rounded-pill'}/>
//                         </form>
//                     </div>
//                     <div className={classes['nav-right']}>
//                         <div className={classes['user']}>
//                             <i class="fa fa-user-o" aria-hidden="true"></i>
//                             <button>Sign in / Register</button>
//                         </div>
//                     </div>
//                 </nav>
//             </header>
//         </React.Fragment>
//     )
// }

// export default Header;
import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from "@material-ui/icons/MoreVert";
import CartIcon from "@material-ui/icons/ShoppingCartOutlined";
import WishListIcon from "@material-ui/icons/FavoriteBorder";
import CallIcon from "@material-ui/icons/Call";
import TopBar from "./TopBar";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const NavLinks = tw.div`inline-block`;

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    display: "none",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
      display: "block",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    background: "#6415ff",
    color: "#fff",
  },
  inputRoot: {
    color: "inherit",
    border: "1px solid #eee",
    boxShadow: "0 0 5px 0 #eee",
    borderRadius: 4,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  fixedAdjust: {
    height: 56,
    [theme.breakpoints.up("sm")]: {
      height: 64,
    },
  },
}));

export default function Header() {
  const [auth, setAuth] = React.useState(false);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <WishListIcon />
        </IconButton>
        <p>Wish List</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <CartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div
      className={classes.grow}
      style={{
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* <TopBar/> */}
      <AppBar
        position={"static"}
        style={{ boxShadow: "none" }}
        color="transparent"
      >
        <Toolbar style={{ background: "#fff" }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <a style={{ display: "block" }} href="/">
            <img
              src="https://www.indiantradebird.com/Content/L2022/assets/images/icon/brand-logo/7.png"
              alt="Indiantradebird"
            />
          </a>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <div
              style={{
                display: "flex",
                borderRight: "2px solid #eee",
                padding: "0 16px",
              }}
            >
              <IconButton
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <CallIcon />
              </IconButton>
              <div>
                <div style={{ fontSize: 12 }}>Call Us Now</div>
                <div>012 34567890</div>
              </div>
            </div>
            {auth ? (
              <>
                <IconButton
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <WishListIcon />
                </IconButton>
                <div
                  style={{
                    display: "flex",
                    border: "2px solid #eee",
                    borderBottom: "none",
                    borderTop: "none",
                    padding: "0 16px",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 12 }}>Shopping Cart</div>
                    <div>₹ 0.00</div>
                  </div>
                  <IconButton
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={17} color="secondary">
                      <CartIcon />
                    </Badge>
                  </IconButton>
                </div>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </>
            ) : (
              <NavLinks key={1} className={classes.sectionDesktop}>
                <Link to="/login" tw="lg:ml-12!">
                  Login
                </Link>
                <Link to="/signup">
                  <PrimaryLink
                    style={{ display: "inline-block", marginLeft: 20 }}
                  >
                    Sign Up
                  </PrimaryLink>
                </Link>
              </NavLinks>
            )}
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
        <div className={styles.categoriesContainer}>
          <ul className={styles.catelist}>
            <li>
              Lathes & Tools
              <ul className={styles.subcatelist}>
                <li>
                  <Link to="/product">Fiber Laser Cutting Machine</Link>
                </li>
                <li>
                  <Link to="">Plasma cutting machine</Link>
                </li>
                <li>
                  <Link to="">Fiber Laser Cutting Machine</Link>
                </li>
                <li>
                  <Link to="">Plasma cutting machine</Link>
                </li>
                <li>
                  <Link to="">Fiber Laser Cutting Machine</Link>
                </li>
                <li>
                  <Link to="">Plasma cutting machine</Link>
                </li>
              </ul>
            </li>
            <li>
              Machines & Equipments
              <ul className={styles.subcatelist}>
                <li>
                  <Link to="">Fiber Laser Cutting Machine</Link>
                </li>
                <li>
                  <Link to="">Plasma cutting machine</Link>
                </li>
                <li>
                  <Link to="">Fiber Laser Cutting Machine</Link>
                </li>
                <li>
                  <Link to="">Plasma cutting machine</Link>
                </li>
                <li>
                  <Link to="">Fiber Laser Cutting Machine</Link>
                </li>
                <li>
                  <Link to="">Plasma cutting machine</Link>
                </li>
              </ul>
            </li>
            <li>
              Pharma & Lab
              <ul className={styles.subcatelist}>
                <li>
                  <Link to="">Fiber Laser Cutting Machine</Link>
                </li>
                <li>
                  <Link to="">Plasma cutting machine</Link>
                </li>
                <li>
                  <Link to="">Fiber Laser Cutting Machine</Link>
                </li>
                <li>
                  <Link to="">Plasma cutting machine</Link>
                </li>
                <li>
                  <Link to="">Fiber Laser Cutting Machine</Link>
                </li>
                <li>
                  <Link to="">Plasma cutting machine</Link>
                </li>
              </ul>
            </li>
            <li>
              Plant & Machinery
              <ul className={styles.subcatelist}>
                <li>
                  <Link to="">Fiber Laser Cutting Machine</Link>
                </li>
                <li>
                  <Link to="">Plasma cutting machine</Link>
                </li>
                <li>
                  <Link to="">Fiber Laser Cutting Machine</Link>
                </li>
                <li>
                  <Link to="">Plasma cutting machine</Link>
                </li>
                <li>
                  <Link to="">Fiber Laser Cutting Machine</Link>
                </li>
                <li>
                  <Link to="">Plasma cutting machine</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {/* <div className={classes.fixedAdjust}></div> */}
    </div>
  );
}
