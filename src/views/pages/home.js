import React from "react";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import TwoColumnWithVideo from "../components/hero/TwoColumnWithVideo";
import TabCardGrid from "../components/cards/TabCardGrid";
import ThreeColSimpleWithImageAndDashedBorder from "../components/blogs/ThreeColSimpleWithImageAndDashedBorder";
import ThreeColumnWithProfileImage from "../components/testimonials/ThreeColumnWithProfileImage";
import GetStartedLight from "../components/cta/GetStartedLight";
import SimpleSubscribeNewsletter from "../components/forms/SimpleSubscribeNewsletter";
import SimpleFiveColumn from "../components/footers/SimpleFiveColumn";

export default function home() {
  return (
    <div>
      <AnimationRevealPage disabled>
        <TwoColumnWithVideo />
      </AnimationRevealPage>
      <AnimationRevealPage disabled>
        <TabCardGrid />
      </AnimationRevealPage>
      <AnimationRevealPage disabled>
        <ThreeColSimpleWithImageAndDashedBorder />
      </AnimationRevealPage>
      <AnimationRevealPage disabled>
        <ThreeColumnWithProfileImage />
      </AnimationRevealPage>
      <AnimationRevealPage disabled>
        <GetStartedLight />
      </AnimationRevealPage>
      <AnimationRevealPage disabled>
        <SimpleSubscribeNewsletter />
      </AnimationRevealPage>
    </div>
  );
}
