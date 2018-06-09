import React, {Component} from "react";
import { Link } from "react-router-dom";
import Shelf from './Shelf.js'
import PropTypes from 'prop-types';

class BookWardrobe extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    getShelfBooks: PropTypes.func.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              shelfName='Currently Reading'
              books={this.props.getShelfBooks("currentlyReading")}
              changeBookShelf={this.props.changeBookShelf}
            />

            <Shelf
              shelfName='Want to Read'
              books={this.props.getShelfBooks('wantToRead')}
              changeBookShelf={this.props.changeBookShelf}
            />

            <Shelf
              shelfName='Read'
              books={this.props.getShelfBooks('read')}
              changeBookShelf={this.props.changeBookShelf}
            />

          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookWardrobe
