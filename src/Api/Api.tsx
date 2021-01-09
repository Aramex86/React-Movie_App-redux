import axios from 'axios';

// const instance  = axios.create({
//     baseUrl:'https://api.themoviedb.org',
//     headers: {
//         "API-KEY": "647b39ccfb59105c511c2df9019bc7ec",
//       },
// });

//api_key TMDb = 647b39ccfb59105c511c2df9019bc7ec; -> apikey
//https://cors-anywhere.herokuapp.com/ ->corsanywhere
//https://api.themoviedb.org/4/list/1?page=1&api_key=647b39ccfb59105c511c2df9019bc7ec&sort_by=title.asc";
const api_key = '647b39ccfb59105c511c2df9019bc7ec';
//https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg

export const getMoviesApi = {
  getMovies() {
    return axios
      .get(
        ` https://api.themoviedb.org/4/list/1?page=1&api_key=${api_key}&sort_by=title.asc`
      )
      .then((res: any) => {
        return res.data.results;
      });
  },
  getCast(movieId: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`
      )
      .then((res) => {
        return res.data;
      });
  },
  getGenre() {
    return axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`
      )
      .then((res) => {
        return res.data.genres;
      });
  },
  getDetails(movieId: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`
      )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        if (error.response) {
          return error.response.data.status_message;
        }
      });
  },
  getReviews(movieId: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${api_key}&language=en-US&page=1`
      )
      .then((res) => {
        return res.data.results;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          return error.response.data.status_message;
        }
      });
  },
  getVideos(movieId: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}&language=en-US`
      )
      .then((res) => {
        //console.log(res.data.results);
        return res.data.results;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          return error.response.data.status_message;
        }
      });
  },
  getRecomand(movieId: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${api_key}&language=en-US&page=1`
      )
      .then((res) => {
        return res.data.results;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          return error.response.data.status_message;
        }
      });
  },
  getKeywords(movieId: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${api_key}`
      )
      .then((res) => {
        return res.data.keywords;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          return error.response.data.status_message;
        }
      });
  },
};

// People
export const getPeopleApi = {
  getDetails(personId: string) {
    return axios
      .get(
        `https://api.themoviedb.org/3/person/${personId}?api_key=${api_key}&language=en-US`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        if (err.response) {
          return err.response.data.status_message;
        }
      });
  },
  getCombinedCreditsCast(personId: string) {
    return axios
      .get(
        `https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${api_key}&language=en-US`
      )
      .then((res) => {
        return res.data.cast;
      })
      .catch((err) => {
        if (err.response) {
          return err.response.data.status_message;
        }
      });
  },
  getCombinedCreditsCrew(personId: string) {
    return axios
      .get(
        `https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=${api_key}&language=en-US`
      )
      .then((res) => {
        return res.data.crew;
      })
      .catch((err) => {
        if (err.response) {
          return err.response.data.status_message;
        }
      });
  },
  getExternalId(personId: string) {
    return axios
      .get(
        `https://api.themoviedb.org/3/person/${personId}/external_ids?api_key=${api_key}&language=en-US`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
  getPopular(currentPage: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/person/popular?api_key=${api_key}&language=en-US&page=${currentPage}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
};

//Home Page

export const getHomePgeApi = {
  getPopular(currentPage: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${currentPage}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
 
  getNowPlaying(currentPage: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=${currentPage}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
  getNowTvPlaying(currentPage: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=${currentPage}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
  geAiringTodayTv(currentPage: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}&language=en-US&page=${currentPage}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
  getOnTv(currentPage: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}&language=en-US&page=${currentPage}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
  getTopRatedTv(currentPage: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=${currentPage}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },

  getTraidings(value: string) {
    return axios
      .get(
        `https://api.themoviedb.org/3/trending/all/${value}?api_key=${api_key}`
      )
      .then((res) => {
        return res.data.results;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
  getUpcomming(currentPage: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=${currentPage}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err.response.data.status_message);
        return err.response.data.status_message;
      });
  },
  getTopRated(currentPage: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${currentPage}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err.response.data.status_message);
        return err.response.data.status_message;
      });
  },
};

export const getSearchApi = {
  getMulti(query: string) {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
  getMovies(query: string, currentPage: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=${currentPage}&include_adult=false`
      )
      .then((res) => {
        //console.log(res.data)
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
  getTv(query: string, currentPage: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&query=${query}&page=${currentPage}&include_adult=false`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
  getPeople(query: string, currentPage: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/person?api_key=${api_key}&language=en-US&query=${query}&page=${currentPage}&include_adult=false`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
  getCollection(query: string, currentPage: number) {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/collection?api_key=${api_key}&language=en-US&query=${query}&page=${currentPage}&include_adult=false`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
};

export const getLangsApi = {
  getLangs() {
    return axios
      .get(
        `https://api.themoviedb.org/3/configuration/languages?api_key=${api_key}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
  getTranslations() {
    return axios
      .get(
        `https://api.themoviedb.org/3/configuration/primary_translations?api_key=${api_key}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
  getLanguage(language: string) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}}`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data.status_message;
      });
  },
};
