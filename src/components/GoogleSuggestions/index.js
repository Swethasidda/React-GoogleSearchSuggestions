// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  fillText = value => {
    this.setState({searchInput: value})
  }

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    // console.log(searchInput)
    const searchResults = suggestionsList.filter(each =>
      each.suggestion
        .toLocaleLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )
    // console.log(searchResults)

    return (
      <div className="big-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image"
        />
        <div className="small-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
              onChange={this.onSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="list-container">
            {searchResults.map(each => (
              <SuggestionItem
                itemDetails={each}
                key={each.id}
                fillText={this.fillText}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
