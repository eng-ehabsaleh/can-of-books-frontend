import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
class UpdateBook extends Component {
  render() {
    return (
      <div>
        
        <Modal show={this.props.show} onHide={this.props.handelDisplayUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Book</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.handelUpdateModal}>
              <Form.Group className="mb-3">
                <Form.Label>email adress</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Book Tiltl</Form.Label>
                <Form.Control
                  type="text"
                  name="bookTilte"
                  placeholder="Enter Book Name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Book Description</Form.Label>
                <Form.Control
                  type="text"
                  name="bookDescription"
                  placeholder="Enter Book Description"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Book Image</Form.Label>
                <Form.Control
                  type="text"
                  name="bookImage"
                  placeholder="Enter Book Image"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                UpdateBook
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default UpdateBook;
