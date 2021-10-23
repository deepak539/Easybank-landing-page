import React from "react";
import Copyright from "./Copyright";
import LogoAndSocialMedias from "./LogoAndSocialMedias";
import "./Footer.scss";
import FooterList1 from "./FooterList1";
import FooterList2 from "./FooterList2";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <LogoAndSocialMedias />
        <FooterList1 />
        <FooterList2 />
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
