import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export class Form extends Component {
  state = {
    text: '',
    currentText: '',
  };

  handleValueChange = e => {
    this.setState({ text: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text.trim() === '') {
      toast.warn('🦄 Окно поиска не должно быть пустым', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }
    this.props.onTextTranslate(this.state.text);
    // this.setState({ currentText: this.state.text });
    this.setState({ text: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleValueChange}
          />
          <button type="submit">Принять</button>
        </form>
      </div>
    );
  }
}
