import React, {Component} from "react"
import ShelfChanger from "./ShelfChanger"
import PropTypes from 'prop-types'


class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  }


  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
          <ShelfChanger
            book={this.props.book}
            changeBookShelf={this.props.changeBookShelf}
          />
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book
