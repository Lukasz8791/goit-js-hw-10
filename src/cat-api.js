import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_eMjAlG5v1kokIiCpQhF2XfDfOCYtaKLjkjpq3FON3ijfVHpHzpf4wbYFeJqHCJrO';

const fetchBreeds = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const loader = document.querySelector('.loader');
      const breedSelect = document.querySelector('.breed-select');
      const catInfo = document.querySelector('.cat-info');
      const error = document.querySelector('.error');

      loader.style.display = 'block';
      breedSelect.style.display = 'none';
      catInfo.style.display = 'none';
      error.style.display = 'none';

      const response = await axios.get('https://api.thecatapi.com/v1/breeds');
      const breeds = response.data;

      const select = document.querySelector('.breed-select');
      select.innerHTML = '';
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.text = breed.name;
        select.appendChild(option);
      });

      loader.style.display = 'none';
      breedSelect.style.display = 'block';

      resolve(breeds);
    } catch (error) {
      handleFetchError();
      reject(error);
    }
  });
};

const fetchCatByBreed = breedId => {
  return new Promise(async (resolve, reject) => {
    try {
      const loader = document.querySelector('.loader');
      const catInfo = document.querySelector('.cat-info');
      const error = document.querySelector('.error');

      loader.style.display = 'block';
      catInfo.style.display = 'none';
      error.style.display = 'none';

      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
      );
      const catInfoData = response.data[0];

      const catInfoDiv = document.querySelector('.cat-info');
      catInfoDiv.innerHTML = `
        <div class="container" style=" display: flex;
          flex-direction: row;
          gap: 30px;">
          <div class="catInfoImg">
            <img src='${catInfoData.url}' alt="Cat Image" />
          </div>
          <div class="catInfoDesc">
            <p><strong>Breed:</strong> ${catInfoData.breeds[0].name}</p>
            <p><strong>Description:</strong> ${catInfoData.breeds[0].description}</p>
            <p><strong>Temperament:</strong> ${catInfoData.breeds[0].temperament}</p>
          </div>
        </div>`;

      loader.style.display = 'none';
      catInfo.style.display = 'block';

      resolve(catInfoData);
    } catch (error) {
      handleFetchError();
      reject(error);
    }
  });
};

const handleFetchError = () => {
  const loader = document.querySelector('.loader');
  const error = document.querySelector('.error');

  loader.style.display = 'none';
  error.style.display = 'block';
};

export { fetchBreeds, fetchCatByBreed };
