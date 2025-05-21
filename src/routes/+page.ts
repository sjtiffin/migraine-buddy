import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return {
		weather: {
			temperature: '69F',
			barometer: 'bad',
			sun: 'too big'
		}
	};
};
