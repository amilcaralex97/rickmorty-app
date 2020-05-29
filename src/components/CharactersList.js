import React, { Component } from "react";
import { connect } from "react-redux";

export class CharactersList extends Component {
  render() {
    return (
      <div>
        <h1>Hola</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
