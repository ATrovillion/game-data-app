import axios from 'axios';
import xml2json from 'xml2json';

const userDiv = document.querySelector('.user');

const baseEndpoint = 'https://www.boardgamegeek.com/xmlapi2/';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const query = `user?name=kernowekya`;

export async function xmlRequest() {
  axios.create({
    baseURL: `${proxy}${baseEndpoint}${query}`,
    timeout: 1000,
  });
  axios.get(`${baseEndpoint}${query}`).then(xml => console.log(xml));
}

xmlRequest();
