import { Component } from 'react';
//loader
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
//gallery ul
import ImageGallery from '../ImageGallery';
//gallery li
import ImageGalleryItem from '../ImageGalleryItem';
//api
import { PixabayFetch } from '../../service/pixabay';
//btn
import Button from '../Button';
//modal
import Modal from '../Modal';
import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23189092-912e167e41c5e7d499821c37e';
const newPixabayFetch = new PixabayFetch(BASE_URL, API_KEY);

class ImagesList extends Component {
  state = {
    searchResults: [],
    status: 'idle',
    largeImageId: null,
    isModalOpen: false,
  };
  static propTypes = {
    searchValue: PropTypes.string.isRequired,
  };
  componentDidUpdate(prevProps, prevState) {
    const { searchValue } = this.props;
    if (prevProps.searchValue !== searchValue) {
      console.log('get fetsch');
      this.setState({ status: 'pending' });
      newPixabayFetch.resetPage();
      newPixabayFetch.searchQuery = searchValue;
      newPixabayFetch
        .searchPhotos()
        .then(searchResults => {
          this.setState({ searchResults, status: 'resolved' });
        })
        .catch(err => {
          console.log(err);
          this.setState({ status: 'rejected' });
        });
    }
  }
  handleClick = () => {
    newPixabayFetch.page = 1;
    newPixabayFetch
      .searchPhotos()
      .then(searchResults => {
        this.setState(prev => ({
          searchResults: [...prev.searchResults, ...searchResults],
          status: 'resolved',
        }));
      })
      .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ status: 'rejected' });
      });
  };

  //find img for modal
  findImg = () => {
    const { searchResults, largeImageId } = this.state;
    const largeImg = searchResults.find(searchResults => {
      return searchResults.id === largeImageId;
    });
    return largeImg;
  };
  openModal = e => {
    this.setState({
      isModalOpen: true,
      largeImageId: Number(e.currentTarget.id),
    });
  };
  closeModal = () => this.setState({ isModalOpen: false });
  //

  render() {
    const { searchResults, largeImageId, isModalOpen, status } = this.state;
    const { openModal, handleClick, findImg } = this;

    const paramLoadMore =
      searchResults.length > 0 && searchResults.length >= 12;

    if (status === 'idle') {
      return (
        <div className="container-title">
          <p>You can find any pictures, photos and images here</p>
        </div>
      );
    }
    if (status === 'pending') {
      return (
        <div className="loader">
          <Loader
            type="MutatingDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      );
    }
    if (status === 'rejected') {
      return (
        <div className="container-title">
          <p>Uppps, error</p>
        </div>
      );
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGallery>
            {searchResults.length > 0 && (
              <ImageGalleryItem
                openModal={openModal}
                searchResults={searchResults}
              />
            )}
          </ImageGallery>
          {paramLoadMore > 0 && <Button onClick={handleClick} />}
          {searchResults.length === 0 && (
            <div className="container-title">
              <p>Sorry, we did not find this</p>
            </div>
          )}
          {isModalOpen && (
            <Modal largeImageId={largeImageId} onClose={this.closeModal}>
              <img src={findImg().largeImageURL} alt={findImg().tags} />
            </Modal>
          )}
        </>
      );
    }
  }
}
export default ImagesList;
