import React, { Component } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Alert from "react-bootstrap/Alert";

class BestBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      booksData: [],
      showErrMs: false,
      errMssg: " the book collection is empty.😞",
    };
  }

  componentDidMount = () => {
    axios
      .get(`${process.env.REAC_APP_BOOKS}/books`)
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
        {this.state.booksData.length > 0 && (
          <>
            {this.state.booksData.map((book) => {
              return (
                <>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        // src={}
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
                        src="holder.js/800x400?text=Second slide&bg=282c34"
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
                        src="holder.js/800x400?text=Third slide&bg=20232a"
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
