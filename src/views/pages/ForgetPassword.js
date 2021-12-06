import React, { useState, Fragment } from "react";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "../components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "../images/login-illustration.svg";
import logo from "../images/logo.svg";
import googleIconImageSrc from "../images/google-icon.png";
import twitterIconImageSrc from "../images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { Link } from "react-router-dom";
import axios from "services/axios";

const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;
const Alert = tw.div`fixed z-10 left-20 top-100 shadow w-full max-w-xs px-4 py-3 rounded-lg bg-red-200 text-red-700 font-medium`;

const ForgetPassword = ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Forget Password",
  submitButtonText = "Reset Password",
  SubmitButtonIcon = LoginIcon,
  loginUrl = "/login",
}) => {
  const [alert, setAlert] = useState(null);
  const [mailId, setEmail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/forgetPassword", { mailId })
      .then((res) => res.data)
      .then((data) => {
        window.location.replace("/login");
      })
      .catch((err) => {
        setAlert(err?.response?.data?.msg);
        setTimeout(() => setAlert(null), 5000);
        console.log(err);
      });
  };
  return (
    <Fragment>
      {alert && <Alert>{alert}</Alert>}

      <AnimationRevealPage>
        <Container>
          <Content>
            <MainContainer>
              <LogoLink href={logoLinkUrl}>
                <LogoImage src={logo} />
              </LogoLink>
              <MainContent>
                <Heading>{headingText}</Heading>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  Enter the email address you use on our platform. We'll send
                  you a one time password.
                </p>
                <FormContainer>
                  <Form onSubmit={onSubmit}>
                    <Input
                      type="email"
                      value={mailId}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                    <SubmitButton type="submit">
                      <SubmitButtonIcon className="icon" />
                      <span className="text">{submitButtonText}</span>
                    </SubmitButton>
                  </Form>
                  <p tw="mt-8 text-sm text-gray-600 text-center">
                    Back to{" "}
                    <Link
                      to={loginUrl}
                      tw="border-b border-gray-500 border-dotted"
                    >
                      Login
                    </Link>
                  </p>
                </FormContainer>
              </MainContent>
            </MainContainer>
            <IllustrationContainer>
              <IllustrationImage imageSrc={illustrationImageSrc} />
            </IllustrationContainer>
          </Content>
        </Container>
      </AnimationRevealPage>
    </Fragment>
  );
};

export default ForgetPassword;
