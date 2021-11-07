import axios from 'axios';

const userDiv = document.querySelector('.user');

const baseEndpoint = 'https://www.boardgamegeek.com/xmlapi2/';
const proxy = `https://cors-anywhere.herokuapp.com/`;

export function showUser(data) {
  console.log(data);
  const userData = data.getElementsByTagName('firstname');
  const firstName = userData[0].attributes.value.value;
  const lastName = data.getElementsByTagName('lastname')[0].attributes.value
    .value;
  const userNameElement = document.createElement('p');
  const userName = document.createTextNode(`${firstName} ${lastName}`);
  userDiv.appendChild(userName);
}

export async function xmlRequest() {
  axios.create({
    baseURL: `https://cors-anywhere.herokuapp.com/https://www.boardgamegeek.com/xmlapi2/user?name=kernowekya`,
    timeout: 1000,
  });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://www.boardgamegeek.com/xmlapi2/user?name=kernowekya`
    )
    .then(xml => {
      const doc = new DOMParser().parseFromString(xml.data, 'text/xml');
      showUser(doc);
    });
}

xmlRequest();
