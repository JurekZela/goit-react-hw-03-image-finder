import Modal from 'react-modal';
 
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    maxWidth: 'calc (100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    overflow: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },
  };

  Modal.setAppElement('#root');

export const LargeImage = ({ isModalOpen, closeModal, largeImage }) => {
    return (
<Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  style={customStyles}
  contentLabel="Example Modal"
  >
    <img src={largeImage} alt="largePhoto" />
</Modal>
  );
};