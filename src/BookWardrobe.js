import React, {Component} from "react";
import { Link, Route } from "react-router-dom";
import Shelf from './Shelf.js'
import PropTypes from 'prop-types';

class BookWardrobe extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf />
            <Shelf />
            <Shelf />
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
