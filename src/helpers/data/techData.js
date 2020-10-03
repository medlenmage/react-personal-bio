import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getTech = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/technologies.json`)
    .then((response) => {
      const allTech = response.data;
      const myTech = [];

      Object.keys(allTech).forEach((techId) => {
        const tech = allTech[techId];
        tech.id = techId;
        myTech.push(tech);
      });
      resolve(myTech);
    })
    .catch((err) => reject(err));
});

export default { getTech };
