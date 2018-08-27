import axios     from 'axios';
import constants from '../../config/global';

const client = axios.create({
  baseURL: constants.endpoint,
  headers: {'Authorization': `Bearer ${ constants.token }`}
});

const request = function(options) {
  const onSuccess = function(response) {
    return response.data;
  }

  const onError = function(error) {

    if (error.response) {

      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);

    } else {

      console.error('Error Message:', error.message);

    }

    return Promise.reject(error.response || error.message);
  }

  return client(options)
            .then(onSuccess)
            .catch(onError);
}

export default request;
