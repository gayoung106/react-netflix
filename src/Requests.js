const key = "44c5fd4ee0738d9a9868b3276aa52a97";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1&`,
  requestVideo: `https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=${key}&language=en-US`,
  requestTrend: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=ko&page=1&region=kr`,
};

export default requests;
