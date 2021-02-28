import axios from 'axios';
import { useLocation } from 'react-router-dom';

import {
  storiesAPIEndpoint,
  storiesAPIKey,
  storiesAPISPARQLQueryId,
} from '../constants';

export const getStoriesAPIQueryTimeline = async (
  endpoint=storiesAPIEndpoint, apiKey=storiesAPIKey, id=storiesAPISPARQLQueryId,
) => {
  const { data } = await axios.get(`${endpoint}/api/wechanged/${id}/timeline?api-key=${apiKey}`);
  return data;
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
