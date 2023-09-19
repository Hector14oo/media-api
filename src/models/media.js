import { options } from '../config.js';
import {
  extPropsFromList,
  extProps,
  urlConstructor,
} from '../libs/helpers.js';

export class Media {
  static getSearch = async ({ search, lang = 'en-US', page = 1 }) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${search}&language=${lang}&page=${page}`,
      options
    );
    const data = await response.json(response);
    return extPropsFromList(data);
  };

  static getTrending = async (timeWindow = 'week') => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/${timeWindow}?`,
      options
    );
    const data = await response.json();
    return extPropsFromList(data);
  };

  static getMediaDetails = async ({ lang, id, mediaType }) => {
    const url = urlConstructor({ lang, id, mediaType });

    const response = await fetch(url, options);
    const data = await response.json();
    return extProps(data);
  };
}
