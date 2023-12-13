import { Component } from 'react';
import  { toast } from 'react-hot-toast';
import { fetchImg } from '../Api';
import { Searchbar } from './Searchbar/Searchbar';
import { Wrapper } from '../GlobalStyled';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
    query: '',
    pages: 1,
    error:  false,
    loading: false,
  };

  componentDidMount () {
  };

  searchImages = newQuery => this.setState({ query: newQuery, });

  onSubmit = async () => {
    try {
      this.setState({ loading: true, })
      const { query, page, images } = this.state;
       
     if (images) {
      this.setState({ images: [],  pages: 1 }); 
     }    

      const initialQuizzes = await fetchImg(query, page);
      console.log(initialQuizzes);
      if (initialQuizzes) {
        this.setState(prevState => {
          return {
            images: initialQuizzes,
            pages: prevState + 1
          }
        })
      } else {
        toast.error('Oops... Not Founder! Please try again :)');
      }

     
    }
    catch{
      this.setState({ error: true });
    }
    finally {this.setState({ loading: false, })}
  }

  render () {
    const { loading, images } = this.state;
    return (
      <Wrapper>
        <Searchbar onSubmit={this.onSubmit} onChange={e => this.searchImages(e.target.value)} />
        {loading && <b>Loader</b>}
       {images.length > 0 &&  <ImageGallery images={images}/>}
      </Wrapper>
    );
  };
};
