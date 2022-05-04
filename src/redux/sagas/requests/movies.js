import axios from 'axios';

export function requestGetMovies() {
	return axios.request({
		method: 'get',
		url: `https://imdb-api.com/en/API/Top250Movies/k_u4qxpvu4`,
	});
}
