import React, { Component } from "react";
import { connect } from "react-redux";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import styled from "styled-components";

import { navbarChange } from "../../redux/actions/navbarActions";

const MyNavbar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;

  overflow-x: hidden;
`;

export class Navbar extends Component {
  componentDidMount = () => {
    window.addEventListener("resize", this.checkAndAutoHideMobileNavbar);
  };

  componentWillUnmount = () => [
    window.removeEventListener("resize", this.checkAndAutoHideMobileNavbar),
  ];

  checkAndAutoHideMobileNavbar = () => {
    const screenWidth = window.innerWidth;

    if (this.props.displayMobileNavbar && screenWidth > 769) {
      this.props.toggleMobileNavbar();
    }
  };
  render() {
    return (
      <MyNavbar>
        <DesktopNavbar />
        <MobileNavbar />
      </MyNavbar>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
