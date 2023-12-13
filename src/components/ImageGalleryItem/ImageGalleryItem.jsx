import { GalleryItem, GalleryItemImg } from './ImageGalleryItem-styled';

export const ImageGalleryItem = ({ smallImg, largeImage, tags }) => {
    return (
    <GalleryItem>
        <GalleryItemImg src={smallImg} alt={tags} />
    </GalleryItem>
    )
};