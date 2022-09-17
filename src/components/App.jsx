import 'index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Component } from 'react';
import { Form } from './form';
import TextInfo from './name';
import { Container } from './app.styled';

export class App extends Component {
  state = {
    text: '',
  };

  handleSubmit = submitText => {
    this.setState({ text: submitText });
  };
  render() {
    return (
      <Container>
        <Form onTextTranslate={this.handleSubmit} />
        <TextInfo info={this.state.text} />
        <ToastContainer />
      </Container>
    );
  }
}
