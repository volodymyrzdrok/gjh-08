import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refListGallery = document.querySelector('.gallery');

refListGallery.insertAdjacentHTML('beforeend', createMarkupList(galleryItems));

function createMarkupList(arr) {
  return arr
    .map(
      ({ description, original, preview }) =>
        `   <li class="gallery__item"><a href=${original} class="gallery__item"><img src=${preview} alt=${description} class="gallery__image"></a></li>`
    )
    .join('');
}
const galleryModalEfect = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
