import React, {Component} from "react"
import { Link, Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from "./Search";
import BookWardrobe from "./BookWardrobe";

class BooksApp extends Component {

  state = {
    books: [],
    searchBooks: []
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks() {
    BooksAPI.getAll().then((fetchedBooks) => {
      this.setState({books: fetchedBooks})
    })
  }

  getShelfBooks = (shelfName) => {
        return this.state.books.filter((b) => b.shelf === shelfName)
    }

  changeBookShelf = (book, newShelfName) => {
    // Update the database
    BooksAPI.update(book, newShelfName).then(() => {
      book.shelf = newShelfName
    })
  }

  searchBooks() {

  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <BookWardrobe
            books={this.state.books}
            getShelfBooks={this.getShelfBooks}
            changeBookShelf={this.changeBookShelf}/>
        )}/>

        <Route path='/search' render={({history}) => (
          <Search/>
        )}/>
      </div>
    )
  }

}

export default BooksApp
