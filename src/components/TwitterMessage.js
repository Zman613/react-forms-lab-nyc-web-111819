import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  messageHandler = (e) => {
    this.setState({message: e.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.messageHandler} value={this.state.message} />
        <p>You have {this.props.maxChars - this.state.message.length} characters left. Message: {this.state.message}</p>
      </div>
    );
  }
}

export default TwitterMessage;
