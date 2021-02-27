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

export const executeStoriesAPIQuery = async (endpoint, apiKey, id) => {
  const { data } = await axios.get(`${endpoint}/api/sparql/${id}/execute?api-key=${apiKey}`);
  const { results } = data;
  return results.bindings;
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

const parseISOString = (s) => {
  const b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
};

const bindingToTimeline = ({
  dob, image, item, itemLabel
}, index) => {
  const qid = item.value.substr(31); // TODO: hacky substring
  const date = parseISOString(dob.value);
  return {
    id: `${index}_${qid}`,
    title: itemLabel.value,
    subtitle: qid,
    from: {
      year: date.getFullYear(),
      month: date.getMonth()+1,
      day: date.getDay()+1,
    //  TODO: handle precision

    },
    imageUrl: image ? image.value : undefined,
  }
};

export const queryToHistropedia = async (endpoint, apiKey, id) => {
  const bindings = await executeStoriesAPIQuery(endpoint, apiKey, id);
  return bindings.map(bindingToTimeline);
};
