import { Component } from 'react';
import  { toast } from 'react-hot-toast';
import { fetchImg } from '../Api';
import { Searchbar } from './Searchbar/Searchbar';
import { Wrapper } from '../GlobalStyled';

export class App extends Component {
  state = {
    images: [],
    query: '',
    pages: 1,
  };

  componentDidMount () {
  };

  searchImages = newQuery => {
    this.setState({ query: newQuery, })
  };

  onSubmitForm = async () => {
    try {
      const { query, page, images } = this.state;
      this.setState({ images: [] });     

      const initialQuizzes = await fetchImg(query, page);

      if (initialQuizzes.length) {
        this.setState(prevState => {
          return {
            images: initialQuizzes,
            pages: prevState + 1
          }
        })

        console.log(images, initialQuizzes);
      } else {
        toast.error('Oops... Not Founder! Please try again :)');
      }
    }
    catch{}
    finally {}
  }

  render () {
    return (
      <Wrapper>
        <Searchbar onSubmitForm={this.onSubmitForm} onSearchQuery={this.searchImages} />
      </Wrapper>
    );
  };
};
