import { Component } from 'react';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem-styled';
import { LargeImage } from './Modal/Modal';

export class ImageGalleryItem extends Component {
    state = {
        modalOpen: false,
    };

    onModalOpen = () => {
        this.setState({ modalOpen: true });
    };

    onModalClose = () => {
        this.setState({ modalOpen: false });
    };

    onToggleModal = () => {

    };



render () {
    const { modalOpen } = this.state;
    const { smallImg, largeImageURL, tags } = this.props;
    return (
    <GalleryItem onClick={this.onModalOpen}>
        <GalleryItemImg src={smallImg} alt={tags} />
        <LargeImage 
        isModalOpen={modalOpen} 
        closeModal={this.onModalClose} 
        largeImage={largeImageURL} 
        tags={tags}/>
    </GalleryItem>
    )
};
};