import { Gallery } from './ImageGallery-styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
    return (
    <Gallery>
        {
            images.map(({id, webformatURL, largeImageURL, tags }) => (
                < ImageGalleryItem key={id} smallImg={webformatURL} largeImage={largeImageURL} tags={tags} />
            ))
        }
    </Gallery>
    )
};