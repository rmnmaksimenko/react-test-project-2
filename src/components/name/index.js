import { Component } from 'react';
import ErrorMessage from './errorView';
import PokemonDataView from './dataView';

export default class TextInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.info;
    const thisName = this.props.info;
    if (prevName !== thisName) {
      console.log('Изменилось имя');
      this.setState({ status: 'pending' });
      fetch(`https://pokeapi.co/api/v2/pokemon/${thisName.toLowerCase()}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error(`Нет покемона с именем ${thisName}`));
        })
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <h1>Введите имя Покемона</h1>;
    }

    if (status === 'pending') {
      return <h1>Загружаем...</h1>;
    }

    if (status === 'rejected') {
      return <ErrorMessage message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
