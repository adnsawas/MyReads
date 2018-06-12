import React, {Component} from "react"
import ShelfChanger from "./ShelfChanger"
import PropTypes from 'prop-types'


class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  }


  render() {
    let bookCoverStyle = {}


    /* This commented part does generate a new gradient background for books with no thumbnail image.
       This feature was canceled because it disturbs the user experience because every time React renders the page, books colors change which might confuses the user.
       Instead, I have sticked to one color for all books with no thumbnail image

    function newGradient() {
      // Set of gradient colors taken from http://www.colorzilla.com/gradient-editor/
      const gradientColors = [
        'linear-gradient(135deg, rgba(246,248,249,1) 0%,rgba(229,235,238,1) 50%,rgba(215,222,227,1) 51%,rgba(245,247,249,1) 100%)',
        'linear-gradient(135deg, rgba(224,243,250,1) 0%,rgba(216,240,252,1) 50%,rgba(184,226,246,1) 51%,rgba(182,223,253,1) 100%)',
        'linear-gradient(135deg, rgba(248,80,50,1) 0%,rgba(241,111,92,1) 50%,rgba(246,41,12,1) 51%,rgba(240,47,23,1) 71%,rgba(231,56,39,1) 100%)',
        'linear-gradient(135deg, rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%)',
        'linear-gradient(135deg, rgba(252,236,252,1) 0%,rgba(251,166,225,1) 50%,rgba(253,137,215,1) 51%,rgba(255,124,216,1) 100%)',
        'linear-gradient(135deg, rgba(203,96,179,1) 0%,rgba(193,70,161,1) 50%,rgba(168,0,119,1) 51%,rgba(219,54,164,1) 100%)',
        'linear-gradient(135deg, rgba(255,183,107,1) 0%,rgba(255,167,61,1) 50%,rgba(255,124,0,1) 51%,rgba(255,127,4,1) 100%)',
        'linear-gradient(135deg, rgba(252,234,187,1) 0%,rgba(252,205,77,1) 50%,rgba(248,181,0,1) 51%,rgba(251,223,147,1) 100%)',
        'linear-gradient(135deg, rgba(157,213,58,1) 0%,rgba(161,213,79,1) 50%,rgba(128,194,23,1) 51%,rgba(124,188,10,1) 100%)',
        'linear-gradient(135deg, rgba(206,219,233,1) 0%,rgba(170,197,222,1) 17%,rgba(97,153,199,1) 50%,rgba(58,132,195,1) 51%,rgba(65,154,214,1) 59%,rgba(75,184,240,1) 71%,rgba(58,139,194,1) 84%,rgba(38,85,139,1) 100%)',
        'linear-gradient(135deg, rgba(174,188,191,1) 0%,rgba(110,119,116,1) 50%,rgba(10,14,10,1) 51%,rgba(10,8,9,1) 100%)'
      ]

      // Selecting a random gradient every time the newGradient function is called
      return gradientColors[Math.floor(Math.random() * Math.floor(gradientColors.length))]
    }
    */

    // Checking if the book has a thumbnail image
    if ('imageLinks' in this.props.book) {
      bookCoverStyle.backgroundImage = `url(${this.props.book.imageLinks.thumbnail})`
    }
    else {
      // Give a background color for books with no thumbnail images
      //bookCoverStyle.background = newGradient()
      bookCoverStyle.background = 'linear-gradient(135deg, rgba(157,213,58,1) 0%,rgba(161,213,79,1) 50%,rgba(128,194,23,1) 51%,rgba(124,188,10,1) 100%)'
      //bookCoverStyle.border = 'solid 2px black'
    }

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={bookCoverStyle}></div>
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
