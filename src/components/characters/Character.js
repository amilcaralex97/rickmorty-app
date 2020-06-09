import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Character extends Component {
  render() {
    const { character } = this.props;
    const charcterObject = character[0];
    console.log(charcterObject);
    return (
      <div className="absolute-wrapper">
        <div className="banner-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="jumbotron">
                  <img src={charcterObject.image} alt="" />
                  <h1 className="display-4">{charcterObject.name}</h1>
                  <hr className="my-4" />
                  <p className="lead">Status: {charcterObject.status}</p>
                  <p className="lead">Species: {charcterObject.species}</p>
                  <p className="lead">Origin: {charcterObject.origin.name}</p>
                  <p className="lead">
                    Location: {charcterObject.location.name}
                  </p>
                  <Link to="/" className="btn btn-primary btn-lg">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.charactersReducer.characters, ownProps.match.params.id);
  return {
    character: state.charactersReducer.characters.filter(
      (character) => character.id == ownProps.match.params.id
    ),
  };
};

export default connect(mapStateToProps, null)(Character);
