import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getMyProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((res) => {
      const allProjects = res.data;
      const myProjects = [];

      Object.keys(allProjects).forEach((projectId) => {
        const project = allProjects[projectId];
        project.id = projectId;
        myProjects.push(project);
      });
      resolve(myProjects);
    })
    .catch((err) => reject(err));
});

export default getMyProjects;
