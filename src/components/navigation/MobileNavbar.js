import React from "react";
import styled from "styled-components";
import Navlinks from "./Navlinks";
import { connect } from "react-redux";

const MyMobileNavbar = styled.nav`
  width: 50vw;
  background: ${(props) => props.theme.primary};

  margin-bottom: 15px;

  box-shadow: -10px 10px 5px ${(props) => props.theme.accent};

  margin-left: auto;

  transition: transform 1s;
  transform: translateX(
    ${(props) => (props.displayMobileNavbar ? "0%" : "calc(100% + 15px)")}
  );

  .nav-links {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;

    height: 60vh;

    list-style: none;
  }

  .link {
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
  }
`;

const MobileNavbar = (props) => {
  const { displayMobileNavbar } = props;
  return (
    <div>
      <MyMobileNavbar displayMobileNavbar={displayMobileNavbar}>
        <Navlinks isMobileLink={true} />
      </MyMobileNavbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayMobileNavbar: state.navbarReducer.displayMobileNavbar,
  };
};

export default connect(mapStateToProps, null)(MobileNavbar);
