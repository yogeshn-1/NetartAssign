import React from "react";
import styled from "styled-components";
import { faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PageFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2.5rem;
  background: #ec3237;
  color: #ffe4c7;
  a {
    color: #ffe4c7;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const iconStyle = {
  marginRight: "5px",
  height: "20px",
};

const FooterItem = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
const Footer = () => {
  return (
    <section style={{ width: "99%", margin: "0.5rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <p>
          CHEMICALS | PROCESS POWER WATER | WASTE WATER OILS | GAS PHARMA SUGARS
          | DISTILLERIES PAPER | PULP MARINE | DEFENCE METAL | MINING FOOD |
          BEVERAGE PETROCHEMICAL | REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
          AGRICULTURE | RESIDENTIAL
        </p>
      </div>
      <PageFooter>
        <FooterItem>
          <FontAwesomeIcon icon={faPhone} style={iconStyle} /> Toll free &nbsp;
          <b>1800 200 1234</b>
        </FooterItem>
        <FooterItem>
          {" "}
          <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
          <a href="https://www.facebook.com/cripumps" target="_blank">
            www.facebook.com/cripumps
          </a>
        </FooterItem>
        <FooterItem>
          <FontAwesomeIcon icon={faGlobe} style={iconStyle} />

          <a href="https://www.crigroups.com" target="_blank">
            www.crigroups.com
          </a>
        </FooterItem>
      </PageFooter>
    </section>
  );
};

export default Footer;
