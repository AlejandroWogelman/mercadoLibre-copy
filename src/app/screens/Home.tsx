import React, { useEffect } from "react";
import { FirstSection } from "../../components/FirstSection/FirstSection";
import { GaleryScreen } from "../../components/gallery/GaleryScreen";
import { Returns } from "../../components/rightSection/returns/Returns";
import { SellerInfo } from "../../components/rightSection/SellerInfo/SellerInfo";
import { ScreenDescript } from "../../components/rightSection/shortDescription/ScreenDescript";
import { Warranty } from "../../components/rightSection/warranty/Warranty";
import { Payments } from "../../components/rightSection/payments/Payments";
import { SellerRecomendation } from "../../components/leftSection/sellerRecommedatons/ViewSellerRecomm";
import { ScreenTechSpecs } from "../../components/leftSection/technical-specs/ScreenTechSpecs";
import { Description } from "../../components/leftSection/description/Description";
import { Questions } from "../../components/leftSection/questionsAndAnswers/Questions";

import {
  rightSection,
  main,
  leftSection,
  paddingLeft,
  sticky,
} from "./home.module.css";
import { alertModal } from "../../helpers/modal";



const HomeScreen: React.FC = () => {

 useEffect(() => {
  alertModal()
 }, [])
 

  return (
    <>
      <FirstSection />
      <main className={main}>
        <div className={leftSection}>
          <GaleryScreen />
          <div className={paddingLeft}>
            <SellerRecomendation />
            <ScreenTechSpecs />
            <Description />
            <Questions />
          </div>
        </div>

        <div className={rightSection}>
          <div className={sticky}>
            <ScreenDescript />
            <SellerInfo />
            <Returns />
            <Warranty />
            <Payments />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeScreen;
