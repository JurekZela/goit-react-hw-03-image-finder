import { Component } from 'react';
import { fetchImg } from '../Api';
import { Searchbar } from './Searchbar/Searchbar';
import { Wrapper } from '../GlobalStyled';

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
      <Wrapper>
        <Searchbar />
      </Wrapper>
    );
  };
};
