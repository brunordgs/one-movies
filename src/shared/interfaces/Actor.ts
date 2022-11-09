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
}
