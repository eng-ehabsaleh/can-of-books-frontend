import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import AddBook from "./AddBook";
import UpdateBook from './UpdateBook';
class BestBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      booksData: [],
      newBook:{},
      showModal: false,
      showErrMs: false,
      errMssg: " the book collection is empty.😞",
      showAddBookModal: false,
      showUpdateModal: false,
    };
  }
  handelDisplayAddModal = () => {
    this.setState({ showAddBookModal: !this.state.showAddBookModal });
    console.log(this.state.showAddBookModal);
  };
  handelAddBook = (e) => {
    e.preventDefault();
    const reqBody = {
      email: e.target.email.value,
      title: e.target.bookTilte.value,
      description: e.target.bookDescription.value,
      img: e.target.bookImage.value,
    };

    axios
      .post(`${process.env.REACT_APP_API_UR}/books`, reqBody)
      .then((createdBookObject) => {
        this.state.booksData.push(createdBookObject.data);
        this.setState({ booksData: this.state.booksData });
        this.handelDisplayAddModal();
      })
      .catch(() => alert("the book was not added"));
  };

  handelUpdateModal = (e) => {
    e.preventDefault();

    const reqBody = {
   email: e.target.email.value,
      title: e.target.bookTilte.value,
      description: e.target.bookDescription.value,
      img: e.target.bookImage.value,
    
    };


    axios.put(`${process.env.REACT_APP_API_UR}/books/${this.state.newBook._id}`, reqBody).then(updatedBookObject => {


      const updateBookArr = this.state.booksData.map(books => {

        if (books._id === this.state.newBook._id) {
          books = updatedBookObject.data

          return books;
        }

        return books; // we add this to make sure that we dont get undefined values when we dont find a match 

      });

      this.setState({
        booksData: updateBookArr,
        newBook: {}
      })



      this.handelDisplayUpdateModal(); // hide the update modal

    }).catch(() => alert("Something went wrong!"));
  }

  handelDisplayUpdateModal = (BookObj) => {
    this.setState({
      showUpdateModal: !this.state.showUpdateModal,
      newBook: BookObj
    });
  }


  handelDeleteBook = (bookId) => {
    axios
      .delete(`${process.env.REACT_APP_API_UR}/books/${bookId}`)
      .then((deleteResponse) => {
        if (deleteResponse.data.deletedCount === 1) {
          const newBookArr = this.state.booksData.filter(
            (book) => book._id !== bookId
          );

          this.setState({ booksData: newBookArr });
        }
      })
      .catch(() => alert("The Book was not deleted"));
  };



  componentDidMount = () => {
    console.log("React", process.env.REACT_APP_API_UR);
    axios
      .get(`${process.env.REACT_APP_API_UR}/books`)
      .then((bookeRes) => {
        this.setState({
          booksData: bookeRes.data,
          showErrMs: false,
        });
      })
      .catch((err) => {
        this.setState({ showErrMs: true });
      });
  };

  render() {
    return (
      <div>
        {this.state.showErrMs && (
          <Alert variant="dark">{this.state.errMssg}</Alert>
        )}
        <Button onClick={this.handelDisplayAddModal}>Add A Book</Button>
        {this.state.showAddBookModal && (
          <AddBook
            showAddBookModal={this.state.showAddBookModal}
            handelDisplayAddModal={this.handelDisplayAddModal}
            handelAddBook={this.handelAddBook}
          />
        )}

{
          this.state.showUpdateModal &&
          <>
            <UpdateBook
              show={this.state.showUpdateModal}
              handelUpdateModal={this.handelUpdateModal}
              handelDisplayUpdateModal={this.handelDisplayUpdateModal}
              newBook={this.state.newBook}
            />
          </>
        }


        {this.state.booksData.length > 0 && (
          <>
            {this.state.booksData.map((book) => {
              return (
                <>


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={book.img} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>
    {book.description}
    </Card.Text>
    <Button
                      variant="danger"
                      onClick={() => this.handelDeleteBook(book._id)}
                    >
                      Delete The Book
                    </Button>
                    
                    <Button variant="warning" onClick={() => this.handelDisplayUpdateModal(book)}>Update Book</Button>

  </Card.Body>
</Card>
{/* 
                  <Carousel>
                  
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={book.img}

                      />
                      <Carousel.Caption>
                        <h3>{book.title}</h3>
                        <p>{book.description}</p>
                      </Carousel.Caption>
                      <Button
                      variant="danger"
                      onClick={() => this.handelDeleteBook(book._id)}
                    >
                      Delete The Book
                    </Button>
                    
                    <Button variant="warning" onClick={() => this.handelDisplayUpdateModal(book)}>Update Book</Button>

                    </Carousel.Item>
                   
                    <Button
                      variant="danger"
                      onClick={() => this.handelDeleteBook(book._id)}
                    >
                      Delete The Book
                    </Button>
                    
                    <Button variant="warning" onClick={() => this.handelDisplayUpdateModal(book)}>Update Book</Button>

                  </Carousel> */}
                </>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default BestBooks;
