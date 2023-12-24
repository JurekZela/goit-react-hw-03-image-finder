import  { Component }  from 'react';
import { Gallery } from './ImageGallery-styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
    render () {
        const { images } = this.props;
        return (
            <Gallery>
                {
                    images.map(({id, webformatURL, largeImageURL, tags }) => (
                        < ImageGalleryItem key={id} smallImg={webformatURL} largeImageURL={largeImageURL} tags={tags} />
                    ))
                }
            </Gallery>
            )
    }
};