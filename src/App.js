import "./App.css";
import { css } from "styled-components/macro"; //eslint-disable-line

import "tailwindcss/dist/components.min.css";
import "tailwindcss/dist/utilities.min.css";
import "tailwindcss/dist/base.min.css";
import "tailwindcss/dist/tailwind.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./views/components/headers/MainHeader";

import home from "./views/pages/home";
import signup from "./views/pages/Signup";
import login from "./views/pages/Login";
import Product from "./views/pages/Product";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import SimpleFiveColumn from "views/components/footers/SimpleFiveColumn";
import ProductView from "views/pages/ProductView";
import CompanyRegisteration from "views/pages/CompanyReg";
import Cart from "views/pages/Cart";
import ThreePlansWithHalfPrimaryBackground from "views/components/pricing/ThreePlansWithHalfPrimaryBackground";
import AdminDashboard from "views/pages/AdminDashboard";
import CompanyDashboard from "views/pages/CompanyDashboard";
import ForgetPassword from "views/pages/ForgetPassword";

const Page = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <AnimationRevealPage disabled>
        <SimpleFiveColumn />
      </AnimationRevealPage>
    </>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/admin/dashboard", "/company/dashboard"]}>
          <Switch>
            <Route component={AdminDashboard} exact path="/admin/dashboard" />
            <Route
              component={CompanyDashboard}
              exact
              path="/company/dashboard"
            />
          </Switch>
        </Route>
        <Route
          path={[
            "/",
            "/login",
            "/signup",
            "/category/:id",
            "/product/:id",
            "/cart",
            "/company-registration",
            "/pricing",
            "/forget-password",
          ]}
        >
          <Page>
            <Switch>
              <Route component={home} exact path="/" />
              <Route component={login} exact path="/login" />
              <Route component={signup} exact path="/signup" />
              <Route component={ForgetPassword} exact path="/forget-password" />
              <Route component={Product} exact path="/category/:id" />
              <Route component={ProductView} exact path="/product/:id" />
              <Route component={Cart} exact path="/cart" />
              <Route
                component={CompanyRegisteration}
                exact
                path="/company-registration"
              />
              <Route
                component={ThreePlansWithHalfPrimaryBackground}
                exact
                path="/pricing"
              />
            </Switch>
          </Page>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
