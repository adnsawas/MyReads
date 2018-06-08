import React, {Component} from "react";
import Book from "./Book";
import PropTypes from 'prop-types';

class Shelf extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  changeBookShelf={this.props.changeBookShelf}
                />
              </li>
            )
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
