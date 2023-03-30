const key = "44c5fd4ee0738d9a9868b3276aa52a97";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ko&page=1&region=kr`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=ko&page=1&region=kr`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=ko&page=2&region=kr`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=ko&query=horror&page=1&include_adult=false&region=kr`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=ko&page=1&region=kr`,
  requestVideo: `https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=${key}&language=ko`,
};

export default requests;
