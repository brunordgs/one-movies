import { Cast } from './Cast';

export interface Movie {
	id: number;
	title: string;
	overview: string;
	poster_path: string;
	release_date: string;
	vote_average: number;
	genres: {
		id: number;
		name: string;
	}[];
	trailerId: string;
	cast: Cast[];
	images: {
		file_path: string;
	}[];
}
