import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Navlinks from "./Navlinks";
import mobileNavIcon from "../../images/mobile-nav-icon.svg";

import { navbarChange } from "../../redux/actions/navbarActions";

const MyDesktopNavbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  background: #a17fe0;
  color: white;

  height: 15vh;

  box-shadow: 0 10px 5px ${(props) => props.theme.accent};

  .logo {
    color: #7bdff2;
    font-size: 7vh;
    text-shadow: 3px 3px 3px ${(props) => props.theme.accent};
  }

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 35vw;

    list-style: none;

    @media screen and (max-width: 758px) {
      display: none;
    }
  }

  .link {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    height: 15vh;

    color: white;

    padding: 0 1rem;
    font-size: 2.5vh;
    text-decoration: none;
    border-radius: 10px;

    &:focus {
      background: rgba(0, 0, 0, 0.1);
      outline: none;
    }

    &::after {
      content: "";
      height: 2px;
      width: 0;
      background: white;
      display: block;
      transition: width 0.5s ease-in-out;
    }

    &:hover::after {
      transform: width;
      width: 125%;
    }
  }
`;

const MyMobileNavButton = styled.button`
  background: transparent;
  height: 6vh;
  width: 6vh;
  border: none;

  transition: transform 1s ease-in-out;
  transform: rotate(
    ${(props) => (props.displayMobileNavbar ? "180deg" : "0deg")}
  );

  @media screen and (min-width: 758px) {
    display: none;
  }
`;

const DesktopNavbar = (props) => {
  const { toggleMobileNavbar, displayMobileNavbar } = props;
  return (
    <MyDesktopNavbar>
      <div className="logo">Rick&Morty</div>
      <Navlinks />
      <MyMobileNavButton
        myMobileNavButton={displayMobileNavbar}
        onClick={toggleMobileNavbar}
      >
        <img src={mobileNavIcon} alt="mobile nav icon" />
      </MyMobileNavButton>
    </MyDesktopNavbar>
  );
};

const mapStateToProps = (state) => {
  return {
    displayMobileNavbar: state.navbarReducer.displayMobileNavbar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMobileNavbar: () => dispatch(navbarChange()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesktopNavbar);
