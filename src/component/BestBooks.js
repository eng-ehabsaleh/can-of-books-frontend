import React, { Component } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Alert from "react-bootstrap/Alert";
import BookFormModal from "./BookFormModal";
require("dotenv").config();





class BestBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      booksData: [],
      newBook:{},
      showModal: false,
      showErrMs: false,
      errMssg: " the book collection is empty.😞",
    };
  }

  updateModal=()=>{
    this.setState({
      showModal:!this.state.showModal,
    });
  }

  getBookDataFromForm=(event)=>{
    event.preventDefault();
    
    const dataBook = {
      name: event.target.name.value,
      description: event.target.description.value,
      status:event.target.status.value,
      email:event.target.email.value,
      img:event.target.img.value
    }
   
    
    axios.post(`${process.env.REACT_APP_API_UR}`,dataBook).then((result)=>{
      this.setState({
        booksData:result.data,
        
      })

    });
console.log(dataBook);
  }
 
  componentDidMount = () => {
    console.log( "React",process.env.REACT_APP_BOOKS)
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
  <BookFormModal updatBook={this.updateModal}  flag={this.state.showModal}
            bookInfo={this.getBookDataFromForm}/>

        {
        this.state.booksData.length > 0 && (
          <>
            {this.state.booksData.map((book) => {
              return (
                <>
            
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                     src={book.img}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>{book.title}</h3>
                        <p>{book.description}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={book.img}
                        alt="Second slide"
                      />

                      <Carousel.Caption>
                        <h3>{book.title}</h3>
                        <p>{book.description}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={book.img}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>{book.title}</h3>
                        <p>{book.description}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
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
