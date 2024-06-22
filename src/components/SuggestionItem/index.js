// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {itemDetails, fillText} = props
  // console.log(itemDetails)
  const {suggestion} = itemDetails
  // console.log(suggestion)
  const onStatus = () => {
    fillText(suggestion)
    // console.log(id)
  }

  return (
    <li className="Item-container">
      <p className="suggestion-para">{suggestion}</p>
      <button type="button" className="button" onClick={onStatus}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="image"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
