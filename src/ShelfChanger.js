import React, {Component} from "react"
import PropTypes from 'prop-types'


class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  }

  state = {
    currentShelf: this.props.book.shelf
  }

  changeShelf = (event) => {
    this.props.changeBookShelf(this.props.book, event.target.value)
    this.setState({currentShelf: event.target.value})
  }


  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.currentShelf} onChange={this.changeShelf}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="None">None</option>
        </select>
      </div>
    )
  }
}


export default ShelfChanger
