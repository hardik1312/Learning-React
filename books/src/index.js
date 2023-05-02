import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BookList} from './BookList'
import Books from './Books'

function BookSite(){
  return <section className='bookList'>
    {BookList.map((book)=> {
      const {images,title,author} = book;
      // return (<Books key={book.id} book={book}></Books>)
      return (<Books key={book.id} {...book}></Books>)
    })}
  </section>
  
}

ReactDOM.render(<BookSite/>,document.getElementById('root'))