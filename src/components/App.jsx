import { Component } from 'react';
import  { toast } from 'react-hot-toast';
import { RotatingTriangles } from 'react-loader-spinner'
import { fetchImg } from '../Api';
import { Searchbar } from './Searchbar/Searchbar';
import { Wrapper } from '../GlobalStyled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

const Loader = <RotatingTriangles
visible={true}
height="80"
width="80"
ariaLabel="rotating-triangels-loading"
wrapperStyle={{}}
wrapperClass="rotating-triangels-wrapper"
/>

export class App extends Component {
  state = {
    images: [],
    query: '',
    pages: 1,
    error:  false,
    loading: false,
  };

 async componentDidUpdate(prevProps, prevState) {
    const { query, pages } = this.state;

    if (prevState.query !== query || prevState.pages !== pages) {
      this.loadingResults()
    }
  };

  searchImages = newQuery => this.setState({ query: `${Date.now()}/${newQuery}`, pages: 1, images: [] });

  loadingResults = async () => {
    const { pages, query } = this.state;

    try {
      this.setState({ loading: true });
      const initialQuizzes = await fetchImg(query, pages);

      if (initialQuizzes.length) {
        this.setState( prevState => (
          {
            images: pages > 1 ? [...prevState.images, ...initialQuizzes] : initialQuizzes,
          }
        ))
      }

    } catch (error) {
      console.log(error);
    }
    finally { this.setState({ loading: false, }); }
  };

  handleSubmit = e => {
    e.preventDefault();

    if (e.target.elements[1].value.trim() === '') {
      return toast.error('Not a Value!');
    };

    this.searchImages(e.target.elements[1].value);

    e.target.reset();
  }; 

  onClickLoadMore = () => {
      this.setState(prevState => ({ 
        pages: prevState.pages + 1 
      }))
  };

  render () {
    const { loading, images, error } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSubmit} />
        {error && <b>OOPS! Something went wrong! Please try reloading this page :-) </b>}
        {loading && Loader}
       {images.length > 0 && 
       <>
       <ImageGallery images={images}/>
       <Button onClick={this.onClickLoadMore}/>
       </>}
      </Wrapper>
    );
  };
};