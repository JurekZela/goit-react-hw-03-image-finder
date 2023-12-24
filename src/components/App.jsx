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

  searchImages = newQuery => this.setState({ query: newQuery, });

  onSubmit = async () => {
    try {
      this.setState({ loading: true, error: false });
      const { query, pages, images } = this.state;
       
     if (images) {
      this.setState({ images: [],  pages: 1 }); 
     }    

      const initialQuizzes = await fetchImg(query, pages);
      
      if (initialQuizzes) {
        this.setState(prevState => {
          return {
            images: initialQuizzes,
            pages: prevState.pages + 1
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

  onClickLoadMore = async () => {
    try {
      const { query, pages } = this.state;

      this.setState({error: false});

      const newMoreQuizzes =  await fetchImg(query, pages);

      this.setState(prevState => {
         return { 
          images: [...prevState.images, ...newMoreQuizzes],
          pages: prevState.pages + 1 
        }
      })
    } catch {this.setState({ error: true });}
  };

  render () {
    const { loading, images, error } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.onSubmit} onChange={e => this.searchImages(e.target.value)} />
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