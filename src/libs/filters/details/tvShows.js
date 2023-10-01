import { getGenres } from '../../constants/genres.js';
import { reviewsFilter } from './reviews.js';
import { imagesObj, imagesFromList, videosFromList } from './assets.js';
import { seasonDetailsFromList } from './season.js';

export const tvShowBasicDetails = (tvShow, lang) => {
  const {
    id,
    name,
    adult,
    genre_ids,
    tagline,
    overview,
    poster_path,
    backdrop_path,
    first_air_date,
    vote_average,
    media_type,
  } = tvShow;

  const genres = getGenres(genre_ids, 'tv')

  return {
    id,
    title: name,
    adult,
    genres,
    tagline,
    overview,
    ...imagesObj({poster_path, backdrop_path}),
    date: first_air_date,
    votes: vote_average,
    type: media_type,
    url: `http://localhost:1234/api/media/tv/${id}${lang ? '?lang=' + lang : ''}`,
  };
};

export const tvShowExtraDetails = (tvShow, reviews, lang) => {
  const {
    id,
    name,
    adult,
    genres,
    tagline,
    overview,
    images,
    videos,
    first_air_date,
    vote_average,
    seasons,
    status,
  } = tvShow;

  return {
    id,
    title: name,
    adult,
    genres: genres.map((genre) => genre.name),
    tagline,
    overview,
    reviews: reviewsFilter(reviews),
    seasons: seasonDetailsFromList(seasons, id, lang),
    images: {
      posters: imagesFromList(images.posters),
      backdrops: imagesFromList(images.backdrops),
    },
    videos: videosFromList(videos.results),
    date: first_air_date,
    status,
    votes: vote_average,
  };
};
