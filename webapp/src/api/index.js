import axios from 'axios';

const BASE_URL = '/api';
const HTTPS = axios.create({ baseURL: BASE_URL });

HTTPS.interceptors.request.use(config => ({
    ...config,
    headers: {
      ...config.headers,
      /*eslint-disable */
      csrf: CSRF_TOKEN,
      /* eslint-enable */
    },
  }), error => Promise.reject(error));

