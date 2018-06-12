import React, {Component} from "react"
import { Route, Switch } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from "./Search";
import BookWardrobe from "./BookWardrobe";

// This component is dispayed when the user inserts a wrong path. It is like a 404 error page!
const noMatch = ({location}) => (
  <div>
    <h1>404: Sorry, this page <code>{location.pathname}</code> does not exist :(</h1>
  </div>
)

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
        return this.state.books.filter((book) => book.shelf === shelfName)
    }

  changeBookShelf = (bookChangingShelf, newShelfName) => {
    // Update the database
    BooksAPI.update(bookChangingShelf, newShelfName).then((data) => {
      bookChangingShelf.shelf = newShelfName
      // Remove the book that has changed its shelf and append it again to the books array.
      // This is done using this.setState() to make sure everything renders and the book appears in the right shelf
      this.setState(state => ({
        books: state.books.filter(book => book.id !== bookChangingShelf.id).concat([ bookChangingShelf ])
      }))
    })
  }

  searchBooks = (searchText) => {
    if (searchText) {
      BooksAPI.search(searchText).then((booksReuslt) => {
        if (booksReuslt.length > 0) {
          // Add shelf names to every book in the query result
          booksReuslt.forEach((book) => {
            let matchingBookInShelves = this.state.books.find(bookInShlef => bookInShlef.id === book.id)
            if (matchingBookInShelves) {
              book.shelf = matchingBookInShelves.shelf
            } else {
              book.shelf = 'None'
            }
          })

          // Update the searchBooks in state to be passed to search component
          this.setState({searchBooks: booksReuslt})
        }
        else {
          // Hide all books if the number of books returned is 0
          this.setState({searchBooks: []})
        }

      }).catch(function() {
        // Hide all books if an error occured during fetching
        this.setState({searchBooks: []})
      })
    }
    else {
      // Hide all books if the search field is empty
      this.setState({searchBooks: []})
    }
  }

  render() {
    return (
      <div className='app'>
      <Switch>
        <Route exact path='/' render={() => (
          <BookWardrobe
            books={this.state.books}
            getShelfBooks={this.getShelfBooks}
            changeBookShelf={this.changeBookShelf}/>
        )}/>

        <Route path='/search' render={({history}) => (
          <Search
            books={this.state.searchBooks}
            changeBookShelf={this.changeBookShelf}
            searchBooks={this.searchBooks}
          />
        )}/>

        <Route component={noMatch} />
      </Switch>
      </div>
    )
  }

}

export default BooksApp
