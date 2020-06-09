import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchCharacters,
  filterCharacters,
} from "../../redux/actions/charactersActions";

export class CharactersList extends Component {
  componentDidMount() {
    const { fetchCharacters } = this.props;
    fetchCharacters();
  }

  onInputChange = (event) => {
    let input = event.target.value;
    this.props.dispatch(filterCharacters({ value: input }));
  };

  render() {
    const { pending, filteredCharacters } = this.props;
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
                {filteredCharacters.map((character) => (
                  <div
                    className="card card-style col-12 col-sm-12 col-md-5 col-lg-2 mx-md-4 mx-lg-4 mx-lg-4 mx-xl-4 mb-5"
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
  console.log("CharctersList", state.charactersReducer.filteredCharacters);
  const {
    characters,
    error,
    pending,
    filteredCharacters,
  } = state.charactersReducer;
  return {
    characters: characters,
    error: error,
    pending: pending,
    filteredCharacters,
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
