import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { histropediaBaseURL } from '../constants';

export const formatHistropediaURL = (queryBody) => {
  const q = encodeURI(queryBody);
  return `${histropediaBaseURL}?q=${q}&v=t`;
};

export const getHistropediaURL = async (endpoint, apiKey, id) => {
  const queryBody = await getStoriesAPIQuery(endpoint, apiKey, id);
  return formatHistropediaURL(queryBody);
}

export const getStoriesAPIQuery = async (endpoint, apiKey, id) => {
  const { data: query } = await axios.get(`${endpoint}/api/sparql/${id}?api-key=${apiKey}`);
  return query.body;
}

export const searchURL = (window, query, page) => {
  const path = `/#stories?page=${page || 1}&q=${query || ''}`;
  if (window) {
    const { host, pathname, protocol } = window.location;
    return `${protocol}//${host}${pathname}${path}`
  }
  return path;
};

// A custom hook that builds on useLocation to parse
// the query string for you.
export const useQuery = () => new URLSearchParams(useLocation().search);
