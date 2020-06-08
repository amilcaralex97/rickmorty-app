import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchCharacters,
  filterCharacters,
} from "../../redux/actions/charactersActions";

export class CharactersList extends Component {
  state = {
    searchTerm: "",
    currentDisplayed: this.props.charcaters,
  };

  componentDidMount() {
    const { fetchCharacters } = this.props;
    fetchCharacters();
  }

  onInputChange = (event) => {
    let input = event.target.value;
    this.props.dispatch(filterCharacters({ value: input }));
  };

  render() {
    const { characters, pending } = this.props;
    return (
      <div className="absolute-wrapper">
        <div className="banner-wrapper">
          <div className="container">
            <div className="input-group flex-nowrap pb-5">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  Search
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Character"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={(event) => {
                  this.onInputChange(event);
                }}
              />
            </div>
            {pending ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="row">
                {characters.map((character) => (
                  <div
                    className="card card-style col-12 col-sm-12 col-md-5 col-lg-2 mx-4 mb-5"
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

                      <Link
                        to={`/character/${character.id}`}
                        className="btn btn-primary mt-auto"
                      >
                        Extra Info
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("CharctersLisrt", state.charactersReducer.characters);
  return {
    characters: state.charactersReducer.characters,
    error: state.charactersReducer.error,
    pending: state.charactersReducer.pending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacters: () => dispatch(fetchCharacters()),
    filterCharacters: () => dispatch(filterCharacters()),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
