import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

document.addEventListener('DOMContentLoaded', () => {
  fetchBreeds()
    .then(breeds => {
      console.log('Breeds:', breeds);
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
    });
});

const breedSelect = document.querySelector('.breed-select');
breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;
  fetchCatByBreed(selectedBreedId)
    .then(catInfo => {
      console.log('Cat info:', catInfo);
    })
    .catch(error => {
      console.error('Error fetching cat info:', error);
    });
});
