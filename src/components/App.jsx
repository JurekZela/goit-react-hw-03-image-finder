import { Component } from 'react';
import { fetchImg } from '../Api';

export class App extends Component {
  state = {
    images: [],
    pages: 1,
  };

  componentDidMount () {
    const { pages } = this.state;
    console.log(fetchImg('dog', pages));
  };

  render () {
    return (
      <div>
      </div>
    );
  };
};
