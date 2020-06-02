import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCharacters } from "../redux/actions/charactersActions";

export class CharactersList extends Component {
  componentDidMount() {
    const { fetchCharacters, characters } = this.props;
    fetchCharacters();
    console.log(characters);
  }
  shouldComponentRender = () => {
    const { pending } = this.props;
    if (pending === false) {
      return false;
    } else {
      return true;
    }
  };
  render() {
    const { characters } = this.props;
    return (
      <div className="absolute-wrapper">
        <div className="absolute-wrapper">
          <div className="container">
            <div className="row">
              {characters.map((character) => (
                <div
                  className="card card-style col-12 col-sm-6  col-md-4 col-lg-2 mx-2 mb-5"
                  key={character.id}
                >
                  <img
                    src={character.image}
                    className="card-img-top pt-3"
                    alt={character.name}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">{character.species}</p>

                    <Link to={"/"} className="btn btn-primary mt-auto">
                      Extra Info
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.charactersReducer.characters,
    error: state.charactersReducer.error,
    pending: state.charactersReducer.pending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacters: () => dispatch(fetchCharacters),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
