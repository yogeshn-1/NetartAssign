import React from "react";
import styled from "styled-components";
import award from "../assets/1.png";
import awardReceive from "../assets/2.png";
const Container = styled.section`
  display: flex;
  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;
const AwardImg = styled.img`
  @media screen and (max-width: 540px) {
    height: 400px;
  }
  @media screen and (max-width: 1024px) {
    height: 550px;
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    height: 620px;
  }
  @media screen and (min-width: 1441px) {
    height: 700px;
    max-height: 1200px;
    width: auto;
  }
`;

const Content = () => {
  return (
    <main>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 3rem",
          }}
        >
          <AwardImg src={award} alt="Award" />
        </div>
        <div style={{ margin: "0 15px" }}>
          <h3>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              {" "}
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <picture>
            <img
              src={awardReceive}
              alt="Award receiving"
              style={{ height: "auto", width: "95%", margin: "0 10px" }}
            />
            <figcaption>
              {" "}
              Government of India has awarded the{" "}
              <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
              Joint Managing Director of C.R.I. Group received the award from
              Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
              Singh, Honorable Minister of State.
            </figcaption>
          </picture>
        </div>
      </Container>
    </main>
  );
};

export default Content;
