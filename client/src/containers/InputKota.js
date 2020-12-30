import React from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

var City = [];

axios
  .get('https://staging.bintex.id/api/delivery/city')
  .then(function(response) {
    //console.log(response.data.rajaongkir.results);
    City = response.data.rajaongkir.results;
  })
  .catch(function(error) {
    console.log(error);
  });

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return City.filter(City => regex.test(City.city_name));
}

function getSuggestionValue(suggestion) {
  console.log(suggestion.city_name);
  return suggestion.city_name;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.city_name}</span>;
}

class InputKota extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onSuggestionSelected = (event, { suggestion }) => {
    this.props.parentCallback(suggestion.city_name);
    event.preventDefault();
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: this.props.inputHolder,
      value,
      onChange: this.onChange
    };
    const theme = {
      container: 'relative',
      input:
        'w-full px-8 py-5 text-primary-dark bg-white focus:outline-none focus:bg-gray-100 rounded-full z-0',
      suggestionsContainerOpen: {
        position: 'absolute',
        width: '100%',
        'max-height': '200px',
        'overflow-y': 'auto',
        'z-index': '50'
      },
      suggestion: 'cursor-pointer px-8 py-5 bg-white',
      suggestionHighlighted: 'bg-accent-light'
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
        theme={theme}
        className="max-w-xl mx-auto"
      />
    );
  }
}

export default InputKota;
