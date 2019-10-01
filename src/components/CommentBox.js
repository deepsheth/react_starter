import React, { Component } from "react";
import styled from 'styled-components'

export default class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Leave a comment</h2>
        <Input
          value={this.state.comment}
          onChange={this.handleChange}
        ></Input>
        <div>
          <Button type="submit">Add Comment</Button>
        </div>
      </form>
    );
  }
}

const Input = styled.input`
  border: 2px solid black;
  font-size: 1.25em;
  height: 1.25em;
  margin-bottom: 1em;
`

const Button = styled.button`
  background: mediumslateblue;
  color: white;
  border: none;
  padding: 1em;
  border-radius: 10px;
`;
