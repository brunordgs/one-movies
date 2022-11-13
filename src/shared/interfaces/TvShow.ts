import { Cast } from './Cast';

export interface TvShow {
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	first_air_date: string;
	vote_average: number;
	genres: {
		id: number;
		name: string;
	}[];
	trailer: {
		id: string;
		site: 'YouTube' | 'Vimeo';
	};
	cast: Cast[];
	images: {
		file_path: string;
	}[];
	created_by: {
		name: string;
	}[];
}
