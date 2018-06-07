import React, {Component} from "react";
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger.js'


class Shelf extends Component {
  static propTypes = {}


  render() {
    return (
      <div className="book-shelf-changer">
        <select>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}


export default ShelfChanger
