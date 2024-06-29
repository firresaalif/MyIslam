import axios from 'axios';
import { customFetchAllCity, customFetchGeolocation, customFetchJadwal } from '../utils/axios';

export const locationThunk = async (lokasi, thunkAPI) => {
  try {
    const resp = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lokasi.lat}&longitude=${lokasi.longt}&localitiLanguage=en`);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};  
export const jadwalThunk = async (lokasi, thunkAPI) => {
  try {
    const resp = await customFetchJadwal.get('', {
      params: {
        city: lokasi,
        country: 'Indonesia',
        method: 2, // Metode perhitungan
      },
    });

    return resp.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
export const geoLocationThunk = async (lokasi, thunkAPI) => {
  try {
    const resp = await customFetchGeolocation(`${lokasi.replace('-', '').replace(' ', '')}?`);

    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};

export const allCityThunk = async (state, thunkAPI) => {
  try {
    const resp = await customFetchAllCity();

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
