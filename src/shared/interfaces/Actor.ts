export interface Actor {
	biography: string;
	birthday: string;
	name: string;
	place_of_birth: string;
	profile_path: string;
	credits: {
		id: number;
		title: string;
		release_date: string;
		character: string;
	}[];
	castMovies: {
		id: number;
		name: string;
		title: string;
		poster_path: string;
		popularity: number;
	}[];
	social: {
		facebook_id: string;
		instagram_id: string;
		twitter_id: string;
	};
}
