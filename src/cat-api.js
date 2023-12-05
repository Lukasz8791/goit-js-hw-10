import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_eMjAlG5v1kokIiCpQhF2XfDfOCYtaKLjkjpq3FON3ijfVHpHzpf4wbYFeJqHCJrO';

const fetchBreeds = async () => {
  try {
    document.querySelector('.loader').style.display = 'block';
    document.querySelector('.breed-select').style.display = 'none';
    document.querySelector('.cat-info').style.display = 'none';
    document.querySelector('.error').style.display = 'none';

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

    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.breed-select').style.display = 'block';
  } catch (error) {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.error').style.display = 'block';
  }
};

const fetchCatByBreed = async breedId => {
  try {
    document.querySelector('.loader').style.display = 'block';
    document.querySelector('.cat-info').style.display = 'none';
    document.querySelector('.error').style.display = 'none';

    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids = ${breedId}`
    );
    const catInfo = response.data[0];
    console.log(catInfo);

    const catInfoDiv = document.querySelector('.cat-info');
    catInfoDiv.innerHTML = `
    <div class="container" style=" display: flex;
      flex-direction: row;
      gap: 30px;">
    <div class="catInfoImg">
      <img src='${catInfo.url}' alt="Cat Image" />
    </div>
    <div class="catInfoDesc">
      <p><strong>Breed:</strong> ' ${catInfo.breeds[0].name}</p>
        <p><strong>Description:</strong> ${catInfo.breeds[0].description}</p>
        <p><strong>Temperament:</strong> ${catInfo.breeds[0].temperament}</p>
    </div>
    </div>`;

    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.cat-info').style.display = 'block';
  } catch (error) {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.error').style.display = 'block';
  }
};

export { fetchBreeds, fetchCatByBreed };
